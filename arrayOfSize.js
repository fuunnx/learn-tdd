/**
 * arrayOf generates an array of the given length. Usefull to generate ranges etc.
 * @param {number} length the length of the generated array
 * @returns {array} the generated array
 * @example
 * var myArray = arrayOf(3)
 * // ==> [undefined, undefined, undefined]
 * myArray.map((_, i) => i)
 * // ==> [1, 2, 3]
 */
function arrayOf(size) {
  return Array.apply(null, Array(size))
}

/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = arrayOf;  // allows CommonJS/Node.js require()
}
