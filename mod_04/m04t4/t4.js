'use strict';

const form = document.getElementById('tvForm');
const result = document.getElementById('result');

form.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  result.innerHTML = '';
  const value_from_input = document.querySelector('input[name=q]').value;
  try {
    const url = `https://api.tvmaze.com/search/shows?q=${value_from_input}`;
    const response = await fetch(url);
    const jsonData = await response.json();

    const h2 = document.createElement('h2');
    h2.innerText = jsonData[0]['show']['name'];

    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.innerText = 'Link to details';

    const img = document.createElement('img');
    const image = jsonData[0].show.image;
    image ?
        img.src = image.medium :
        img.src = 'https://placehold.co/210x295?text=Not%20Found';
    img.alt = 'image';

    const summary = document.createElement('div');
    summary.innerHTML = jsonData[0]['show']['summary'];

    const article = document.createElement('article');
    article.append(h2, a, img, summary);
    result.append(article);
  } catch (error) {
    console.error(error.message);
  }
});