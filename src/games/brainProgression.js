import random from 'lodash/random.js';
import playBrainGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const generateRound = () => {
  const numberStart = random(1, 10);
  const numberGrow = random(1, 5);
  const progressionLength = random(5, 10);

  const progression = [];
  for (
    let i = numberStart;
    i <= progressionLength * numberGrow + numberStart;
    i += numberGrow
  ) {
    progression.push(i);
  }

  const replacedIndex = random(0, progression.length - 1);
  const answer = progression[replacedIndex];
  progression[replacedIndex] = '..';

  return [progression.join(' '), String(answer)];
};

const runBrainProgression = () => playBrainGame(gameDescription, generateRound);

export default runBrainProgression;
