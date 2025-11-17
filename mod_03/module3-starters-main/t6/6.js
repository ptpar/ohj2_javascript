'use strict';

const button = document.querySelector('button');

function popup(){
  alert('Button Clicked');
}
button.addEventListener('click', popup);