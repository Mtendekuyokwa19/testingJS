const reverse = require('../reverse');
const {default: expect} = require('expect');

test('Otis to sitO', () => {
  expect(reverse('Otis')).toMatch('sitO');
});

test('jack to kcaj', () => {
  expect(reverse('jack')).toMatch('kcaj');
});
