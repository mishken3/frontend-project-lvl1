import random from 'lodash/random.js';
import playBrainGame from '../index.js';

const gameDescription =
  'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0; // () ?

const evenLogic = () => {
  const question = random(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const runBrainProgression = () => playBrainGame(gameDescription, evenLogic);

export default runBrainProgression;
