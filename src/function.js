// Функция генерация рандомного числа

export const generateInteger = (min, max) => {
  return Math.floor(Math.random() * (min, max) + min);
};

//1 Функция sayHi
import chalk from 'chalk';

export const name = 'Анатолий';
export const makeGreen = (text) => {
  return '\x1b[32m' + text + '\x1b[0m';
};
export const makeBlue = (text) => {
  return '\x1b[34m' + text + '\x1b[0m';
};

//const name = 'Ангелина';

export const sayHi = (text) => {
  const hi = makeGreen(`Привет,`);
  const name1 = makeBlue(`${name}!`);
  console.log(hi, name1);
};
sayHi();

//2 Функция sayText

export const text = 'Sweet Dreams';
export const makeWhite = (text) => {
  return '\x1b[1m' + text + '\x1b[0m';
};
export const bgBlack = (text) => {
  return '\x1b[40m' + text + '\x1b[0m';
};
export const sayText = (text) => {
  const styledText = bgBlack(makeWhite(text));
  console.log(styledText);
};
sayText(text);

//3 Функция square

export const square = (number) => {
  return number ** 2;
};

//4 Функция sum

export const sum = (a, b) => {
  return a + b;
};

//5 Функция power

export const power = (a, b) => {
  return a ** b;
};

//
