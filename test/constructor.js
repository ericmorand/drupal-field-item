const tap = require('tap');
const DrupalFieldItem = require('../src');

tap.test('constructor', function (test) {
  test.plan(2);

  test.test('should support being passed no parameter', function (test) {
    let item = new DrupalFieldItem();

    test.ok(item);
    test.end();
  });

  test.test('should support being passed a parameter', function (test) {
    let item = new DrupalFieldItem('foo');

    test.equal(item.content, 'foo');
    test.end();
  });
});