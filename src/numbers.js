// Функция генерация рандомного числа

import chalk from 'chalk';

export const generateInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
// Функция Площадь квадрата

export const squareS = (a) => {
  return a ** 2;
};
const result = squareS(generateInteger(6, 87));

// Функция Площадь круга
export const areaCircle = (a) => {
  return (Math.PI * a ** 2).toFixed(2);
};
const radius = generateInteger(137, 1082);
const area = areaCircle(radius);

// Функция четное число

export const isEven = (a) => {
  return a % 2 === 0;
};

// Задание Кассовый аппарат

export const calculateChange = (amount) => {
  let remainAmount = amount;

  const banknotes5000 = Math.floor(remainAmount / 5000);
  remainAmount %= 5000;

  const banknotes2000 = Math.floor(remainAmount / 2000);
  remainAmount %= 2000;

  const banknotes1000 = Math.floor(remainAmount / 1000);
  remainAmount %= 1000;

  const banknotes500 = Math.floor(remainAmount / 500);
  remainAmount %= 500;

  const banknotes200 = Math.floor(remainAmount / 200);
  remainAmount %= 200;

  const banknotes100 = Math.floor(remainAmount / 100);
  remainAmount %= 100;

  const banknotes50 = Math.floor(remainAmount / 50);
  remainAmount %= 50;

  const banknotes10 = Math.floor(remainAmount / 10);
  remainAmount %= 10;

  console.log(`${chalk.green(`Купюр 5000 необходимо:`)} ${chalk.blue(banknotes5000)},
  ${chalk.green(`Купюр 2000 необходимо:`)} ${chalk.blue(banknotes2000)},
  ${chalk.green(`Купюр 1000 необходимо:`)} ${chalk.blue(banknotes1000)},
  ${chalk.green(`Купюр 500 необходимо:`)} ${chalk.blue(banknotes500)},
  ${chalk.green(`Купюр 200 необходимо:`)} ${chalk.blue(banknotes200)},
  ${chalk.green(`Купюр 100 необходимо:`)} ${chalk.blue(banknotes100)},
  ${chalk.green(`Купюр 50 необходимо:`)} ${chalk.blue(banknotes50)},
  ${chalk.green(`Купюр 10 необходимо:`)} ${chalk.blue(banknotes10)},
  ${chalk.green(`Рублей необходимо:`)} ${chalk.blue(remainAmount)}
  `);
};
//calculateChange(12000);

// Задание грузоперевозки

let check = 0;

export const calculatePrice = (width, lenght) => {
  const meters = Math.ceil(width * lenght);
  const total = meters * 350;
  console.log(`
  Чек #${++check}
  ---------
  Ширина:${width} м
  Длина: ${lenght} м
  Площадь: ${width * lenght.toFixed(3)} м^2
  ---------
  Нужно оплатить: ${meters} м^2
  Цена 1 м^2: 350 руб
  Сумма за ${meters} м^2: ${total} руб
  ---------
  Дата: ${new Date().toISOString()}
  `);
};
//calculatePrice(4.5, 6.67);

// Функция количество парт

//const calculateDesk = (classes, pupils) => {
// const totalPupils = classes * pupils;
//const desk = Math.ceil(totalPupils / 2);
//return desk;
//};
//console.log(calculateDesk(13, 7));

export const calculateDesk = (classes, pupilsPerClass) => {
  const desksPerClass = Math.ceil(pupilsPerClass / 2);
  return desksPerClass * classes;
};

const classes = 13;
const pupils = 7;

const total = calculateDesk(classes, pupils);
//console.log(`Для ${classes} классов по ${pupils} учеников в каждом, необходимо купить ${total}`);

// Функция прогноз погоды

//200 + (0 ... 600)
//20 + 10 * (0 ... 60)
export const weatherReport = () => {
  const a = 10 * Math.round(19.9 + Math.random() * 60.2);
  const b = Math.random();
  const res = (a + b).toFixed(6);
  console.log(`${chalk.green('Прогноз погоды на TerraRandomis: Температура завтра')} ${chalk.blue(res + '°C')}`);
};
//weatherReport();
