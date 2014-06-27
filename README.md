# simple-sudoku-check [![Build Status](https://secure.travis-ci.org/jbranchaud/simple-sudoku-check.png?branch=master)](http://travis-ci.org/jbranchaud/simple-sudoku-check)

An inexpensive, preliminary validity check of a Sudoku solution to be used before another process soundly checks the solution.

## Getting Started

Install the module with: `npm install simple-sudoku-check`

```javascript
var simpleSudokuCheck = require('simple-sudoku-check');
simpleSudokuCheck.isValidSolution('534678912672195348198342567859761423426853791713924856961537284287419635345286179');
//=> true
```

## Documentation

This module consists of a single exported function, `isValidSolution()`,
which accepts a string and checks that it meets the following criteria:

- the string contains exactly 81 characters
- the string's characters are only 1-9
- the solution is balanced such that each value, 1-9, appears exactly 9
  times

If these criteria are met, `true` is returned. Otherwise `false` is
returned.

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License

Copyright &copy; 2014 Josh Branchaud.

Licensed under the MIT license. See LICENSE for details.
