'use strict';

const numbers = [];
let n = +prompt('Type a number. Number 0 will stop the program.');
while (n !== 0) {
  numbers.push(n);
  n = +prompt('Type a number. Number 0 will stop the program.');
}
numbers.sort((a, b) => (a - b)).reverse();
for (let n of numbers) {
  console.log(n);
}