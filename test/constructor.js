const tap = require('tap');
const DrupalFieldItem = require('../src');

tap.test('constructor', function (test) {
  test.plan(1);

  test.test('should support being passed no parameter', function (test) {
    let item = new DrupalFieldItem();

    test.ok(item);
    test.end();
  });
});