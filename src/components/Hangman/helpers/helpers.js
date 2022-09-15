

export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(correct, wrong, word) {
  let status = 'win';

  // Check for win
  word.split('').forEach(letter => {
    if(!correct.includes(letter)){
      status = '';
    }
  });
  
  // Check for lose
  if(wrong.length === 6) status = 'lose';

  return status
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
