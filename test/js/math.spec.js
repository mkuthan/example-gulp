'use strict';

var math = require('../../src/js/math');

describe('Math library', function () {

  it('should add two numbers', function () {
    expect(math.add(2, 3)).toEqual(5);
  });

  it('should subtract two numbers', function () {
    expect(math.subtract(2, 3)).toEqual(-1);
  });

  it('should multiply two numbers', function () {
    expect(math.multiply(2, 3)).toEqual(6);
  });

  it('should divide two numbers', function () {
    expect(math.divide(6, 3)).toEqual(2);
  });

});
