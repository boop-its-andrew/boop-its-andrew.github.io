import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import WrongWords from './components/WrongWords';
import CorrectWords from './components/CorrectWords'
import Word from './components/Word';
import {Popup, StartSPRhyming} from './components/Popup';
import Notification from './components/Notification';
import { showNotification as show, checkWin } from './helpers/helpers';
import {randomWordOfRhymingDifficulty} from './helpers/helpers';
//import Speak from './components/TextToSpeech';
import { useSpeechSynthesis } from 'react-speech-kit';
import './index.scss';
let selectedWord = '';

function SPRhyming() {
  //if the word has duplicate letters, there is a chance that that duplicate letter is removed, but added
  //again because the rest of the letters are added as correct. We need to remove only unique letters
  //or we can modify the way correct letters are processed
  const [playable, setPlayable] = useState(true);
  const [correctWords, setCorrectWords] = useState([]);
  const [wrongWords, setWrongWords] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [difficulty, setDifficulty] = useState("e");
  const [text,setText] = useState('');
  const [word, setWord] = useState([]);
  const {speak} = useSpeechSynthesis();
  const [rhymingWords, setRhymingWords] = useState([]);
  const Ref = useRef(null);
  const [timer, setTimer] = useState('00:00:30');

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && ((keyCode >= 65 && keyCode <= 90) || keyCode == 32)) {
        const letter = key.toLowerCase();
        setWord(currentLetters => [...currentLetters, letter]);
      } else if (keyCode == 8) {
        //if backspace is pressed
        setWord(currentLetters => currentLetters.filter((_, index) => index !== (currentLetters.length - 1)));
      } else if (key == 'Enter') {
        //if enter is pressed, check if the word rhymes, then add it to the list of correct words or incorrect words
        //after adding it to a list, reset the word
        //checkRhyme("select", "effect") ?
        var str = word.join('');
        const wordsEqual = (element) => element.join('') == str;
        if (!correctWords.some(wordsEqual) && !wrongWords.some(wordsEqual)) {
            var isCorrect = false;
            rhymingWords.forEach(element => {
                if (element == str) {
                    setCorrectWords(currentWords => [...currentWords, word]);
                    isCorrect = true;
                }
            })
            if (!isCorrect) {setWrongWords(currentWords => [...currentWords, word]);}
            setWord([]);
        } else {
            show(setShowNotification);
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctWords, wrongWords, playable, word]);

  function easy() {
    setPlayable(true);
    setIsStarted(true);
    selectedWord = randomWordOfRhymingDifficulty("easy");
    buildRhymingWords(selectedWord);
    setWrongWords([]);
    setCorrectWords([]);
    setDifficulty("e");
    setText(selectedWord);
    clearTimer(getDeadTime());
  }

  function medium() {
    setPlayable(true);
    setIsStarted(true);
    selectedWord = randomWordOfRhymingDifficulty("medium");
    buildRhymingWords(selectedWord);
    setWrongWords([]);
    setCorrectWords([]);
    setDifficulty("m");
    setText(selectedWord);
    clearTimer(getDeadTime());
  }

  function hard() {
    setPlayable(true);
    setIsStarted(true);
    selectedWord = randomWordOfRhymingDifficulty("hard");
    buildRhymingWords(selectedWord);
    setWrongWords([]);
    setCorrectWords([]);
    setDifficulty("h");
    setText(selectedWord);
    clearTimer(getDeadTime());
  }

  function restart() {
    setPlayable(true);
    setIsStarted(false);
  }

  function handleListen() {
    speak({text:text});
  }

  function buildRhymingWords(selectedWord) {
    var perfect = 'https://api.datamuse.com/words?rel_rhy=';
    var near = 'https://api.datamuse.com/words?rel_nry=';
    const axios = require('axios');
    axios.get(perfect+selectedWord).then(resp => {
        var data = resp.data;
        data.forEach(element => {
            const splitElement = JSON.stringify(element).split(/["]/);
            setRhymingWords(currentWords => [...currentWords, splitElement[3]]);
        });
    });
    axios.get(near+selectedWord).then(resp => {
        var data = resp.data;
        data.forEach(element => {
            const splitElement = JSON.stringify(element).split(/["]/);
            setRhymingWords(currentWords => [...currentWords, splitElement[3]]);
        });
    });
  }

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
        total, hours, minutes, seconds
    };
  }
  const startTimer = (e) => {
    let { total, hours, minutes, seconds } 
                = getTimeRemaining(e);
    if (total >= 0) {

        // update the timer
        // check if less than 10 then we need to 
        // add '0' at the beginning of the variable
        setTimer(
            (hours > 9 ? hours : '0' + hours) + ':' +
            (minutes > 9 ? minutes : '0' + minutes) + ':'
            + (seconds > 9 ? seconds : '0' + seconds)
        )
    }
  }
  const clearTimer = (e) => {
  
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next    
    setTimer('00:00:30');

    // If you try to remove this line the 
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
        startTimer(e);
    }, 1000)
    Ref.current = id;
  }
  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if 
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 30);
    return deadline;
  }
  return (
    <>
      <Header />
      <div className="game-container">
        <div className = "display-word">
            {selectedWord}
        </div>
        <CorrectWords correctWords={correctWords} />
        <WrongWords wrongWords={wrongWords} />
        <Word selectedWord={word}/>
        <h2 id = 'timer'>{timer}</h2>
      </div>
      <StartSPRhyming isStarted = {isStarted} easy = {easy} medium = {medium} hard = {hard} />
      <Notification showNotification={showNotification} />
      <Popup correctWords={correctWords} setPlayable={setPlayable} restart={restart} difficulty = {difficulty == "h" ? hard : (difficulty == "m" ? medium : easy)} isStarted = {isStarted} timer = {timer}/>
      <div className = "popup" id = "listen">
        <button classNamde="buttonStyle" onClick={handleListen}>Listen</button>
      </div>
    </>
  );
}

export default SPRhyming;
