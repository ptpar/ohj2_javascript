'use strict';

const dogs = [];
for (let i=1; i<=6; i++) {
  dogs.push(prompt(`Type the name of the ${i}. dog.`));
}
dogs.sort().reverse();

const target = document.querySelector('#target');
for (let d of dogs) {
  target.innerHTML += `<li>${d}</li>`
 }