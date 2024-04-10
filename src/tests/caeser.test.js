const caeser = require('../caeser');

test('changing of word jack to MDFN', () => {
  expect(caeser.cipher('JA,CK', 3)).toBe('MD,FN');
});

test('changing the word speed to YVKKJ', () => {
  expect(caeser.cipher('SPEED', 6)).toBe('YVKKJ');
});

test('equivalentLetter for encryption 1', () => {
  expect(caeser.equivalentLetter('M', 6)).toBe('S');
});

test('equivalentLetter for enryption 2', () => {
  expect(caeser.equivalentLetter('J', 4)).toBe('N');
});

test('equivalent Letter in enctryption 2', () => {
  expect(caeser.equivalentLetter('K', 2)).toBe('M');
});

test('check if its array', () => {
  expect(caeser.checkIfIsArray(['A', 4, 1, 4])).toBeTruthy();
});

test('check if its a string array [2,4,5,2]', () => {
  const array = 'ABCD'.split('');
  expect(caeser.checkIfIsArray(array)).toBeTruthy();
});

test('bring out the alphabet for the letters', () => {
  expect(caeser.moveByShiftKey(8)).toBe(
      'I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,A,B,C,D,E,F,G,H',
  );
});

test('bring out the alphabet for letters 2', () => {
  expect(caeser.moveByShiftKey(3)).toBe(
      'D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,A,B,C',
  );
});

test('check if its alphanumberic or not', () => {
  expect(caeser.isAlpha('F')).toBeTruthy();
});

test('check if its alphanumeric', () => {
  expect(caeser.isAlpha('/')).toBeFalsy();
});
