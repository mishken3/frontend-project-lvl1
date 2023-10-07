import readlineSync from 'readline-sync';
import { generateRandomNumber } from '../utils.js';

const EXPLANATION_GAME_TEXT = 'Answer "yes" if the number is even, otherwise answer "no".';

const getIsEvenNumber = (number) => number % 2 === 0;

const isEvenGameProcess = () => {
  const randomNumber = generateRandomNumber();
  const isEvenNumber = getIsEvenNumber(randomNumber) ? 'yes' : 'no';
  console.log(`Question: ${randomNumber}`);
  const userInput = readlineSync.question('Your answer: ').toLowerCase();

  if (userInput === isEvenNumber) {
    console.log('Correct!');
  } else {
    const errObj = { userInput, correctAnswer: isEvenNumber };
    throw errObj;
  }
};

export const isEvenGame = () => {
  console.log(EXPLANATION_GAME_TEXT);

  isEvenGameProcess();
};