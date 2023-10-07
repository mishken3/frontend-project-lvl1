import readlineSync from 'readline-sync';
import { generateRandomNumber } from '../utils.js';

const EXPLANATION_GAME_TEXT = 'What number is missing in the progression?';

const generateProgressionStep = () => {
  const number = generateRandomNumber(4);
  if (number === 1) return generateProgressionStep();

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
  hiddenProgression[hiddenItemIndex] = '...';

  console.log(`Question: ${hiddenProgression.join(', ')}`);
  const userInput = readlineSync.question('Your answer: ');
  const userInputParsed = parseInt(userInput, 10);

  if (userInputParsed === hiddenItem) {
    console.log('Correct!');
  } else {
    const userInputErr = Number.isNaN(userInputParsed) ? userInput : userInputParsed;
    const errObj = { userInput: userInputErr, correctAnswer: hiddenItem };
    throw errObj;
  }
};

export const progressionGame = () => {
  console.log(EXPLANATION_GAME_TEXT);

  progressionGameProcess();
};
