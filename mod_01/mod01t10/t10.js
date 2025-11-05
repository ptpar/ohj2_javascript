'use strict';

const dice = +prompt('Type the number of dice');
const sum = +prompt('Type the sum of the eye numbers of interest');
let times = 0;
for (let i = 0; i <= 10000; i++) {
  let calc_sum = 0;
  for (let i = 0; i < dice; i++) {
    calc_sum += Math.floor(Math.random() * 6) + 1;
  }
  if (calc_sum === sum) {
    times += 1;
  }
}
const prob = (times / 10000 * 100).toFixed(2);
document.querySelector(
    '#target').innerHTML = `Probability to get sum ${sum} with ${dice} dice is ${prob}%`;