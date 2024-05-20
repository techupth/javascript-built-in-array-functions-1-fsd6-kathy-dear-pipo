let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  // console.log(words);
  return words.map(function getLength(word) {
    return word.length;
  });
  // console.log(x)
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
