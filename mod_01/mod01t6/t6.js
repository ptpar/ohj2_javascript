'use strict';

const answer = confirm('Should I calculate the square root?');
let print;
if (answer) {
  const number = +prompt('Type a number.');
  if (number >= 0) {
    print = Math.sqrt(number).toString();
  }
  else {
    print = 'The square root of a negative number is not defined';
  }
}
else {
  print = 'The square root is not calculated.';
}

document.querySelector('#target').innerHTML = print;