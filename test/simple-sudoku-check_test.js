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
    test.expect(2);
    // tests here
    // a valid sudoku solution from http://en.wikipedia.org/wiki/Sudoku
    // 534678912672195348198342567859761423426853791713924856961537284287419635345286179
    test.ok(simpleSudokuCheck.isValidSolution('534678912672195348198342567859761423426853791713924856961537284287419635345286179'), 'should be valid!');
    test.ok(!simpleSudokuCheck.isValidSolution('123456789'), 'should not be valid!');
    test.done();
  },

  'is valid length': function(test) {
    test.expect(4);
    test.ok(simpleSudokuCheck.isValidSolution('534678912672195348198342567859761423426853791713924856961537284287419635345286179'), 'should be a valid length.');
    // not long enough -> invalid
    test.ok(!simpleSudokuCheck.isValidSolution('123456789'), 'should not be a valid length.');
    // empty string -> invalid
    test.ok(!simpleSudokuCheck.isValidSolution(''), 'should not be a valid length.');
    // too long -> invalid
    test.ok(!simpleSudokuCheck.isValidSolution('123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789'), 'should not be a valid length.');
    test.done();
  },

  'contains valid characters': function(test) {
    test.expect(3);
    test.ok(simpleSudokuCheck.isValidSolution('534678912672195348198342567859761423426853791713924856961537284287419635345286179'), 'contains valid characters.');
    test.ok(!simpleSudokuCheck.isValidSolution('ABCDEFGHIABCDEFGHIABCDEFGHIABCDEFGHIABCDEFGHIABCDEFGHIABCDEFGHIABCDEFGHIABCDEFGHI'), 'contains invalid characters.');
    test.ok(!simpleSudokuCheck.isValidSolution('012345678012345678012345678012345678012345678012345678012345678012345678012345678'), 'contains invalid characters.');
    test.done();
  }
};
