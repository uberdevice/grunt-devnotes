'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit
  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.devnotes = {
    setUp: function(done) {
        // setup here if necessary
        done();
    },
    load: function(test) {
        test.expect(1);

        var actual = require('../tasks/devnotes').updateDevNotes;
        var homepage = actual();
        console.log(' stdout was ' + actual());
        var expected = 'function';
        var expectedUrl = "https://github.com/uberdevice/grunt-devnotes#readme";
        test.equal(typeof actual, expected, 'Should export updateDevNotes function.');
        test.equal(homepage, expectedUrl, 'Should be the homepage of the module.');
        test.done();
    }
};
