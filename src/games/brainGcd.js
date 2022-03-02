import random from 'lodash/random.js';
import playBrainGame, { roundsCount } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));

const gcdLogic = () => {
  const firstNumber = random(1, 100);
  const secondNumber = random(1, 100);

  const question = `${firstNumber} ${secondNumber}`;

  const answer = String(getGCD(firstNumber, secondNumber));

  return [question, answer];
};

const brainGcd = () => {
  const rounds = [];
  for (let round = 0; round < roundsCount; round += 1) {
    rounds.push(gcdLogic());
  }
  console.log('ROUNDS ARR GCD IN GCD->', rounds);
  playBrainGame(gameDescription, rounds);
};

export default brainGcd;
