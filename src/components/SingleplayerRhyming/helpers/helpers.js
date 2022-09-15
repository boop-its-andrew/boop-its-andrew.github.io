

export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function randomWordOfSize(size) {
  const randomWords = require('random-words');
  let randomWord = randomWords();
  while (randomWord.length != size) {
    randomWord = randomWords();
  }
  return randomWord;
}

export function randomWordOfMultipleSizes(minLength, maxLength) {
  const randomWords = require('random-words');
  let randomWord = randomWords();
  let size = minLength + Math.floor(Math.random() * (maxLength-minLength));
  while (randomWord.length != size) {
    randomWord = randomWords();
  }
  return randomWord;
}

export function randomWordOfRhymingDifficulty(difficulty) {
  //Vowel Consonant Harmony generally implies that a word is harmonious if all vowels and consonants
  //are nasal, or not nasal, not a mix. We will simply assume that words with the last syllable
  //with no nasal sounds in front or within the syllable are easier. It is ok to end with it.
  //The easiest consonants are liquids
  const randomWords = require('random-words');
  let randomWord = randomWords();
  //An easy word is a word that contains a liquid (r or i) and does not contain a nasal (n or m) in the last four letters
  //but it is ok for it to be the last letter.
  if (difficulty == "easy") {
    const easiestWord = (word) => {
      var str = word.split('');
      if (str.includes('r') || str.includes('i')) {
        if (str.length <= 4) {
          return true;
        } else if (!str.splice((str.length - 4), 3).includes('n') && !str.splice((str.length - 4), 3).includes('m')) {
          return true;
        }
      }
      return false;
    }
    while (!easiestWord(randomWord)) {
      randomWord = randomWords();
    }
  } else if (difficulty == "medium") {
    const mediumWord = (word) => {
      var str = word.split('');
      if (str.includes('r') || str.includes('i')) {
        return true;
      }
      return false;
    }
    while (!mediumWord(randomWord)) {
      randomWord = randomWords();
    }
  }
  return randomWord;
}