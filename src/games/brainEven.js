import random from 'lodash/random.js';
import playBrainGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0; // () ?

const evenLogic = () => {
  const num = random(1, 100);
  const answer = isEven(num) ? 'yes' : 'no';
  return [num, answer];
};

const runBrainProgression = () => playBrainGame(gameDescription, evenLogic);

export default runBrainProgression;
