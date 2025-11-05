'use strict';

const numbers = [];
for (let i=0; i<3; i++) {
  numbers.push(+prompt('Type an integer.'));
}

let sum = 0;
let product = 1;
for (let n of numbers) {
  sum += n;
  product *= n;
}
const average = sum / 3
const target = document.querySelector('#target');
target.innerHTML += `<p>Sum: ${sum.toString()}</p>`;
target.innerHTML += `<p>Product: ${product.toString()}</p>`;
target.innerHTML += `<p>Average: ${average.toString()}</p>`;

/* 2. tapa
const int1 = +prompt('Type an integer.')
const int2 = +prompt('Type an integer.')
const int3 = +prompt('Type an integer.')
const sum = int1 + int2 + int3
const product = int1 * int2 * int3
const average = sum / 3


document.querySelector('#target_sum').innerHTML = 'Sum: '+ sum.toString()
document.querySelector('#target_product').innerHTML = 'Product: ' + product.toString()
document.querySelector('#target_average').innerHTML = 'Average: ' + average.toString()
*/
