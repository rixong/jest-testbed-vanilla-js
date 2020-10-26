import sayName from './sayName.js';

const { test, expect, describe } = require('@jest/globals');
// const sayName = require('../sayName');

describe.only('My suite of name tests', () => {
  test('says a name', () => {
    expect(sayName('Rick')).toBe('My name is Rick');
  });
  test('an empty name', () => {
    expect(sayName('')).toBe('No name entered');
  });
});
