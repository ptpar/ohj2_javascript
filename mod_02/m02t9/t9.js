'use strict';

function even(array) {
  const result = [];
  for (let number of array) {
    if (number % 2 === 0) {
      result.push(number);
    }
  }
  return result;
}

const numbers = [1,2,3,4,5];
const even_numbers = even(numbers);
console.log(numbers);
console.log(even_numbers);