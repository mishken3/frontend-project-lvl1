import readlineSync from 'readline-sync';
import { generateRandomNumber, checkAnswer } from '../utils.js';
import app from '../index.js';

const EXPLANATION_GAME_TEXT = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

const isPrimeGameProcess = () => {
  const randomNumber = generateRandomNumber();
  console.log(`Question: ${randomNumber}`);

  const isPrimeAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const userInput = readlineSync.question('Your answer: ');

  checkAnswer(userInput, isPrimeAnswer);
};

const isPrimeGame = () => {
  console.log(EXPLANATION_GAME_TEXT);

  isPrimeGameProcess();
};

export default () => app(isPrimeGame);
