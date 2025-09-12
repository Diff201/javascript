import { generateInteger } from './numbers.js';
// Функция подсчет
const counting = (array) => {
  let posCount = 0;
  let negCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      posCount++;
    } else {
      negCount++;
    }
  }
  return {
    positive: posCount,
    negative: negCount,
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

  return {
    min: min,
    max: max,
    avg: avg,
  };
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

const cubes = () => {
  let a, b;
  let count = 0;

  while (a !== b) {
    count++;
    let a = generateInteger(1, 6);
    let b = generateInteger(1, 6);
  }
  return {
    double: a,
    count: count,
  };
};
