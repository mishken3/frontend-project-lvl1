import readlineSync from 'readline-sync';
import { generateRandomNumber, checkAnswer } from '../utils.js';
import app from '../index.js';

const EXPLANATION_GAME_TEXT = 'Answer "yes" if the number is even, otherwise answer "no".';

const getIsEvenNumber = (number) => number % 2 === 0;

const isEvenGameProcess = () => {
  const randomNumber = generateRandomNumber();
  const isEvenNumber = getIsEvenNumber(randomNumber) ? 'yes' : 'no';
  console.log(`Question: ${randomNumber}`);
  const userInput = readlineSync.question('Your answer: ').toLowerCase();

  checkAnswer(userInput, isEvenNumber);
};

const isEvenGame = () => {
  console.log(EXPLANATION_GAME_TEXT);

  isEvenGameProcess();
};

export default () => app(isEvenGame);
