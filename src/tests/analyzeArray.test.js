const analyzeArray = require('../analyzeArray');

test('array [2,4,1,5]', () => {
  expect(analyzeArray([2, 4, 1, 5])).toStrictEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 4,
  });
});

test('array [1,8,3,4,2,6]', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
