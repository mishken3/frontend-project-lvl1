import readlineSync from 'readline-sync';
import { generateRandomNumber } from '../utils.js';

const EXPLANATION_GAME_TEXT = 'What is the result of the expression?';

const mathSigns = ['+', '-', '*'];
const mapBySign = {
  '+': (numberOne, numberTwo) => numberOne + numberTwo,
  '-': (numberOne, numberTwo) => numberOne - numberTwo,
  '*': (numberOne, numberTwo) => numberOne * numberTwo,
};

/**
 * Иной способ создания функции вычисления путём подставления знака между операндами.
 * Жаль, что практически тоже самое, что и eval()

  const mapBySign = mathSigns.reduce((acc, sign) =>
  ({ ...acc, [sign]: new Function('a', 'b', `return a ${sign} b;`) }), {});
*/

const getRandomMathSign = (mathSignsArr) => {
  const index = Math.floor(Math.random() * mathSignsArr.length);

  return mathSignsArr[index];
};

const getRandomExpression = () => {
  const numberOne = generateRandomNumber();
  const numberTwo = generateRandomNumber();
  const randomSign = getRandomMathSign(mathSigns);

  const expressionResult = mapBySign[randomSign](numberOne, numberTwo, randomSign);
  const expressionString = `${numberOne} ${randomSign} ${numberTwo}`;

  return { expressionString, expressionResult };
};

const calcGameProcess = () => {
  const { expressionString, expressionResult } = getRandomExpression();
  console.log(`Question: ${expressionString}`);

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
