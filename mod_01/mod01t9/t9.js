'use strict';

const int = +prompt('Type an integer.');
let prime = '';
for (let i=2; i<=int/2+1; i++) {
  if (int % i === 0 && i!==int) {
    prime = ' not';
    break;
  }
}

console.log(`${int} is${prime} a prime number.`);