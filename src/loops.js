import { generateInteger } from './numbers.js';
import chalk from 'chalk';
// Функция подсчет
const counting = (array) => {
  let positive = 0;
  let negative = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      positive++;
    } else {
      negative++;
    }
  }
  return {
    positive,
    negative,
  };
};

let randomArray = [];
for (let i = 0; i < 5; i++) {
  let randomNumber = generateInteger(-3, 3);
  randomArray.push(randomNumber);
}
let result = counting(randomArray);
console.log('Массив:', randomArray);
console.log('Результат:', result);
console.log('Положительные числа:', result.positive);
console.log('Отрицательные числа:', result.negative);

// Функция Мин, макс, среднее

const minMaxAverage = (arr) => {
  if (arr.length === 0) {
    return { min: undefined, max: undefined, avg: undefined };
  }
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
    sum += num;
  }
  const avg = sum / arr.length;

  return { min, max, avg };
};
const rArr = [];
for (let i = 0; i < 8; i++) {
  let rNum = generateInteger(2, 15);
  rArr.push(rNum);
}
const res = minMaxAverage(rArr);
console.log('Массив:', rArr);
console.log('Результат:', res);
console.log('Min:', res.min);
console.log('Max:', res.max);
console.log('Avg:', res.avg);

// Функция бросок кубиков

export const cubes = () => {
  let a = generateInteger(1, 6);
  let b = generateInteger(1, 6);

  let count = 0;

  while (a !== b) {
    count++;
    a = generateInteger(1, 6);
    b = generateInteger(1, 6);
  }
  return { double: a, count: count };
};

//Функция задом наперёд

const myText = 'Розовая пони смотрит на картину';

const revers = (str) => {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};
console.log(revers(myText));

//Функция подходящие люди

const people = [
  { id: 8, name: 'Александр', gender: 'm', age: 25 },
  { id: 12, name: 'Мария', gender: 'f', age: 22 },
  { id: 31, name: 'Иван', gender: 'm', age: 17 },
  { id: 34, name: 'Ольга', gender: 'f', age: 19 },
  { id: 53, name: 'Дмитрий', gender: 'm', age: 30 },
  { id: 95, name: 'Екатерина', gender: 'f', age: 21 },
  { id: 3, name: 'Сергей', gender: 'm', age: 18 },
  { id: 20, name: 'Анна', gender: 'f', age: 20 },
  { id: 19, name: 'Андрей', gender: 'm', age: 15 },
  { id: 30, name: 'Наталья', gender: 'f', age: 25 },
];

const filter = (peopleArray) => {
  let man = [];
  let women = [];
  for (let people of peopleArray) {
    if (people.gender === 'm' && people.age > 18) {
      man.push(people.name);
    } else if (people.gender === 'f' && people.age > 20) {
      women.push(people.name);
    }
  }
  return { man, women };
};
console.log(filter(people));

//Функция округлить значения

const data = [1.1, 2.2, -2, 3.3, -1, 5.5, 5.99, 7.49, 7.9999, -2.2, -3];

let skippedCount = 0;
for (let i = data.length - 1; i >= 0; i--) {
  if (data[i] > 0) {
    if (skippedCount < 3) {
      skippedCount++;
    } else {
      data[i] = Math.round(data[i]);
    }
  }
}
console.log(data);

//Функция ёлочка
const height = 5;
const theChristmasTree = (height) => {
  for (let i = 1; i <= height; i++) {
    let line = '';
    for (let j = 0; j < height - i; j++) {
      line += ' ';
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      line += '*';
    }
    console.log(chalk.green(line));
  }
  let trunk = '';
  for (let i = 0; i < height - 1; i++) {
    trunk += ' ';
  }
  trunk += '|';
  console.log(chalk.redBright(trunk));
};
theChristmasTree(height);

