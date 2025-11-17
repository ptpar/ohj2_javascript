'use strict';

const n1 = [];
for (let i=1; i<=5; i++) {
  n1.push(prompt(`${i}. Type a number`));
}

for (let i=n1.length-1; i>=0; i--) {
  console.log(n1[i])
}
