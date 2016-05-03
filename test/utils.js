var assert = require("assert"); // node.js core module
var utils = require('../utils.js');  // our module

describe('Utils', function(){
  describe('Module utils', function(){
    it('should have a arrayOf Method', function(){
      assert.equal(typeof utils, 'object');
      assert.equal(typeof utils.arrayOf, 'function');
    })

    it('arrayOf(0) should return []', function(){
      assert.deepEqual(utils.arrayOf(0), []);
    })

    it('arrayOf(2) should return [undefined, undefined]', function(){
      assert.deepEqual(utils.arrayOf(2), [undefined, undefined]);
    })

    it('arrayOf(100) should have a length of 100', function(){
      assert.deepEqual(utils.arrayOf(100).length, 100);
    })
  })
});
