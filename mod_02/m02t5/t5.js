'use strict';

const numbers = [];
let n = +prompt('Type a number. Previously entered number will stop the program.');
while (!numbers.includes(n)) {
  numbers.push(n);
  n = +prompt('Type a number. Previously entered number will stop the program.');
}
numbers.sort((a, b) => (a - b));
for (let n of numbers) {
  console.log(n);
}