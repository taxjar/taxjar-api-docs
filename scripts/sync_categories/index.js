const fetch = require('node-fetch');
const $ = require('cheerio');
const chunk = require('lodash.chunk');
const differenceBy = require('lodash.differenceby');
const Taxjar = require('taxjar');
const {green, red, blueBright} = require('chalk');

const updateChangelog = require('./update_changelog');
const updateCategories = require('./update_categories');
const {
  flagsByPtc,
  byName,
  hasDiff,
  diffify,
  box,
  failBuild,
} = require('./helpers');

const client = new Taxjar({apiKey: process.env.TAXJAR_API_TOKEN});

/**
 * This script is triggered according to the cron job scheduled by .github/workflows/sync_categories.yml
 *
 * Logs a diff between the categories found at developers.taxjar.com/api/reference
 * and the categories from the TaxJar API at api.taxjar.com/v2/categories
 * If new categories exist, update_changelog.js is kicked off
 * If a diff exists, update_categories.js is kicked off
 */
module.exports = (async () => {
  const html = await fetch('https://developers.taxjar.com/api/reference').catch(failBuild);

  /**
   * An array of product tax categories created by parsing developers.taxjar.com/api/reference
   * (sorted by name)
   *
   * @type {Categories}
   */
  const docCats = chunk(Array.from($(
    'div.datatable + table > tbody > tr > td',
    await html.text().catch(failBuild),
  ), ({children}) => children[0]), 4)
    .map(([name, ptc, flags, description]) => {
      flagsByPtc[ptc.data] = flags;
      return {
        name: name.data.trim(),
        product_tax_code: ptc.data.trim(),
        description: description.data.trim(),
      };
    }).sort(byName);

  /**
   * An array of product tax categories created by parsing the API response from api.taxjar.com/v2/categories
   * (sorted by name)
   *
   * @type {Categories}
   */
  const apiCats = (await client.categories().catch(failBuild)).categories
    .map(({name, product_tax_code, description}) => ({
      name: name.trim(),
      product_tax_code: product_tax_code.trim(),
      description: description.replace('*(PLUS ONLY)*', '').trim(),
    })).sort(byName);

  /**
   * The product tax categories included in `apiCats`, but not included in `docCats`
   *
   * @type {Categories}
   */
  const newCats = differenceBy(apiCats, docCats, 'product_tax_code');

  const [longerList, shorterList] = apiCats.length > docCats.length ? [apiCats, docCats] : [docCats, apiCats];

  /**
   * Takes a category from `longerList` and finds the corresponding category in `shorterList`, if it exists
   *
   * @param {Category} cat The category from `longerList` to find a match for in `shorterList`
   * @returns {Category|void} The matching category from `shorterList` or undefined
   */
  const getMatchingCat = cat => shorterList.find(({name, product_tax_code, description}) => (
    product_tax_code === cat.product_tax_code ||
    (name === cat.name && description === cat.description)
  ));

  /**
   * Takes a category from `longerList` and diffs it with the corresponding category in `shorterList`
   * If it is a new category, adds a `NEW` label above it in the diff
   *
   * @param {Category} cat The category from `longerList` to diff with its match in `shorterList`
   * @returns {String} The multiline diff between `cat` and its match
   */
  const diffACat = cat => Object.entries(cat).map(
    ([key, val]) => newCats.includes(cat)
      ? diffify('', (key === 'name' && box('NEW') + green`\n+` + val) || val)
      : diffify(getMatchingCat(cat)[key], val),
  ).join('');

  /**
   * A color-coded diff between categories found at developers.taxjar.com/api/reference
   * and categories from the TaxJar API at api.taxjar.com/v2/categories
   */
  const diff = `${
    red(longerList === apiCats ? '-docs' : '-api')
  }\n${
    green(shorterList === apiCats ? '+docs' : '+api')
  }\n\n${
    longerList.map(diffACat).filter(hasDiff).join('\n')
  }`;

  const diffExists = diff.length > 29;

  console.log(diffExists ? diff : blueBright`The categories are already synched. ✅`);

  return Promise.all([
    newCats.length && updateChangelog(newCats),
    diffExists && updateCategories(apiCats, flagsByPtc),
  ]).catch(failBuild);
})();
