/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

function palindromeChecker(text) {
  return text == text.split('').reverse().join('');
  //checks to see if the text equals the text split, reversed and joined again
}

module.exports = palindromeChecker;
