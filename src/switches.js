// Функция Sponge Bob

import chalk from 'chalk';

export const namePerson = (character) => {
  switch (character) {
    case 'Sponge Bob':
    case 'sponge bob':
    case 'Spongebob':
    case 'SPONGEBOB':
    case 'SPONGE BOB':
      return chalk.yellow(`| (.)(.) |`);

    case 'Patrick':
    case 'Paterick':
    case 'patrick':
      return chalk.magenta(`/ (.)(.) \\`);

    case 'Squidward':
    case 'squidward':
      return chalk.blue('( (.)(.) )');

    case 'Plankton':
    case 'plankton':
      return chalk.green('( (.) )');

    case 'mr.Crabs':
      return chalk.red(' |.||.| ');

    default:
      return 'Неизвестный персонаж';
  }
};

// Функция Маппер для статуса ресторана

export const mup = (statusR) => {
  switch (statusR) {
    case 'Формируются чеки':
    case 'Назначаются повара':
      return chalk.blue('Обрабатывается');

    case 'Запекается':
    case 'Нарезается':
    case 'Варится':
    case 'Жарится':
    case 'Поиск курьера':
      return chalk.yellow('Готовится');

    case 'Курьер берёт заказ':
    case 'Курьер в пути':
    case 'Курьер подъезжает':
      return chalk.blue('У курьера');

    case 'Клиент отказался от заказа':
    case 'Заказ доставлен':
      return chalk.green('Готов');

    default:
      return chalk.magenta('Обрабатывается');
  }
};
