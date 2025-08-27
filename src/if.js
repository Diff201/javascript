// Функция совершеннолетний или нет

import chalk from 'chalk';
import { generateInteger } from './numbers.js';

export const isAdultAge = (age) => {
  if (age > 18) {
    console.log(chalk.green(true));
  } else {
    console.log(chalk.red(false));
  }
};

// Функция FizzBuzz

export const fB = (a) => {
  if (a % 3 === 0 && a % 5 === 0) {
    console.log('FizzBuzz');
  } else if (a % 5 === 0) {
    console.log('Buzz');
  } else if (a % 3 === 0) {
    console.log('Fizz');
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

export const isLeapYear = (year) => {
  const result = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  console.log(`Год ${year} високосный: ${result}`);
  return result;
};
