import random from 'lodash/random.js';
import playBrainGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const mathOperations = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
};
const operands = '+-*';

const generateRound = () => {
  const operand = operands[Math.floor(Math.random() * operands.length)];
  const number1 = random(1, 100);
  const number2 = random(1, 100);

  const question = `${number1} ${operand} ${number2}`;
  const answer = String(mathOperations[operand](number1, number2));

  return [question, answer];
};

const runBrainProgression = () => playBrainGame(gameDescription, generateRound);

export default runBrainProgression;
