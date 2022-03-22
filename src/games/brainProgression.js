import random from 'lodash/random.js';
import playBrainGame, { roundsCount } from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const progressionLogic = () => {
  const numberStart = random(1, 10);
  const numberGrow = random(1, 5);
  const progressionLength = random(5, 10);

  const numberArray = [];
  for (
    let i = numberStart;
    i <= progressionLength * numberGrow + numberStart;
    i += numberGrow
  ) {
    numberArray.push(i);
  }

  const replacedIndex = random(0, numberArray.length - 1);
  const answer = numberArray[replacedIndex];
  numberArray[replacedIndex] = '..';

  return [numberArray.join(' '), String(answer)];
};

const playBrainProgression = () => {
  const rounds = [];
  for (let round = 0; round < roundsCount; round += 1) {
    rounds.push(progressionLogic());
  }
  playBrainGame(gameDescription, rounds);
};

export default playBrainProgression;
