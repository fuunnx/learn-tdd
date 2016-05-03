if (typeof module !== 'undefined' && module.exports) {
  var QUnit = require('qunitjs');
  var test = QUnit.test;
  require('qunit-tap')(QUnit, console.log);
  arrayOf = require('./arrayOfSize');
}

test('arrayOf(0) should return []', function(assert) {
  var result = arrayOf(0);
  var expected = [];
  assert.deepEqual(result, expected);
});

test('arrayOf(3) should return [undefined, undefined, undefined]', function(assert) {
  var result = arrayOf(3);
  var expected = [undefined, undefined, undefined];
  assert.deepEqual(result, expected);
});
