import React, { useEffect } from 'react';

export const Popup = ({correctWords, setPlayable, restart, difficulty, isStarted, timer}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;
  if (isStarted == false) {
  } else if(timer == '00:00:00') {
    correctWords.length == 0 ? 
    finalMessage = 'You got ' + correctWords.length + ' rhymes.' :
    correctWords.length == 1 ?
    finalMessage = 'You got ' + correctWords.length + ' rhyme!' :
    finalMessage = 'You got ' + correctWords.length + ' rhymes!'
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={difficulty}>Play Again</button>
        <button onClick={restart}>Change Difficulty</button>
      </div>
    </div>
  )
}

export const StartSPRhyming = ({isStarted, easy, medium, hard}) => {
  let instructions = 'Type as many words as you can that rhyme within the given word within the given time.';
  let clarification = 'Correct rhymes will be given points, but incorrect rhymes will not be penalized.';
  return (
    <div className="start-container" style={!isStarted ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{instructions}</h2>
        <h2>{clarification}</h2>
        <button onClick={easy}>Easy</button>
        <button onClick={medium}>Medium</button>
        <button onClick={hard}>Hard</button>
      </div>
    </div>
  );
}
