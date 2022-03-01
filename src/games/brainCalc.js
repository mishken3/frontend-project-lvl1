import random from 'lodash/random.js';
import playBrainGame, { roundsCount } from '../index.js';

const gameDescription = 'What is the result of the expression?';

const genNumbers = () => {
  const operands = ['+', '-', '*'];
  const operand = operands[Math.floor(Math.random() * operands.length)];
  const number1 = random(1, 100);
  const number2 = random(1, 100);

  const mathOperations = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
  };

  const question = `${number1} ${operand} ${number2}`;
  const answer = String(mathOperations[operand](number1, number2));

  return [question, answer];
};

const brainCalc = () => {
  const rounds = [];
  for (let round = 0; round < roundsCount; round += 1) {
    rounds.push(genNumbers());
  }
  playBrainGame(gameDescription, rounds);
};

export default brainCalc;
