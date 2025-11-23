'use strict';

const apiURL = 'https://api.chucknorris.io/jokes/search?query=';
const form = document.querySelector('#searchForm');
const article = document.querySelector('#result');

form.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  article.innerHTML = '';
  const value_from_input = document.querySelector('input[name=search]').value;
  try {
    const response = await fetch(apiURL + value_from_input);
    const jsonData = await response.json();
    //console.log(jsonData.result[0].value)
    //const p = document.createElement('p');
    if (jsonData.result.length > 0) {
      for (let result of jsonData.result) {
      const p = document.createElement('p');
      p.innerText = result.value;
      article.append(p);
      }
    }
    else {
      const p = document.createElement('p');
      p.innerText = 'No results.';
      article.append(p);
    }
  } catch (error) {
    console.error(error.message)
  }
});