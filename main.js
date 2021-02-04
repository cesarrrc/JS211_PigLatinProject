'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let pigLatin = (input) => {

  let word = input.replace(/\s+/g, '').toLowerCase();
    
  //***** this is a different Method I found online  ******/
  // let firstVowel = word.match(/[aeiou]/);
  // let firstPosition = word.indexOf(firstVowel);

  let findFirstVowelPosition = (word) =>  {
    for (let i=0; i<word.length; i++)  {
      if ("aeiou".indexOf(word[i]) !== -1) {
        return i;
      }
    }
  }
    
  let firstPosition = findFirstVowelPosition(word)
  
  if (firstPosition > 0)  {
    return word.slice(firstPosition) + '-' + word.slice(0, firstPosition) + 'ay';
  } else{
  return word +'-yay';
  }
};

// let findFirstVowelPosition = (word) =>  {
//   for (let i=0; i<word.length; i++)  {
//     if ("aeiou".indexOf(word[i]) !== -1) {
//       return i;
//     }
//   }
// }

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('Type here: ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'ar-cay');
      assert.equal(pigLatin('dog'), 'og-day');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eate-cray');
      assert.equal(pigLatin('valley'), 'alley-vay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'egg-yay');
      assert.equal(pigLatin('emission'), 'emission-yay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ello-hay');
      assert.equal(pigLatin(' RoCkEt'), 'ocket-ray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.