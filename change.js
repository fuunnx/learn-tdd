/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  arrayOf = require('./arrayOfSize');  // allows CommonJS/Node.js require()
}


function getChange (totalPayable, cashPaid) {
  var coins = [200, 100, 50, 20, 10, 5, 2, 1];
  var remaining = cashPaid - totalPayable

  var change = coins.reduce(function(change, coin) {
    if (coin > remaining) return change
    var times = Math.floor(remaining / coin)
    remaining = remaining % coin

    return change.concat(arrayOf(times).map(function() {return coin}))
  }, [])


  return change;
};


/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = getChange;  // allows CommonJS/Node.js require()
}
