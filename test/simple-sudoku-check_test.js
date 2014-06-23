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
    test.expect(6);

    // a valid sudoku solution from http://en.wikipedia.org/wiki/Sudoku
    // 534678912672195348198342567859761423426853791713924856961537284287419635345286179
    test.ok(simpleSudokuCheck.isValidSolution('534678912672195348198342567859761423426853791713924856961537284287419635345286179'), 'should be valid!');
    // not long enough -> invalid
    test.ok(!simpleSudokuCheck.isValidSolution('123456789'), 'not long enough, not valid.');
    // empty string for solution -> invalid
    test.ok(!simpleSudokuCheck.isValidSolution(''), 'should not be a valid length.');
    // too long -> invalid
    test.ok(!simpleSudokuCheck.isValidSolution('123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789'), 'should not be a valid length.');
    // contains alphabet characters -> not valid
    test.ok(!simpleSudokuCheck.isValidSolution('ABCDEFGHIABCDEFGHIABCDEFGHIABCDEFGHIABCDEFGHIABCDEFGHIABCDEFGHIABCDEFGHIABCDEFGHI'), 'contains invalid characters.');
    // contains 0, when only 1-9 is valid -> not valid
    test.ok(!simpleSudokuCheck.isValidSolution('012345678012345678012345678012345678012345678012345678012345678012345678012345678'), 'contains invalid characters.');

    // done
    test.done();
  }
};
