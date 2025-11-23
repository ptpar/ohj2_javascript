'use strict';

const apiURL = 'https://api.tvmaze.com';
const form = document.getElementById('tvForm');

form.addEventListener('submit', async function asynchronousFunction(evt)
{
  evt.preventDefault();
  const formData = new FormData(tvForm);
  const queryString = new URLSearchParams(formData).toString();
  //const value_from_input =
  //const value_from_input = document.querySelector('input[name=q]').value;
  try {
    const response = await fetch(`${apiURL}/search/shows?q=${queryString}`);
    //https://api.tvmaze.com/search/shows?q=${value_from_input}
    const jsonData = await response.json();
    if (!jsonData) {
      console.log('Tv-ohjelmaa ei löydy');
    }
    else {
      console.log(jsonData);
    }
    //console.log(jsonData);
  } catch (error) {
    console.error(error.message);
  }
});