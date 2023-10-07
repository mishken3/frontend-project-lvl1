import readlineSync from 'readline-sync';
import { generateRandomNumber } from '../utils.js';

const EXPLANATION_GAME_TEXT = 'Find the greatest common divisor of given numbers.';

const getGcdNumber = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcdNumber(b, a % b);
};

const gcdGameProcess = () => {
  const numberOne = generateRandomNumber();
  const numberTwo = generateRandomNumber();
  const gcd = getGcdNumber(numberOne);

  console.log(`Question: ${numberOne} ${numberTwo}`);
  const userInput = readlineSync.question('Your answer: ');
  const userInputParsed = parseInt(userInput, 10);

  if (userInputParsed === gcd) {
    console.log('Correct!');
  } else {
    const userInputErr = Number.isNaN(userInputParsed) ? userInput : userInputParsed;
    const errObj = { userInput, correctAnswer: userInputErr };
    throw errObj;
  }
};

export const gcdGame = () => {
  console.log(EXPLANATION_GAME_TEXT);

  gcdGameProcess();
};