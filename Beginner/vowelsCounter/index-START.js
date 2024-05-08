/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

function vowelsCounter(text) {
  text = text.match(/[aeiou]/gi);
  return text.length > 0 ? text.length : 0;
}

module.exports = vowelsCounter;
