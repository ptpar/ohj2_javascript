'use strict';

const button = document.querySelector('button');
button.addEventListener('click', () => {
  const operation = document.getElementById('operation').value;
  const num1 = +document.getElementById('num1').value;
  const num2 = +document.getElementById('num2').value;
  const result = document.getElementById('result');
  switch (operation) {
    case 'add':
      result.innerText = (num1 + num2).toString();
      break;
    case 'sub':
      result.innerText = (num1 - num2).toString();
      break;
    case 'multi':
      result.innerText = `${num1 * num2}`;
      break;
    case 'div':
      result.innerText = `${num1 / num2}`;
      break;
  }
});
