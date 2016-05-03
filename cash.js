'use strict';
var utils = require('./utils')
var coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]

/**
 * getChange accepts two parameters (totalPayable and cashPaid) and calculates
 * the change in "coins" that needs to be returned.
 * @param {number} totalPayable the integer amount (in pennies) to be paid
 * @param {number} cashPaid the integer amount (in pennies) the person paid
 * @returns {array} list of coins we need to dispense to the person as change
 * @example
 * getChange(215, 300); // returns [50, 20, 10, 5]
 */
function getChange (totalPayable, cashPaid) {
  var remaining = cashPaid - totalPayable

  var change = coins.reduce(function(change, coin) {
    if (coin > remaining) return change
    var times = Math.floor(remaining / coin)
    remaining = remaining % coin

    return change.concat(utils.arrayOf(times).map(function() {return coin}))
  }, [])


  return change;
};

module.exports = {
  getChange: getChange,
  coins: coins
}
