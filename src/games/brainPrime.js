import random from 'lodash/random.js';
import playBrainGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

const generateRound = () => {
  const num = random(1, 100);
  const answer = isPrime(num) ? 'yes' : 'no';
  return [num, answer];
};

const runBrainProgression = () => playBrainGame(gameDescription, generateRound);

export default runBrainProgression;