//Функция цветной вывод чисел
const printColour = (number) => {
  for (let i = 0; i < number; i++) {
    const a = i % 3;

    if (a === 2) {
      console.log(chalk.red(i));
    } else if (a === 1) {
      console.log(chalk.blue(i));
    } else {
      console.log(chalk.magenta(i));
    }
  }
};
printColour(generateInteger(5, 25));

//Функция цветной вывод ключей-значений

const printColourKey = (obj) => {
  for (const key in obj) {
    console.log(`${chalk.green(key)}:${chalk.red(obj[key])}`);
  }
};
printColourKey({ id: 8, name: 'Александр', gender: 'm', age: 25 });

//Функция вывод матрицы

const matrix = [
  ['#', 'Имя', 'Возраст', 'Особые приметы'],
  [90, 'Паша', 23],
  [12, 'Артём', 29],
  [33, 'Стас', 13, 'Сидит на хлебной диете'],
  [54, 'Хабиб', 7],
  [35, 'Алеша', 15, 'Любит ночевать на лавочке'],
  [50, 'Лена', 19, 'Громко чихает'],
  [83, 'Катя', 43],
  [56, 'Алексей', 27, 'Мяукает во сне'],
];

const outputMatrix = (matrix) => {
  for (const matrixElement of matrix) {
    console.log(matrixElement.join(`\t`));
  }
};

outputMatrix(matrix);

// Функция возраст
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'Diana', age: 35 },
  { name: 'Eve', age: 30 },
  { name: 'Frank', age: 28 },
  { name: 'Grace', age: 25 },
  { name: 'Hannah', age: 41 },
  { name: 'Ivy', age: 30 },
  { name: 'Jack', age: 28 },
];
const filterPeople = (users) => {
  const counter = {};

  for (const user of users) {
    if (counter[user.age] === undefined) {
      counter[user.age] = 0;
    }
    counter[user.age]++;
  }
  return counter;
};
const resultAge = filterPeople(users);
console.log(resultAge);

//Функция самый длинный массив

const user222 = {
  example: [1, 2, 3],
  'X-Address': {
    street: 'Ленина',
    house: '10-Б',
  },
  data: { length: 50 },
  nickname: null,
  permissions: [true, false],
  age: 101,
  emails: ['alice@example.com', 'bob@example.com', 'charlie@example.com', 'peter@example.com'],
  name: 'Peter Charles',
  isAdult: true,
  now: new Date().toISOString(),
};

const theLongestArr = (user) => {
  let maxLength = null;
  let lastElement = null;

  for (const key in user) {
    const value = user[key];

    if (!Array.isArray(value)) {
      continue;
    }

    if (maxLength === null || value.length > maxLength) {
      maxLength = value.length;
      lastElement = value[value.length - 1];
    }
  }
  return { maxLen: maxLength, lastValue: lastElement };
};
console.log(theLongestArr(user222));

const compareArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

console.log(compareArrays([], []));
console.log(compareArrays([true, null, 1, 'stop'], [true, null, 1, 'stop']));
console.log(compareArrays([1, 2, 3], [2, 1, 3]));
console.log(compareArrays([null], []));

const compareObjects = (obj1, obj2) => {
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  for (const key in obj2) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

console.log(compareObjects({}, {}));
console.log(compareObjects({ age: 45 }, { age: 45 }));
console.log(compareObjects({ ready: true, photo: null }, { ready: true, photo: null }));
console.log(compareObjects({ a: 10, b: 20, c: 30 }, { c: 30, a: 10, b: 20 }));
console.log(compareObjects({ name: 'max' }, { name: 'john' }));
console.log(compareObjects({ nick: 'maxon' }, {}));
console.log(compareObjects({ age: 45, name: 'a' }, { age: 45, name: 'b' }));

const compareObjectArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!compareObjects(arr1[i], arr2[i])) {
      return false;
    }
  }

  return true;
};

const arr1 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
];

const arr2 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
];

const arr3 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 },
];

console.log(compareObjectArrays(arr1, arr2));
console.log(compareObjectArrays(arr1, arr3));
