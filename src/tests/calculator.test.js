const calculations = require('../calculator.js');

test('addition of 1 and 2', () => {
  expect(calculations.add(1, 2)).toBe(3);
});
test('addition of 7 and 9', () => {
  expect(calculations.add(7, 9)).toBe(16);
});

test('subtraction of 5 and 7', () => {
  expect(calculations.subtract(6, 3)).toBe(3);
});

test('subtract 1 and 2', () => {
  expect(calculations.subtract(1, 2)).toBe(-1);
});

test('multiply 3 and 9', () => {
  expect(calculations.multiply(3, 9)).toBe(27);
});

test('multiply 2 and 3 ', () => {
  expect(calculations.multiply(2, 3)).toBe(6);
});

test('division of 9 and 3', () => {
  expect(calculations.divide(9, 3)).toBe(3);
});

test('division of 10 and 2', () => {
  expect(calculations.divide(10, 2)).toBe(5);
});
