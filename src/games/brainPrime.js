import random from 'lodash/random.js';
import playBrainGame, { roundsCount } from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

const genPrime = () => {
  const question = random(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const brainPrime = () => {
  const rounds = [];
  for (let round = 0; round < roundsCount; round += 1) {
    rounds.push(genPrime());
  }
  playBrainGame(gameDescription, rounds);
};

export default brainPrime;
