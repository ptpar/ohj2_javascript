'use strict';

const kohde = document.querySelector('#target');

const start_year = prompt("Type the start year.");
const end_year = prompt("Type the end year.");

for (let i=start_year; i<=end_year; i++) {
  if (i%400===0 || (i%100!==0 && i%4===0)) {
    kohde.innerHTML += `<li>${i}</li>`;
  }
}