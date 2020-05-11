/** @typedef {{name: String, product_tax_code: String, description: String}} Category */

/** @typedef {Array.<Category>} Categories */

/** @typedef {{name: String, attribs: {class: String, "data-tooltip": String, "data-tooltip-position": String}, next: Flags|Null}} Flags */

/**
 * Stores the `flag-icon` spans currently listed for each category at developers.taxjar.com/api/reference;
 * it is filled in during each run while parsing the documentation
 *
 * Note：Defaults to United States for all new categories;
 * manual update is required if a category applies in other jurisdictions
 *
 * @typedef {Object.<string, Flags>} FlagsByPtc
 */
