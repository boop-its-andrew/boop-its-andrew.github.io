import React from 'react'

const WrongWords = ({ wrongWords }) => {

  return (
    <div className="wrong-words-container">
      <div>
        {wrongWords.length > 0 && 
          <p>Wrong</p>
        }
        {wrongWords
          .map((word, i) => <span key={i}>{word}</span>)
          .reduce((prev, curr) => prev === null ? [curr] : [prev, ',', curr], null)}
      </div>
    </div>
  )
}

export default WrongWords
