function arrayOf(size) {
  return Array.apply(null, Array(size))
}

/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = arrayOf;  // allows CommonJS/Node.js require()
}
