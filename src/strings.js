import chalk from "chalk";

const data = new Date().toISOString();

console.log(chalk.bgBlue.gray(data));
console.log(chalk.bgBlack.green(data));
console.log(chalk.bgGray.red(data));
console.log(chalk.bgGreen.blue(data));