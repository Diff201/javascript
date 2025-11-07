/*Задание 1: Подсчет четных и нечетных чисел
Условие: Напишите функцию, которая получает на вход массив и возвращает объект с указанием количества четных и нечетных чисел. Число 0 считайте четным.

    Задача:

Создайте пустой массив.

    Циклом добавьте в него 7 случайных чисел от -5 до +10.

Передайте этот массив в вашу функцию.

    Выведите результат.

    Пример вывода:
{ even: 4, odd: 3 }
*/

import { generateInteger } from './numbers.js';
import chalk from 'chalk';

let arrayNum = [];
for (let i = 0; i < 7; i++) {
  arrayNum.push(generateInteger(-5, 10));
}

const countEvenOdd = (arr) => {
  let countEvenNum = 0;
  let countOddNum = 0;

  for (let i = 0; i < arrayNum.length; i++) {
    const a = arrayNum[i];

    if (a % 2 === 0) {
      countEvenNum++;
    } else {
      countOddNum++;
    }
  }
  console.log(`Четные:${countEvenNum}, Нечетные:${countOddNum}`);
};

countEvenOdd(arrayNum);

/* Задание 2: Сумма и Произведение
Условие: Напишите функцию, которая получает на вход массив чисел и возвращает объект с указанием суммы всех элементов и произведения всех элементов.

    Задача:

Создайте пустой массив.

    Циклом добавьте в него 4 случайных целых числа от 1 до 5.

Передайте этот массив в вашу функцию.

    Выведите результат.

    Пример вывода:
{ sum: 15, product: 120 } (для массива [5, 4, 3, 3])
 */

let arraySumMult = [];
for (let i = 0; i < 4; i++) {
  arraySumMult.push(generateInteger(1, 5));
}

const countSumMult = (array) => {
  let sum = 0;
  let mult = 1;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    mult *= array[i];
  }
  return { sum: sum, mult: mult };
};
console.log(countSumMult(arraySumMult));

//console.log(`Сумма: ${sum}, Произведение: ${mult}`);

/*
Задание 3: Поиск простого числа
Условие: Напишите функцию, которая ничего не принимает на вход. В теле функция генерирует случайное число от 10 до 50. Затем, используя цикл, функция проверяет, является ли это число простым (делится без остатка только на 1 и на само себя). Функция должна возвращать объект с самим числом и результатом проверки.

Задача: Вызовите функцию и выведите результат.

Пример вывода:
{ number: 17, isPrime: true }
{ number: 25, isPrime: false }
 */

const searchNum = () => {
  let randomNum = generateInteger(10, 50);
  let isPrime = randomNum > 1;

  for (let i = 2; i <= randomNum / 2; i++) {
    if (randomNum % i === 0) {
      isPrime = false;
      break;
    }
  }
  return { number: randomNum, isPrime: isPrime };
};
console.log(searchNum());

/*
Задание 4: Самое длинное слово
Условие: Создайте строковую переменную с любым предложением.
Напишите функцию, которая принимает на вход строку, разбивает ее на слова (разделитель — пробел) и, используя цикл, находит самое длинное слово в предложении. Функция должна возвращать это слово.

Пример:

const text = 'JavaScript это интересный язык программирования';
console.log(findLongestWord(text)); // 'программирования'

 */

const text = `JavaScript - это интересный язык программирования`;

const findLongestWord = (str) => {
  const words = str.split(' ');
  let longestWord = '';

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};
console.log(findLongestWord(text));

/*
Задание 5: Фильтрация по зарплате
Условие: Напишите функцию, которая получает на вход массив объектов с сотрудниками и возвращает массив имен сотрудников, у которых зарплата находится в диапазоне от 50 000 до 80 000 (включительно).

javascript
const employees = [
  { id: 1, name: 'Алексей', salary: 45000 },
  { id: 2, name: 'Татьяна', salary: 75000 },
  { id: 3, name: 'Виктор', salary: 60000 },
  { id: 4, name: 'Елена', salary: 90000 },
  { id: 5, name: 'Петр', salary: 50000 },
];
Задача: Вызовите функцию и выведите результат.

Ожидаемый вывод для примера выше:
[ 'Татьяна', 'Виктор', 'Петр' ]
 */
