/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

function maxRecurringChar(text) {
  let charMap = {};
  let maxVal = 0;
  let letters = [];
  let values = [];
  //initialize an empty object
  for (let char of text) {
    //for loop iterating through text with the 'char' iterator
    if (charMap.hasOwnProperty(char)) {
      //if the charMap has a property of the iterable
      charMap[char]++;
      //iterate up one
    } else {
      //otherwise
      charMap[char] = 1;
      //set the charMap equal to one to start out with
    }
  }
  letters = Object.keys(charMap);
  values = Object.values(charMap);
  maxVal = Math.max(...values);
  return charArray[vaulesArray.indexOf(maxVal)];
}

module.exports = maxRecurringChar;
