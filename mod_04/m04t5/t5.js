'use strict';

async function retrieveJoke () {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const jsonData = await response.json();
    console.log(jsonData.value);
  } catch (error) {
    console.log(error.message);
  }
}

retrieveJoke()

// Warning: Promise returned from retrieveJoke is ignored -> ilmoitus tulee, jos ei ole returnia
//.then(r => )