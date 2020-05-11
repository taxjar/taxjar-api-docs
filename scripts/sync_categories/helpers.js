const boxen = require('boxen');
const {diffLines} = require('diff');
const {green, red, grey, yellow} = require('chalk');

/** @example 2020-05-08 */
const date = new Date().toLocaleString('fr-CA').slice(0, 10);

/** @example May 2020 */
const currentMonthAndYear = new Date().toLocaleString('en-US', {month: 'long', year: 'numeric'});

/**
 * Stores the `flag-icon` spans currently listed for each category at developers.taxjar.com/api/reference;
 * it is filled in during each run while parsing the documentation
 *
 * Note：Defaults to United States for all new categories;
 * manual update is required if a category applies in other jurisdictions
 *
 * @type {FlagsByPtc} flagsByPtc
 */
const flagsByPtc = {
  default: {
    name: 'span',
    attribs: {
      class: 'flag-icon flag-icon-us',
      'data-tooltip': 'United States',
      'data-tooltip-position': 'top center',
    },
    next: null,
  },
};

/**
 * Function for sorting categories alphanumerically by name
 *
 * @param {Category} a A product tax category
 * @param {Category} b The product tax category to compare to `a`
 * @returns {Number} Positive, negative or zero
 */
const byName = (a, b) => a.name.localeCompare(b.name);

/**
 * Function for filtering out unchanged product tax categories from the diff
 *
 * @param {String} catDiff A multiline diff of the product tax category to filter or not
 * @returns {Boolean} True if the category has changed, false if not
 */
const hasDiff = catDiff => catDiff.split('\n').length > 4;

/**
 * @param {String} a string to diff with b
 * @param {String} b string to diff with a
 * @returns {String} a formatted diff of the two strings
 */
const diffify = (a, b) => diffLines(a, b).filter(({value}) => value.trim()).map(({added, removed, value}) => {
  const isNew = /NEW/.test(value);
  const color = added ? green : removed ? red : grey;
  const sign = !isNew && added ? '+' : removed ? '-' : '';
  return `${color(sign + value)}\n`;
}).join('');

/**
 * @param {String} str String to surround with a box
 * @returns {String} `str`, but surrounded by a box and colored yellow
 * @example box('NEW'); // looks like:
 * // +---------+
 * // -   NEW   -
 * // +---------+
 */
const box = str => yellow(boxen(str.toString(), {
  padding: {left: 3, right: 3},
  borderStyle: {
    topLeft: '+',
    topRight: '+',
    bottomLeft: '+',
    bottomRight: '+',
    horizontal: '-',
    vertical: '-',
  },
}));

/**
 * Fails the build by exiting with code 1
 *
 * @param {Error} err The error to print the stacktrace of
 * @returns {void}
 */
const failBuild = err => {
  console.error(red(err.stack));
  process.exitCode = 1;
};

module.exports = {
  date,
  currentMonthAndYear,
  flagsByPtc,
  byName,
  hasDiff,
  diffify,
  box,
  failBuild,
};
