import readlineSync from 'readline-sync';
import { generateRandomNumber, MAX_GAMES_COUNTER } from './utils.js';

const EXPLANATION_GAME_TEXT = 'What is the result of the expression?';

const generateRandomMathSign = () => {
  const mathSigns = ['+', '-', '*'];
  const index = Math.floor(Math.random() * 3);

  return mathSigns[index];
};

const calcGameProcess = (userName, gameCounter) => {
  const counter = gameCounter;
  if (counter === MAX_GAMES_COUNTER) {
    console.log(`Congratulations, ${userName}`);
    return;
  }

  const randomNumberOne = generateRandomNumber();
  const randomNumberTwo = generateRandomNumber();
  const randomSign = generateRandomMathSign();
  // eslint-disable-next-line no-eval
  const expressionResult = eval(`${randomNumberOne} ${randomSign} ${randomNumberTwo}`);

  console.log(`Question: ${randomNumberOne} ${randomSign} ${randomNumberTwo}`);
  const userInput = parseInt(readlineSync.question('Your answer: '), 10);

  if (userInput === expressionResult) {
    console.log('Correct!');
    calcGameProcess(userName, counter + 1);
  } else {
    const correctionText = `'${userInput}' is wrong answer ;(. Correct answer was '${expressionResult}'.`;
    console.log(correctionText);
  }
};

export const calcGame = (userName) => {
  console.log(EXPLANATION_GAME_TEXT);

  calcGameProcess(userName, 0);
};
