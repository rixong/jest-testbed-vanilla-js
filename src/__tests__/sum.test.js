import sum from '../sum';

const { test, expect, describe } = require('@jest/globals');
// const sum = require('../sum');


describe('Adds numbers', () => {
  test('the test', () => {
    expect(sum(4, 5)).toBe(9);
  });
});
