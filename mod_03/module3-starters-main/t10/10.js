'use strict';

const form = document.querySelector('form');
//1. const firstname = document.querySelector('input[name=firstname]');
//1. const lastname = document.querySelector('input[name=lastname]');
const target = document.querySelector('#target');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const formData = new FormData(form);
  const fname = formData.get('firstname');
  const lname = formData.get('lastname');
  target.innerText = `Your name is ${fname} ${lname}`;
  //1. target.innerText = `Your name is ${firstname.value} ${lastname.value}`;
  /*2. Jos data lähetetään getillä:
  const queryString = new URLSearchParams(formData);
  console.log(queryString.toString());
   */
});