// Функция генерация рандомного числа

export const generateInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

// Функция Площадь квадрата (не понимаю, почему надо снова возвращать площадь, чтобы показало консоль лог)

export const squareS = (a) => {
  const randomA = generateInteger(1, 11);
  const area = randomA ** 2;
  console.log(`Площадь квадрата со стороной a=${randomA} равна ${area}`);
  return area;
};

// Функция Площадь круга

const areaCircle = (a) => {
  const radius = generateInteger(3, 12);
  const area = Math.PI * radius ** 2;
  console.log(`Радиус: ${radius},
  Площадь:${area}`);
  return area;
};
console.log(areaCircle());
