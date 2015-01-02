'use strict';

var calculator = require('../../src/js/calculator');

describe('Calculator', function () {

  it('should calculate square', function () {
    expect(calculator.square(5)).toEqual(25);
  });

});
