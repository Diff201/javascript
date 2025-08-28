// Функция Соединитель
export const arrayJoin = ['max', 'john', 123, null];
console.log(arrayJoin.join('_'));

export const arrayJoin1 = [1, 2, 3];
console.log(arrayJoin1.join('-'));

// Функция История никнеймов

export const user6 = { id: 8, nickname: 'Саня Санёчек', nicknameHistory: [] };
export const setNickname = (user6, newNickname) => {
  user6.nicknameHistory.push(user6.nickname);
  user6.nickname = newNickname;
};

export const max = { id: 3, nickname: 'Franz Hermann', nicknameHistory: ['max', 'maxxx'] };

//Функция Уникальность

const list = [];

const shoppingList = (list, product) => {
  if (!list.includes(product)) {
    list.push(product);
  }
};
shoppingList(list, 'Картошка');
shoppingList(list, 'Капуста');
shoppingList(list, 'Морковь');
shoppingList(list, 'Картошка');
shoppingList(list, 'Лук');
shoppingList(list, 'Морковь');
console.log(list);

const list2 = [];

const indexList = (list2, index) => {
  if (!list2.includes(index)) {
    list2.push(index);
  }
};
indexList(list2, 3);
indexList(list2, 4);
indexList(list2, 4);
indexList(list2, 4);
indexList(list2, 3);
indexList(list2, 2);
console.log(list2);

//Функция Ресторан

const cheque = {
  food: [''],
  snacks: [''],
  drinks: [''],
};

const divider = '----------';

const chequeForCook = {
  if ('food' in cheque)
}