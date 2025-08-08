let age = 10;
const size = 1.44;
const myName = 'myName';

console.log('1:', age);
console.log('2:', String(age));
console.log('3:', age);

age = String(age);

console.log('4:', age);

age = Number(age);

console.log('5:', age);

console.log('6:', Number('23'));
console.log('7:', String(Number('qwerty')));
console.log('8:', Number('0'));
console.log('9:', Number('1'));
console.log('10:', String(1));
console.log('11:', Number(1));
console.log('12:', String(Number(String(1))));
console.log('13:', Number(String(Number(String(1)))));

console.log('14:', myName);
console.log('15:', String(myName));
console.log('16:', String(String(myName)));
console.log('17:', Number(myName));
console.log('18:', String(Number(myName)));

console.log('19:', String(size));
console.log('20:', Number('12.45'));
console.log('21:', Number('12,45'));