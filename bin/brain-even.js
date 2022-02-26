import readlineSync from 'readline-sync';

const generateNumber = () => Math.ceil(Math.random() * 100);

function brainEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const randomNumber = generateNumber();
  // console.log('randomNumber ->', randomNumber);
  const inputNumber = readlineSync.question('');
}

// brainEven();

// export default brainEven;
