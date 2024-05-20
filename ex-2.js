let words = ['apple', 'cat', 'dog', 'elephant'];

function get5CharWords(words) {
  // Start coding here
  return words.filter((word) => word.length > 4);
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
