import readlineSync from 'readline-sync';

const generateNumber = () => Math.ceil(Math.random() * 100);

const parityCheck = (number) => number % 2 === 0 ? 'yes' : 'no';

/* const winCount = () => {
  let count = 0;
  count += 1;
} */

const answerCheck = (answer, randomNubmer, winCount) => {
  const parityNum = parityCheck(randomNubmer);
  if (parityNum === answer) {
    // winCount += 1;
    // winCount();
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${parityNum}'.`);
  }
}


function brainEven(name) {
  // let count = winCount();
  // console.warn('!! winCount before ->', count());


  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generateNumber();

    console.log(`Question: ${randomNumber}`);

    const answer = readlineSync.question('Your answer: ');
    answerCheck(answer, randomNumber);
  }
  // console.warn('!! winCount after ->', count());
  // if (winCount === 3) {
  //   console.log(`Congratulations, test!`)
  // }


 
}

brainEven();

export default brainEven;
