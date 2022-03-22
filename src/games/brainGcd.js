import random from 'lodash/random.js';
import playBrainGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));

const gcdLogic = () => {
  const num1 = random(1, 100);
  const num2 = random(1, 100);

  const question = `${num1} ${num2}`;

  const answer = String(getGCD(num1, num2));

  return [question, answer];
};

const runBrainProgression = () => playBrainGame(gameDescription, gcdLogic);

export default runBrainProgression;
