#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetings } from '../src/cli.js';

const MAX_GAMES_COUNTER = 3;

const EXPLANATION_GAME_TEXT =
  'Answer "yes" if the number is even, otherwise answer "no".';

const generateNumber = () => Math.floor(Math.random() * 100);
const getIsEvenNumber = (number) => number % 2 === 0;

const isEvenGameProcess = (userName, gameCounter) => {
  let counter = gameCounter;
  if (counter === MAX_GAMES_COUNTER) {
    console.log(`Congratulations, ${userName}`);
    return;
  }

  const randomNumber = generateNumber();
  const isEvenNumber = getIsEvenNumber(randomNumber) ? 'yes' : 'no';
  console.log(`Question: ${randomNumber}`);
  const userInput = readlineSync.question('Your answer: ');

  if (userInput === isEvenNumber) {
    console.log('Correct!');
    isEvenGameProcess(userName, counter + 1);
  } else {
    const correctionText = `'${userInput}' is wrong answer ;(. Correct answer was '${isEvenNumber}'.`;
    console.log(correctionText);
  }
};

const isEvenGame = (userName) => {
  console.log(EXPLANATION_GAME_TEXT);

  isEvenGameProcess(userName, 0);
};

isEvenGame(greetings());
