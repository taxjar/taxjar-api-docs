const fs = require('fs-extra');

const {date, currentMonthAndYear} = require('./helpers');

const changelogPath = './source/includes/_changelog.md';

/**
 * Updates source/includes/_changelog.md to display newly released categories
 * (This script will only run if new categories actually exist)
 *
 * @param {Categories} newCats Categories returned from the API, but not yet included in the docs
 * @returns {Promise.<undefined>} Writes the newly released categories to _changelog.md
 */
module.exports = newCats => {
  const isPlural = newCats.length > 1;
  const shouldCollapse = newCats.length > 5;
  const whitespace = shouldCollapse ? '  ' : '';

  /**
   * Generated HTML to be prepended to _changelog.md displaying all newly released categories
   */
  let changes = `#### ${date}

* <span class="badge badge--get">Accuracy</span> ${newCats.length} new tax categor${isPlural ? 'ies' : 'y'} now available.
${shouldCollapse ? '<details><summary>Click to see new tax categories</summary>' : ''}
${whitespace}<table>
${whitespace}  <th>Code</th><th>Category</th>
${
  newCats.map(({product_tax_code, name}) => (
    `${whitespace}  <tr><td>${product_tax_code}</td><td>${name}</td></tr>`
  )).join('\n')
}
${whitespace}</table>${shouldCollapse ? '\n</details>' : ''}\n\n`;

  return fs.readFile(changelogPath, 'utf8').then(contents => {
    /**
     * True if _changelog.md already has an entry this month, otherwise false
     */
    const continueMonth = contents.includes(currentMonthAndYear);

    /**
     * True if _changelog.md has already been updated for these exact changes, otherwise false; for example,
     * this job runs once a day so it's possible the automated PR won't be merged before the next run
     * (We'll want to skip updating _changelog.md in those cases)
     */
    const alreadyUpdated = contents.match(/(#{4}?.*?)#{3,4}?/s)[1]
      .replace(/\d{4}(?:-\d\d){2}/, date) === changes;

    if (!continueMonth)
      changes = `### ${currentMonthAndYear}\n\n${changes}`;

    if (!alreadyUpdated)
      return fs.writeFile(changelogPath, contents.replace(
        continueMonth ? /(#### .+)/ : /(### .+)/,
        `${changes}$1`,
      ));
  });
};
