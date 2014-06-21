'use strict';

var simpleSudokuCheck = require('../lib/simple-sudoku-check.js');

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

exports.simpleSudokuCheck = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no args': function(test) {
    test.expect(1);
    // tests here
    // a valid sudoku solution from http://en.wikipedia.org/wiki/Sudoku
    // 534678912672195348198342567859761423426853791713924856961537284287419635345286179
    test.ok(simpleSudokuCheck.isValidSolution('534678912672195348198342567859761423426853791713924856961537284287419635345286179'), 'should be valid!');
    test.done();
  }
};
