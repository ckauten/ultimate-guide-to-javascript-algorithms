/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

function capSentence(text) {
  let wordsArray = text.toLowerCase().split(' ');
  //creates a new array made of the words of the sentence, turned lowercase
  let capsArray = wordsArray.map((word) => {
    return word.replace(word[0], word[0].toUpperCase());
  });
  //maps out a new array to the 'capsArray' using map where the first letter of the word is replace with that letter capitolized

  return capsArray.join(' ');
  //returns a joined version of the capsArray
}

module.exports = capSentence;
