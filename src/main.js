import { power, sayHi, sayText, square, sum, text } from './function.js';
import {
  areaCircle,
  calculateChange,
  calculateDesk,
  calculatePrice,
  generateInteger,
  isEven,
  squareS,
  weatherReport,
} from './numbers.js';
import { compare } from './compares.js';
import { adultAge, FB, LeapYear, randomYear } from './if.js';

sayHi;

sayText;

console.log(square(2));

console.log(sum(23, 45));

console.log(power(2, 7));

console.log(generateInteger(10200, 10202));

console.log(areaCircle(generateInteger(12, 24)));

console.log(squareS(generateInteger(13, 1098)));

console.log(isEven(157));

calculateChange(13567);

calculatePrice(2.1, 4.3);
calculatePrice(3.4, 6.4);
calculatePrice(6.2, 3.2);

const classes = 13;
const pupils = 7;

const total = calculateDesk(classes, pupils);
console.log(`Для ${classes} классов по ${pupils} учеников в каждом, необходимо купить ${total}`);

weatherReport();
weatherReport();
weatherReport();
weatherReport();
weatherReport();
weatherReport();

console.log(compare(1, 1));
console.log(compare(12, 333));
console.log(compare(1, '1'));
console.log(compare('ffff', 1));

adultAge(generateInteger(15, 22));

FB(generateInteger(9, 20));

LeapYear();
