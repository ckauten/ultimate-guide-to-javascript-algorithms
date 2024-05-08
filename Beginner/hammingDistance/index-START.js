/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/

function hammingDistance(stringA, stringB) {
  let counter = 0;
  //initialize the counter
  for (let i = 0; i < stringA.length; i++) {
    //create for loop to iterate through stringA
    if (stringA[i] !== stringB[i]) {
      //if the current letter of stringA !== stringB
      stringA[i] = stringB[i];
      //change that letter to the other one and add one to the counter
      counter++;
    } else {
      stringA[i] = stringA[i];
      //otherwise, do nothing
    }
  }
  return counter;
}

module.exports = hammingDistance;
