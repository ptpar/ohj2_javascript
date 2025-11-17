'use strict';

const p = document.querySelector('#trigger');
const img = document.querySelector('img');

p.addEventListener('mouseover', () => {
  img.src = 'img/picB.jpg';
});
p.addEventListener('mouseout', () => {
  img.setAttribute('src', 'img/picA.jpg');
});