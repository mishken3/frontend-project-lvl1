import readlineSync from 'readline-sync';
import { generateRandomNumber } from '../utils.js';

const EXPLANATION_GAME_TEXT = 'What is the result of the expression?';

const generateRandomMathSign = () => {
  const mathSigns = ['+', '-', '*'];
  const index = Math.floor(Math.random() * 3);

  return mathSigns[index];
};

/*
map => key (*, +, -)
*/

const getExpressionString = () => {
  const numberOne = generateRandomNumber();
  const numberTwo = generateRandomNumber();
  const randomSign = generateRandomMathSign();
  const expression = `${numberOne} ${randomSign} ${numberTwo}`;

  return expression;
};

const calcGameProcess = () => {
  const expression = getExpressionString();

  // eslint-disable-next-line no-eval
  const expressionResult = eval(expression);
  console.log('Question: ', expression);

  const userInput = readlineSync.question('Your answer: ');
  const userInputParsed = parseInt(userInput, 10);

  if (userInputParsed === expressionResult) {
    console.log('Correct!');
  } else {
    const userInputErr = Number.isNaN(userInputParsed) ? userInput : userInputParsed;
    const errObj = { userInput: userInputErr, correctAnswer: expressionResult };
    throw errObj;
  }
};

export const calcGame = () => {
  console.log(EXPLANATION_GAME_TEXT);

  calcGameProcess();
};