const employees = [
  { id: 1, name: 'Алексей', salary: 45000 },
  { id: 2, name: 'Татьяна', salary: 75000 },
  { id: 3, name: 'Виктор', salary: 60000 },
  { id: 4, name: 'Елена', salary: 90000 },
  { id: 5, name: 'Петр', salary: 50000 },
];

const filterSalary = (array) => {
  const nameFilter = [];

  for (const employee of array) {
    if (employee.salary >= 50000 && employee.salary <= 80000) {
      nameFilter.push(employee.name);
    }
  }
  return nameFilter;
};

console.log(filterSalary(employees));

/* Задание 6: Обновление оценок
Условие: Дан массив учеников с их оценками. Необходимо увеличить каждую оценку на 1 балл, но так, чтобы оценка не превышала 10. То есть если у ученика оценка 10, она должна остаться 10.

Задача: Напишите функцию, которая мутирует исходный массив, производя это обновление. Не создавайте новый массив.

javascript
let students = [
  { name: 'Иван', grade: 7 },
  { name: 'София', grade: 10 },
  { name: 'Артем', grade: 5 },
  { name: 'Алина', grade: 9 },
];
Ожидаемый результат массива students после вызова функции:

javascript
[
  { name: 'Иван', grade: 8 },
  { name: 'София', grade: 10 },
  { name: 'Артем', grade: 6 },
  { name: 'Алина', grade: 10 }
]
*/
let students = [
  { name: 'Иван', grade: 7 },
  { name: 'София', grade: 10 },
  { name: 'Артем', grade: 5 },
  { name: 'Алина', grade: 9 },
];

const upGrade = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].grade < 10) {
      array[i].grade += 1;
    }
  }
};
upGrade(students);
console.log(students);

/*
Задание 7: Пирамида
Условие: Напишите функцию, которая принимает на вход высоту h и выводит в консоль числовую пирамиду заданной высоты, используя вложенные циклы.

Пример для высоты 4:

text
   1
  222
 33333
4444444
Подсказка: Вам нужно управлять количеством пробелов и количеством повторений цифры в каждой строке.


 */

const pyramid = (height) => {
  for (let i = 1; i <= height; i++) {
    let line = '';
    for (let j = 0; j < height - i; j++) {
      line += ' ';
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      line += i;
    }
    console.log(line);
  }
};
pyramid(7);

/*
Задание 8: FizzBuzz с цветами
Условие: Напишите функцию, которая получает на вход число n. Функция должна выводить в консоль числа от 1 до n, но с следующими условиями:

Если число делится на 3 без остатка, выведите его синим цветом (используйте console.log('%c...', 'color: blue;')).

Если число делится на 5 без остатка, выведите его зеленым цветом.

Если число делится и на 3, и на 5, выведите его красным цветом и жирным шрифтом.

Все остальные числа выводятся обычным цветом.

Задача: Вызовите функцию, передав туда случайное число от 15 до 30.
 */

const colourFizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(chalk.bold.red(`FizzBuzz:${i}`));
    } else if (i % 5 === 0) {
      console.log(chalk.green(`Buzz:${i}`));
    } else if (n % 3 === 0) {
      console.log(chalk.blue(`Fizz:${i}`));
    } else {
      console.log(i);
    }
  }
};

colourFizzBuzz(generateInteger(15, 30));

/**
 * Напиши функцию, которая анализирует текст и возвращает статистику:
 * - Количество слов
 * - Самое длинное слово
 * - Самое короткое слово
 * - Средняя длина слова
 * - Количество уникальных слов
 */
//const text = `JavaScript это мощный язык программирования который это интересно`;

//const analyzeText = (text) => {

//}

//console.log(analyzeText(text));
// Ожидаемый результат:
// {
//   totalWords: 8,
//   longestWord: 'программирования',
//   shortestWord: 'это',
//   averageLength: 6.25,
//   uniqueWords: 7
// }
