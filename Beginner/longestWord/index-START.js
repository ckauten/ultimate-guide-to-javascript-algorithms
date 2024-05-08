/* CHALLENGE
Given a string of text, write an algorithm that finds the longest word
*/

function longestWord(text) {
  text = text.split(' ');
  //splits text into an array containing the words
  let sorted = text.sort((a, b) => a.length - b.length);
  //sorts the array by the length of the words
  return sorted[sorted.length - 1];
  //returns the word in the last position since it will be the longest
}

module.exports = longestWord;
