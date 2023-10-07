import { greetings } from './cli.js';
import { MAX_GAMES_COUNTER } from './utils.js';

export const app = (game) => {
  const userName = greetings();

  let gameCounter = 1;

  try {
    while (gameCounter <= MAX_GAMES_COUNTER) {
      game(userName);
      gameCounter += 1;
    }

    console.log(`Congratulations, ${userName}`);
  } catch (error) {
    const errorText = `'${error.userInput}' is wrong answer ;(. Correct answer was '${error.correctAnswer}'.`;
    console.log(errorText);
    console.log(`Let's try again, ${userName}`);
  }
};
