// Базовые операции
import chalk from 'chalk';

export let user = {
  name: 'Ангелина',
  age: 24,
};

// Добавьте поле, используя '.'

user.adress = 'Москва, улица ';

// Добавьте поле, содержащее в имени пробел или тире, используя []

user['Любимый цвет'] = 'белый';

// Удаление полей

delete user.adress;
delete user['Любимый цвет'];

// Добавьте объекту вложенный объект

user.pet = {
  type: 'Собака',
  nickname: 'Бри',
};

//Добавьте вложенному объекту новое поле

user.pet.age = 2;

//Измените значение поля вложенного объекта

user.pet.type = 'Морская свинка';

//Добавьте в объект новое поле, название которого лежит в другой переменной, и присвойте туда значение, которое лежит ещё в другой переменной

const newValue = 'car';
const car = 'Toyota';

user[newValue] = car;

//Создайте объект из 3-5 полей, для которых значения возьмутся из одноимённых переменных. Используйте краткую запись.

const FavoriteFood = 'sushi';
const FavoriteDrink = 'Coke-Cola';
const FavoriteCar = 'Toyota Celica';
const FavoritePlace = 'Crimea';

export const userInfo = {
  FavoriteFood,
  FavoriteDrink,
  FavoriteCar,
  FavoritePlace,
};

// Функция Удаление поля
export const remove = (obj, propertyName) => {
  delete obj[propertyName];
};

export const user1 = { id: 5, age: 24, name: 'Gely' };

//Функция Добавление поля

export const addProperty = (obj, propertyName, value) => {
  obj[propertyName] = value;
};
export const user2 = { id: 5, name: 'Gely' };

// Функция Сравнение полей

export const compare = (obj1, obj2, key) => {
  const value1 = obj1[key];
  const value2 = obj2[key];
  const equal = value1 === value2;
  if (equal) {
    console.log(chalk.green(`У обоих объектов по ключу "${key}" лежит одинаковое значение - ${value1}`));
  } else {
    console.log(
      chalk.red(`У объектов по ключу "${key}" разные значения. У первого - ${value1}, а у второго - ${value2}`),
    );
  }
};

export const user3 = { id: 24, name: 'Gely', address: 0 };

compare(user3, { id: 24 }, 'id');
compare(user3, { id: 24, name: 'alex' }, 'name');
compare({}, {}, 'address');

//Функция Программа переселения

const resettlementProgram = (person) => {
  const { age, city, address } = person;
  const adultAge = age >= 18;
  let newCity = city;
  let newStreet = address;

  if (adultAge) {
    if (city === 'Москва') {
      if (address.includes('Ленина')) {
        newCity = 'Москва';
        newStreet = 'Кривая 109';
      } else {
        newCity = 'Иваново';
        newStreet = 'Важная 5';
      }
    } else {
      if (address.includes('Капиталистов')) {
        newCity = 'Москва';
        newStreet = 'Материалистоа 3';
      } else {
        newStreet = 'Центральная 2';
      }
    }
  } else {
    if (age >= 16 && age <= 17) {
      if (city === 'Москва') {
        newCity = 'Кострома';
      }
    }
  }
  console.log(`Новый адрес: ${chalk.green(newCity)}, ${chalk.blue(newStreet)}`);
};
const user4 = {
  id: 40,
  age: 16,
  name: 'Валентин Петрович',
  city: 'Москва',
  address: 'ул. Профсоюзная',
};
resettlementProgram(user4);

// Функция Возраст

const dateBirth = () => {};
