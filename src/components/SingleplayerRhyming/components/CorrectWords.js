import React from 'react'

const CorrectWords = ({ correctWords }) => {

  return (
    <div className="correct-words-container">
      <div>
        {correctWords.length > 0 && 
          <p>Correct</p>
        }
        {correctWords
          .map((word, i) => <span key={i}>{word}</span>)
          .reduce((prev, curr) => prev === null ? [curr] : [prev, ',', curr], null)}
      </div>
    </div>
  )
}

export default CorrectWords
