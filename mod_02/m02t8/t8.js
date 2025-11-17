'use strict';

function concat(array) {
  let string = '';
  for (let element of array) {
    string += element;
  }
  return string;
}
const elements = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
document.querySelector('#target').innerHTML = concat(elements);