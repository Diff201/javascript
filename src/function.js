const name = 'Анатолий';
const makeGreen = (text) => {
  return '\x1b[32m' + text + '\x1b[0m';
};
const makeBlue = (text) => {
  return '\x1b[34m' + text + '\x1b[0m';
};

//const name = 'Ангелина';

const sayHi = (text) => {
  const hi = makeGreen(`Привет,`);
  const name1 = makeBlue(`${name}!`);
  console.log(hi, name1);
};
sayHi();
