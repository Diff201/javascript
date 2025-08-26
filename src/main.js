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
import { adultAge, FB, LeapYear, randomYear } from './if.js';
import { mup, namePerson } from './switches.js';
import { addProperty, compare, remove, user, user1, user2, user3, userInfo } from './objects.js';

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

console.log(namePerson('Patrick'));
console.log(namePerson('squidward'));
console.log(namePerson('patrick'));
console.log(namePerson('sponge bob'));
console.log(namePerson('mr.Crabs'));
console.log(namePerson('plankton'));
console.log(namePerson('plankiton'));

console.log(mup('Запекается'));
console.log(mup('Формируются чеки'));
console.log(mup('Курьер в пути'));
console.log(mup('Заказ доставлен'));
console.log(mup('Курьер подъезжает'));
console.log(mup('Назначаются повара'));
console.log(mup('Поиск курьера'));

console.log(user);
console.log(user);
console.log(user);
console.log(user);
console.log(user);
console.log(user);
console.log(user);
console.log(user);

console.log(userInfo);

remove(user1, 'id');
console.log(user1);
remove(user1, 'age');
console.log(user1);
remove(user1, 'name');
console.log(user1);

addProperty(user2, 'adress', 'Ул.Миклухо-Маклая, 55');
console.log(user2);
addProperty(user2, 'age', '24');
console.log(user2);
addProperty(user2, 'id', '-22');
console.log(user2);

compare(user3, { id: 24 }, 'id');
compare(user3, { id: 24, name: 'alex' }, 'name');
compare({}, {}, 'address');

user3.id = user3.name.length;
compare({ id: 2 + 2, name: 'mikhail' }, user3, 'id');

user3.address = Boolean(1);
compare({ id: 2 + 2, name: 'mikhail', address: 1 }, user3, 'address');
