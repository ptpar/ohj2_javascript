'use strict';

const year = +prompt('Type a year.');

const target = document.querySelector('#target')
if (year%400===0 || (year%100!==0 && year%4===0)) {
  target.innerHTML = `Year ${year} is a leap year.`;
}
else {
  target.innerHTML = `Year ${year} is not a leap year.`;
}
