import readlineSync from 'readline-sync';

export const roundsCount = 3;
// const generateRounds = (gameLogic, roundsCount = 3) => {
//   const rounds = [];
//   for (let round = 0; round < roundsCount; round += 1) {
//     rounds.push(gameLogic());
//   }
//   return rounds;
// };

const playBrainGame = (description, runGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${description}`);

  for (let currentRound = 0; currentRound < roundsCount; currentRound += 1) {
    const [question, answer] = runGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playBrainGame;
