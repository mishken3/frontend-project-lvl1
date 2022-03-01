#!/usr/bin/env node

import random from "lodash/random.js";
import playBrainGame, { roundsCount } from "../src/index.js";

const gameDescription =
  'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0; // () ?

const genTask = () => {
  const question = random(1, 100);
  const answer = isEven(question) ? "yes" : "no";
  return [question, answer];
};

export default () => {
  const rounds = [];
  for (let round = 0; round < roundsCount; round += 1) {
    rounds.push(genTask());
  }
  playBrainGame(gameDescription, rounds, roundsCount);
};
