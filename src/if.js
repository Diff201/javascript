// Функция совершеннолетний или нет

import chalk from 'chalk';
import { generateInteger } from './numbers.js';

export const adultAge = (age) => {
  if (age > 18) {
    console.log(chalk.green(true));
  } else {
    console.log(chalk.red(false));
  }
};

// Функция FizzBuzz

export const FB = (a) => {
  if (Math.floor(a % 3 === 0)) {
    console.log('Fizz');
  } else if (Math.floor(a % 5 === 0)) {
    console.log('Buzz');
  } else if (Math.floor(a % 3 === 0 && a % 5 === 0)) {
    console.log('FizzBuzz');
  } else {
    console.log('Зашибумба');
  }
};

// Функция Високосный год
// 1980 + (0 ... 140)
// 198 + 10 * (0 ... 14)

export const randomYear = () => {
  return 10 * Math.round(198 + Math.random() * 14);
};

export const LeapYear = () => {
  const rYear = randomYear();
  if ((rYear % 4 === 0 && rYear % 100 !== 0) || rYear % 400 === 0) {
    console.log(`Год ${rYear} високосный: true`);
    return true;
  } else {
    console.log(`Год ${rYear} високосный: false`);
    return false;
  }
};
