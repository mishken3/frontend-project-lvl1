import random from 'lodash/random.js';
import playBrainGame, { roundsCount } from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const numberHide = (array) => {
  const replaceText = '..';
  const startNumber = random(0, array.length - 1);

  const replacedArray = [...array];
  replacedArray.splice(startNumber, 1, replaceText);
  return replacedArray;
};

const gcdLogic = () => {
  const numberStart = random(1, 10);
  const numberGrow = random(1, 5);
  const progressionLength = random(5, 10);

  // const numberArray = new Array(progressionLength); to test
  const numberArray = [];
  for (
    let i = numberStart;
    i <= progressionLength * numberGrow + numberStart;
    i += numberGrow
  ) {
    numberArray.push(i);
  }

  const question = numberHide(numberArray);
  const answer = String(numberGrow);

  return [question, answer];
};

const brainProgression = () => {
  const rounds = [];
  for (let round = 0; round < roundsCount; round += 1) {
    rounds.push(gcdLogic());
  }
  playBrainGame(gameDescription, rounds);
};

export default brainProgression;
