import React from 'react';

const Word = ({ selectedWord, correctLetters }) => {
  //const missingLetter = Math.floor(Math.random() * selectedWord.length);
  return (
    <div className="word">
      {selectedWord.split('').map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        )
      })}
    </div>
  )
}
//(i == missingLetter ? '' : letter)
export default Word
