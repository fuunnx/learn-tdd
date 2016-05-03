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


module.exports = {
  arrayOf: arrayOf
}
