export const compare = (a, b) => {
  return a === b;
};
console.log(compare(173, 731));
console.log(compare(173, 1.73));
console.log(compare(173, 173));
console.log(compare('Апельсин', 'apelsin'));
console.log(compare('Апельсин', 'Апельсин'));
