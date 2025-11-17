'use strict';

const button = document.getElementById('start');
//const operations = ['+', '-', '*', '/'];
const result = document.getElementById('result');
button.addEventListener('click', function () {
  const input = document.getElementById('calculation').value;
  if (input.includes('+')) {
    const numbers = input.split('+');
    result.innerText = (+numbers[0] + +numbers[1]).toString();
  }
  else if (input.includes('-')) {
    const numbers = input.split('-');
    result.innerText = (+numbers[0] - +numbers[1]).toString();
  }
  else if (input.includes('*')) {
    const numbers = input.split('*');
    result.innerText = (+numbers[0] * +numbers[1]).toString();
  }
  else if (input.includes('/')) {
    const numbers = input.split('/');
    result.innerText = (+numbers[0] / +numbers[1]).toString();
  }
});
