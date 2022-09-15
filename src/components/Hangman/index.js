import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import {Popup, StartHangman} from './components/Popup';
import Notification from './components/Notification';
import { showNotification as show, checkWin } from './helpers/helpers';
import {randomWordOfMultipleSizes} from './helpers/helpers';
//import Speak from './components/TextToSpeech';
import { useSpeechSynthesis } from 'react-speech-kit';
import './index.scss';
const words = ['application', 'programming', 'interface', 'wizard'];
let selectedWord = '';


function Hangman() {
  //if the word has duplicate letters, there is a chance that that duplicate letter is removed, but added
  //again because the rest of the letters are added as correct. We need to remove only unique letters
  //or we can modify the way correct letters are processed
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [difficulty, setDifficulty] = useState("e");
  const [text,setText] = useState('');
  const {speak} = useSpeechSynthesis();

  //setCorrectLetters([]);
  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function easy() {
    setPlayable(true);
    setIsStarted(true);
    selectedWord = randomWordOfMultipleSizes(2, 4);
    setWrongLetters([]);
    setCorrectLetters([]);
    hideLetters(1);
    setDifficulty("e");
    setText(selectedWord);
  }
  function medium() {
    setPlayable(true);
    setIsStarted(true);
    selectedWord = randomWordOfMultipleSizes(5, 7);
    setWrongLetters([]);
    setCorrectLetters([]);
    hideLetters(2);
    setDifficulty("m");
    setText(selectedWord);
  }
  function hard() {
    setPlayable(true);
    setIsStarted(true);
    selectedWord = randomWordOfMultipleSizes(8, 10);
    setWrongLetters([]);
    setCorrectLetters([]);
    hideLetters(3);
    setDifficulty("h");
    setText(selectedWord);
  }
  function restart() {
    setPlayable(true);
    setIsStarted(false);
  }
  function hideLetters(amount) {
    //this function ensures you do not hide duplicate letters
    const selectedWordArray = selectedWord.split('');
    let splicedWord = [...selectedWordArray];
    let previousSplicedWord = [...splicedWord];
    while (amount > 0) {
      let randomIndex = Math.floor(Math.random() * splicedWord.length);
      let splicedLetter = splicedWord.splice(randomIndex, 1);
      if (splicedWord.includes(splicedLetter[0])) {
        splicedWord = [...previousSplicedWord];
      } else {
        previousSplicedWord = [...splicedWord];
        amount--;
      }
    }
    setCorrectLetters(splicedWord);
  }
  function handleListen() {
    speak({text:text});
  }
  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <StartHangman isStarted = {isStarted} easy = {easy} medium = {medium} hard = {hard} />
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} restart={restart} difficulty = {difficulty == "h" ? hard : (difficulty == "m" ? medium : easy)} isStarted = {isStarted}/>
      <Notification showNotification={showNotification} />
      <div className = "popup" id = "listen">
        <button className="buttonStyle" onClick={handleListen}>Listen</button>
      </div>
    </>
  );
}
export default Hangman;
