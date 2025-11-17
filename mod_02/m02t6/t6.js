'use strict';

function dice_roll() {
  return Math.floor(Math.random() * 6) + 1;
}

const target = document.querySelector('#target');
let dice;
do {
  dice = dice_roll();
  //target.innerHTML += `<li>${dice}</li>`;
  const el = document.createElement('li');
  //el.textContent = `${dice}`;
  el.innerText = `${dice}`;
  target.insertAdjacentElement('beforeend', el);
} while (dice !== 6);
