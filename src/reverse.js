function reverse(word) {
  word = word.split('');
  let reversedWord = '';
  for (let i = word.length - 1; i > -1; i--) {
    reversedWord += word[i];
  }

  return reversedWord;
}

module.exports = reverse;
