'use strict';

const number = +prompt('Type the number of participants');

const participants = [];
for (let i = 0; i < number; i++) {
  participants.push(prompt('Type the name of the participant.'));
}

participants.sort();

const target = document.querySelector('#target');
for (let p of participants) {
  target.innerHTML += `<li>${p}</li>`;
}