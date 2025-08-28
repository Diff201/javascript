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
import { isAdultAge, fB, isLeapYear, randomYear } from './if.js';
import { mup, namePerson } from './switches.js';
import { addProperty, calculateAge, compare, remove, user, user1, user2, user3, userInfo } from './objects.js';
import { arrayJoin, arrayJoin1, max, setNickname, user6 } from './array.js';

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

//console.log(compare(1, 1));
//console.log(compare(12, 333));
//console.log(compare(1, '1'));
//console.log(compare('ffff', 1));

isAdultAge(generateInteger(15, 22));

fB(generateInteger(9, 20));

isLeapYear();

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

const alex = {
  name: 'Alex',
  dateOfBirth: new Date('2024-05-15'),
};

const jake = {
  name: 'Jake',
  dateOfBirth: new Date('1970-01-01T00:00:00.000Z'),
};

const john = {
  name: 'John',
  dateOfBirth: new Date('2007-12-30T11:32:59.953+03:00'),
};

const bob = {
  name: 'Bob',
  dateOfBirth: new Date(),
};

calculateAge(alex);
calculateAge(bob);
calculateAge(jake);
calculateAge(john);

console.log(arrayJoin.join('_'));
console.log(arrayJoin1.join('-'));

setNickname(user6, 'Александр Сильвестрович');
console.log(user6);

setNickname(max, 'Franz');
console.log(max);
