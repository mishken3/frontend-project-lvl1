import readlineSync from 'readline-sync';

export const greetings = () => {
  const name = readlineSync.question('May I have your name? ');

  if (name) {
    console.log(`Hello, ${name}!`);

    return name;
  }

  return null;
};
