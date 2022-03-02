import random from 'lodash/random.js';
import { gcd } from 'mathjs';
import playBrainGame, { roundsCount } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcdLogic = () => {
  /*   
  const number1 = random(1, 100);
  const number2 = random(1, 100);
*/
  const firstNumber = random(1, 100);
  const secondNumber = random(1, 100);

  const question = `${firstNumber} ${secondNumber}`;

  // console.log('question!?! ->', question);
  // console.log('typeof question!?! ->', typeof question);

  const answer = String(gcd(firstNumber, secondNumber));

  return [question, answer];
};

const brainGcd = () => {
  const rounds = [];
  for (let round = 0; round < roundsCount; round += 1) {
    rounds.push(gcdLogic());
  }
  playBrainGame(gameDescription, rounds);
};

export default brainGcd;
