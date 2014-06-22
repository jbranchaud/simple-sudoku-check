/*
 * simple-sudoku-check
 * https://github.com/jbranchaud/simple-sudoku-check
 *
 * Copyright (c) 2014 Josh Branchaud
 * Licensed under the MIT license.
 *
 * Assumptions: We are just talking about a 9X9 board here.
 */

'use strict';

// check that the length of the sudoku solution is exactly 81 characters
function isValidLength(solution) {
  return solution.length === 81;
}

// check that all the characters in the solution are in the range of 1-9
function containsValidCharacters(solution) {
  return solution.match(/[^1-9]/) === null;
}

module.exports = {

  // Determine if the given sudoku solution is a valid one. This is not
  // intended to check if the solution is correct, but rather that the
  // solution is valid enough to be worth checking.
  isValidSolution: function(solution) {
    return isValidLength(solution) && containsValidCharacters(solution);
  }

};
