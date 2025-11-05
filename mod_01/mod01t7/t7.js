'use strict';

const rolls = +prompt("Type the number of dice rolls.");
let sum = 0;
for (let i=0; i<rolls; i++) {
  sum += Math.floor(Math.random() * 6) + 1;
}
console.log(`The sum of the results: ${sum}`);
