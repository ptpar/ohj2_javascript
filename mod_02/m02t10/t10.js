'use strict';

const number = +prompt('Type the number of candidates.');

const candidates = [];
for (let i = 1; i <= number; i++) {
  candidates.push({name: prompt(`Type the name of the candidate ${i}`), votes: 0});
}

const voters = +prompt('Type the number of voters.');

for (let i = 1; i <= voters; i++) {
  const vote = prompt(
      'Type the name of the candidate that you want to vote for.');
  for (let c of candidates) {
    if (c.name === vote) {
      c.votes += 1;
    }
  }
}

candidates.sort((a, b) => (b.votes - a.votes));

console.log(`The winner is ${candidates[0].name} with 3 votes.`)
console.log('results:');
for (let c of candidates) {
  console.log(`${c.name}: ${c.votes} votes`);
}