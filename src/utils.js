export const generateRandomNumber = (maxNumber = 100) => Math.floor(Math.random() * maxNumber);
export const MAX_GAMES_COUNTER = 3;

export const checkAnswer = (userInput, correctAnswer) => {
  if (userInput === String(correctAnswer)) {
    console.log('Correct!');
  } else {
    const errObj = { userInput, correctAnswer };
    throw errObj;
  }
};
