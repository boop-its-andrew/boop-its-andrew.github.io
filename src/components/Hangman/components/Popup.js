import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';

export const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, restart, difficulty, isStarted}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;
  if (isStarted == false) {
  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = 'Congratulations! You won! 😃';
    playable = false;
  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'Unfortunately you lost. 😕';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
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

export const StartHangman = ({isStarted, easy, medium, hard}) => {
  let instructions = 'You will hear a word, but you will only be given some of the letters. Type in the missing letters.';
  let clarification = 'You may type in the missing letters in any order.';
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
