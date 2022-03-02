import random from 'lodash/random.js';
// import { gcd } from 'mathjs';
import playBrainGame, { roundsCount } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  let temp = 0;
  let first = num1;
  let second = num2;
  while (second > 0) {
    temp = first % second;
    first = second;
    second = temp;
  }
  return first;
};

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

  // const answer = String(gcd(firstNumber, secondNumber));
  const answer = String(getGCD(firstNumber, secondNumber));

  return [question, answer];
};

const brainGcd = () => {
  const rounds = [];
  for (let round = 0; round < roundsCount; round += 1) {
    rounds.push(gcdLogic());
  }
  console.log('ROUNDS ARR GCD IN GCD->', rounds);
  playBrainGame(gameDescription, rounds);
};

export default brainGcd;
