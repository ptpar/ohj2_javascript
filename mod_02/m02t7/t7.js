'use strict';

const max_number = +prompt('Type the maximum number on the dice')
function dice_roll(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

const target = document.querySelector('#target')
if (max_number > 0) {
  let dice;
  do {
    dice = dice_roll(max_number);
    target.innerHTML += `<li>${dice}</li>`
  } while (dice !== max_number);
}

