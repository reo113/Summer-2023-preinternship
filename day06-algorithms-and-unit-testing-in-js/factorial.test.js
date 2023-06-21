const factorial = require('./factorial');

describe('factorial(n) computes the factorial of n', () =>{
    expect(factorial(0)).toEqual(1);
})