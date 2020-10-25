const { test, expect } = require('@jest/globals');
const { sum, multiply, makeDog } = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

test('multiplies 3 * 4 to equal 12', () => {
  expect(multiply(3, 4)).toBe(12);
  expect(multiply(2, 3)).toBe(6);
  expect(multiply(1, 2)).not.toBe(17);
});

test('makeDog makes a new dog with name and breed', () => {
  expect(makeDog('ChaCha', 'Collie')).toEqual({ name: 'ChaCha', breed: 'Collie' });
});
