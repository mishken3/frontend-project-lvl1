import readlineSync from 'readline-sync';
import { generateRandomNumber, checkAnswer } from '../utils.js';

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
  const gcd = getGcdNumber(numberOne, numberTwo);

  console.log(`Question: ${numberOne} ${numberTwo}`);
  const userInput = readlineSync.question('Your answer: ');

  checkAnswer(userInput, gcd);
};

const gcdGame = () => {
  console.log(EXPLANATION_GAME_TEXT);

  gcdGameProcess();
};

export default gcdGame;
