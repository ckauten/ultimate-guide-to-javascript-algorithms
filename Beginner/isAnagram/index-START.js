/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

function isAnagram(stringA, stringB) {
  function createCharMap(text) {
    let charMap = {};
    //initializes charMap an empty object
    for (let char of text) {
      if (charMap.hasOwnProperty(char)) {
        //if the char has its own property attached to it, increment the charMap[char] by 1
        charMap[char]++;
      } else {
        charMap[char] = 1;
        //otherwise, create the property and assign the value of 1 to it
      }
    }

    return charMap;
    //returns charMap to be used
  }
  if (stringA.length === stringB.length) {
    //checks to see if lengths are the same. The most important prerequisite
    let stringAMap = createCharMap(stringA);
    let stringBMap = createCharMap(stringB);

    for (let char in stringAMap) {
      if (stringAMap[char] !== stringBMap[char]) {
        //if the char property of stringBMap doesnt have the same number as the char property of the stringAMap, it returns false
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

module.exports = isAnagram;
