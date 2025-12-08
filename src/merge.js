const mergeToNewObject = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

const user22 = { name: 'Коля', age: 9 };
const diplom = { degree: 'Магистр', university: 'МГУ', department: 'Кафедра информационных технологий' };

const obj3 = mergeToNewObject(user22, diplom);

console.log(obj3);

const merge = (obj1, obj2, priority = 0) => {
  if (priority === 1) {
    return { ...obj2, ...obj1 };
  }
  return { ...obj1, ...obj2 };
};
const user32 = { name: 'Коля', age: 9, notes: 'Заметка от Коли!' };
const work = { address: 'Строительная 4', department: 'Шпаклёвщик', notes: 'Рабочая заметка' };

console.log(merge(user32, work));
console.log(merge(user32, work, 0));
console.log(merge(user32, work, 1));

const report = (finalists) => {
  const [first, second, third, ...others] = finalists;

  console.log(`Первое место:, ${first}`);
  console.log(`Второе место:, ${second}`);
  console.log(`Третье место:, ${third}`);
  console.log(`Остальные:, ${others}`);
};
report(['Александр', 'Михаил', 'Валентин', 'Сергей', 'Артур']);

const showInfo = (user231) => {
  const defaultPhoto = 'https://photos.com/default.jpg';
  const defaultPatronymicAndGender = 'Не указано';

  const {
    name,
    age,
    surname,
    patronymic = defaultPatronymicAndGender,
    gender = defaultPatronymicAndGender,
    photo = defaultPhoto,
  } = user231;

  console.log(`Карточка пользователя
  Имя:${name}
  Фамилия:${surname}
  Отчество: ${patronymic}
  Возраст: ${age}
  Совершеннолетний: ${age >= 18 ? 'Да' : 'Нет'}
  Пол: ${gender}
  Фото: ${photo}`);
};

const ryan = {
  name: 'Райан',
  age: 28,
  surname: 'Гослинг',
  gender: 'Мужчина',
  photo: 'https://photos.com/photo.jpg',
};

const jason = {
  name: 'Джейсон',
  age: 5,
  surname: 'Стетхем',
  patronymic: 'Александрович',
};

showInfo(ryan);
showInfo(jason);
