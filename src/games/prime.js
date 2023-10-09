import readlineSync from 'readline-sync';
import { generateRandomNumber } from '../utils.js';

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

  const userInput = readlineSync.question('Your answer: ');
  const isPrimeAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  if (userInput === isPrimeAnswer) {
    console.log('Correct!');
  } else {
    const errObj = { userInput, correctAnswer: isPrimeAnswer };
    throw errObj;
  }
};

const isPrimeGame = () => {
  console.log(EXPLANATION_GAME_TEXT);

  isPrimeGameProcess();
};

export default isPrimeGame;
