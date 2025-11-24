'use strict';

const apiURL = 'https://api.tvmaze.com';
const form = document.getElementById('tvForm');

form.addEventListener('submit', async function asynchronousFunction(evt)
{
  evt.preventDefault();
  const formData = new FormData(tvForm);
  const queryString = new URLSearchParams(formData).toString();
  try {
    const response = await fetch(`${apiURL}/search/shows?q=${queryString}`);
    const jsonData = await response.json();
    console.log(jsonData);
    } catch (error) {
    console.error(error.message);
  }
});