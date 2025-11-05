'use strict';

const rand_int = Math.floor(Math.random() * 4);

//name = prompt('Type your name.');
const houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
document.querySelector(
    '#target').innerHTML = `name, you are ${houses[rand_int]}.`;

/*
// 1. tapa
const rand_int = getRandomInt(4)
console.log(rand_int);
// Gryffindor, Slytherin, Hufflepuff, and Ravenclaw
let class1;
switch (getRandomInt(4)) {
  case 1:
    class1 = `Gryffindor`;
    break;
  case 2:
    class1 = `Slytherin`;
    break;
  case 3:
    class1 = `Hufflepuff`;
    break;
  case 4:
    class1 = `Ravenclaw`;
    break;
}

// 2. tapa
let class2;
if (rand_int === 1) {
  class2 = 'Gryffindor';
}
else if (rand_int === 2) {
  class2 = 'Slytherin';
}
else if (rand_int === 3) {
  class2 = 'Hufflepuff';
}
else {
  class2 = 'Ravenclaw';
}

document.querySelector('#target').innerHTML = `${name}, you are ${class2}.`;
/*
for (let i=0; i<=5; i++) {
  console.log(getRandomInt(4));
}
*/

