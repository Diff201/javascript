import { generateInteger } from './numbers.js';
import chalk from 'chalk';

// Задание ресторан
const user = {
  name: 'Лёля',
  age: 20,
  favoriteFood: 'Пицца',
};

const order = {
  orderId: generateInteger(1000, 9999),
  items: user.favoriteFood,
  quantity: generateInteger(1, 5),
  pricePerItem: generateInteger(250, 800),
  weightPerFood: generateInteger(200, 600),
  weight: generateInteger(300, 2500),
};
//const allWeight = order.weight * order.quantity
const calculateDeliveryCost = (order) => {
  const basePrice = 500;

  if (order.weight > 2000) {
    const extraWeight = order.weight - 2000;
    const extraCost = Math.ceil(extraWeight / 100) * 7;
    return basePrice + extraCost;
  } else if (order.weight > 1000) {
    return basePrice + 200;
  } else {
    return basePrice;
  }
};
const DeliveryCostTotal = (order) => {
  const priceAllItems = order.quantity * order.pricePerItem;
  const deliveryCost = calculateDeliveryCost(order);
  return priceAllItems + deliveryCost;
};

console.log(
  chalk.italic.magenta(`======= FoodDelivery Service =======
Заказчик: ${user.name}, Возраст:${user.age} , Любимая еда: ${user.favoriteFood}.
-----------------------------------------------
Детали заказа: 
Номер заказа: ${order.orderId}
Блюдо: ${order.items}
Количество: ${order.quantity} шт
Цена за порцию: ${order.pricePerItem} руб
Вес одной позиции: ${order.weightPerFood} г
-----------------------------------------------
Детали доставки:
Вес заказа: ${Math.ceil(order.weightPerFood * order.quantity)} г
Стоимость товаров: ${order.quantity * order.pricePerItem} руб
Стоимость доставки: ${calculateDeliveryCost(order)} руб
-----------------------------------------------
${chalk.bold.green(`ОБЩАЯ СТОИМОСТЬ К ОПЛАТЕ: ` + DeliveryCostTotal(order) + 'руб')}
======= Хорошего дня! =======`),
);

// Задание ученики и мандарины
const dividers = '-------------------------------------------------';

const studentInfo = {
  name: ['Алексей', 'Мария', 'Иван', 'София', 'Михаил', 'Анна'],
  age: generateInteger(7, 11),
  grade: generateInteger(1, 5),
  favoriteSubject: ['Математика', 'Чтение', 'Рисование', 'Физкультура', 'Природоведение'],
  favorieSnack: ['Яблоко', 'Печенье', 'Сок', 'Бутерброд', 'Йогурт'],
};
const classInfo = {
  numberOfClasses: generateInteger(3, 8),
  studentsPerClass: generateInteger(20, 35),
};

const totalStudents = classInfo.numberOfClasses * classInfo.studentsPerClass;
const candyPerStudents = totalStudents * 2;
const tangerinePerStudents = totalStudents * 1;

const calculateSupplies = (grade, totalStudents) => {
  const supplies = {};

  supplies.copybook = totalStudents * 10;
  supplies.textbook = totalStudents * 5;
  supplies.desks = Math.ceil(totalStudents / 2);
  supplies.giftsForNewYear = candyPerStudents + tangerinePerStudents;
  supplies.candy = candyPerStudents;
  supplies.tangerine = tangerinePerStudents;

  return supplies;
};

const calculateCost = (
  supplies,
  prices = {
    copybook: 15,
    textbook: 500,
    desks: 4000,
    candy: 15,
    tangerine: 40,
  },
) => {
  const costs = {};

  costs.copybook = supplies.copybook * prices.copybook;
  costs.textbook = supplies.textbook * prices.textbook;
  costs.desks = supplies.desks * prices.desks;
  costs.candy = supplies.candy * prices.candy;
  costs.tangerine = supplies.tangerine * prices.tangerine;
  costs.total = costs.copybook + costs.textbook + costs.desks + costs.candy + costs.tangerine;

  return costs;
};
const randomName = studentInfo.name[Math.floor(Math.random() * studentInfo.name.length)];
const randomSubject = studentInfo.favoriteSubject[Math.floor(Math.random() * studentInfo.favoriteSubject.length)];
const randomSnack = studentInfo.favorieSnack[Math.floor(Math.random() * studentInfo.favorieSnack.length)];

const supplies = calculateSupplies(studentInfo.grade, totalStudents);
const costs = calculateCost(supplies);

console.log(
  chalk.bold.red(`======= School Supplies Calculator =======
Профиль случайного ученика:
Ученик: ${randomName}, ${studentInfo.age} лет, ${studentInfo.grade} класс
Любимый предмет: ${randomSubject}. Любимая закуска: ${randomSnack}`),
);
console.log(dividers);
console.log(
  chalk.italic.magenta(`Данные по школе:
В параллели ${classInfo.numberOfClasses} классов. В каждом классе по ${classInfo.studentsPerClass} учеников.
Всего учеников: ${totalStudents}.`),
);
console.log(dividers);
console.log(
  chalk.italic.yellow(`План закупок на параллель:
Тетради: ${supplies.copybook} шт.
Учебники: ${supplies.textbook} шт.
Парты: ${supplies.desks} шт.`),
);
console.log(dividers);
console.log(
  chalk.italic.green(`План подарков на Новый год:
Конфеты: ${supplies.candy} шт.
Мандарины: ${supplies.tangerine} шт.`),
);
console.log(dividers);
console.log(
  chalk.bold.red(`ОБЩИЙ БЮДЖЕТ НА ЗАКУПКУ: ${costs.total} руб.
======= Удачной закупки! =======`),
);
