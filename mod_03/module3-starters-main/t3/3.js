'use strict';

const ul = document.querySelector('#target');
const names = ['John', 'Paul', 'Jones'];

for (let name of names) {
  const li = document.createElement('li');
  li.innerHTML = name;
  ul.appendChild(li);
}