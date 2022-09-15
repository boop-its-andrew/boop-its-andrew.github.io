import React from 'react';

const Word = ({ selectedWord}) => {
  //const missingLetter = Math.floor(Math.random() * selectedWord.length);
  return (
    <div className="word">
      {selectedWord == '' ? 
      <span className = "letter">
        {' '}
      </span>
      : selectedWord.map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {letter}
          </span>
        )
      })}
      
    </div>
  )
}
//(i == missingLetter ? '' : letter)
export default Word
