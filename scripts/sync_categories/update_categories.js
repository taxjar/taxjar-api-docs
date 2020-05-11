const fs = require('fs-extra');

const categoriesPath = './source/includes/endpoints/_categories.md';

/**
 * Updates source/includes/endpoints/_categories.md to match the categories returned from the TaxJar API
 * (This script will only run if a difference actually exists)
 *
 * @param {Categories} cats The categories returned from the TaxJar API, sorted by name
 * @param {FlagsByPtc} flagsByPtc The `flag-icon` spans for all categories by product tax code
 * @returns {Promise.<undefined>} Overwrites _categories.md with updated categories from the API
 */
module.exports = async (cats, flagsByPtc) => {
  /**
   * Retrieves the flags representing the jurisdictions where a given category applies
   * and transforms them into HTML <span> elements for display purposes
   *
   * Note：Defaults to United States for all new categories;
   * manual update is required if a category applies in other jurisdictions
   *
   * @param {Category} cat The category to retrieve the flags for
   * @returns {String} Space-separated <span> elements to show the appropriate flags for a category
   */
  const getFlags = ({product_tax_code}) => {
    const flags = [];
    let curr = flagsByPtc[product_tax_code] || flagsByPtc.default;
    while (curr) {
      if (curr.name === 'span')
        flags.push(curr.attribs);
      curr = curr.next;
    }
    return flags.map(attribs => `<span ${
      Object.entries(attribs).map(([key, val]) => `${key}="${val}"`).join(' ')
    }></span>`).join(' ');
  };

  return fs.readFile(categoriesPath, 'utf8').then(contents => fs.writeFile(
    categoriesPath,
    contents.replace(/(\|\n)\|\s.*\|\n(\n####)/s, `$1${cats.map(cat => (
      `| ${cat.name} | ${cat.product_tax_code} | ${getFlags(cat)} | ${cat.description} |\n`
    )).join('')}$2`),
  ));
};
