//1 Функция sayHi
export const name = 'Анатолий';
export const makeGreen = (text) => {
  return '\x1b[32m' + text + '\x1b[0m';
};
export const makeBlue = (text) => {
  return '\x1b[34m' + text + '\x1b[0m';
};

//const name = 'Ангелина';

export const sayHi = (text) => {
  const hi = makeGreen(`Привет,`);
  const name1 = makeBlue(`${name}!`);
  console.log(hi, name1);
};
sayHi();

//2 Функция sayText
