import readlineSync from 'readline-sync';
import { generateRandomNumber, checkAnswer } from '../utils.js';

const EXPLANATION_GAME_TEXT = 'What number is missing in the progression?';

const generateProgressionStep = () => {
  const number = generateRandomNumber(4);
  if (number === 0) return generateProgressionStep();

  return number;
};

const generateProgression = () => {
  const progression = [];
  const PROGRESSION_STEP = generateProgressionStep();
  const PROGRESSION_LENGTH = 7;

  const firstNumber = generateRandomNumber();
  progression.push(firstNumber);

  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    const lastProgressionItem = progression.at(-1);
    progression.push(lastProgressionItem + PROGRESSION_STEP);
  }

  return progression;
};

const progressionGameProcess = () => {
  const progression = generateProgression();
  const hiddenItemIndex = generateRandomNumber(progression.length);
  const hiddenItem = progression.splice(hiddenItemIndex, 1, '...').at(0);

  const hiddenProgression = [...progression];
  hiddenProgression[hiddenItemIndex] = '..';

  console.log(`Question: ${hiddenProgression.join(' ')}`);
  const userInput = readlineSync.question('Your answer: ');

  checkAnswer(userInput, hiddenItem);
};

const progressionGame = () => {
  console.log(EXPLANATION_GAME_TEXT);

  progressionGameProcess();
};

export default progressionGame;
