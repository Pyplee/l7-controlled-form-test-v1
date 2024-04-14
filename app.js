import axios from 'axios';
import app from './src/application.js';

app();

const inputName = document.querySelector('#inputName');
const inputEmail = document.querySelector('#inputEmail');

async function fetch({ dateAxios }) {
  axios.post('/users', dateAxios)
    .then((response) => {
      const { statusText } = response;
      if (statusText !== 'OK') {
        throw new Error('not success');
      }
      const { data } = response;
      return data;
    })
    .then((resp) => {
      const { message } = resp.data;
      document.body.innerHTML = `<p>${message}</p>`;
    })
    .catch((e) => console.log(e));
}

const buttonSubmit = document.querySelector('input[type=submit]');
buttonSubmit.setAttribute('disabled', 'true');
console.log(buttonSubmit);
buttonSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const name = inputName.value;
  const email = inputEmail.value;
  fetch({ name, email });
});

function validateName(name) {
  const trimedName = name.trim();
  if (trimedName.length > 0) {
    return true;
  }
  return false;
}

function validateEmail(email) {
  const trimedemail = email.trim();
  if (trimedemail.length === 0) {
    return false;
  }
  const splitedArr = trimedemail.split('');
  const index = splitedArr.indexOf('@');
  if (index === -1) {
    return false;
  }
  if (index < 1) {
    return false;
  }
  if ((trimedemail.length - 1) === index) {
    return false;
  }
  const indexSpace = email.indexOf(' ');
  if (indexSpace !== -1) {
    return false;
  }
  return true;
}

inputName.addEventListener('input', () => {
  const { value } = inputName;
  const result = validateName(value);
  if (result) {
    inputName.classList.remove('is-invalid');
    inputName.classList.add('is-valid');
  } else {
    inputName.classList.remove('is-valid');
    inputName.classList.add('is-invalid');
  }
  const valid = document.querySelectorAll('.is-valid').length;
  if (valid === 2) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
});

inputEmail.addEventListener('input', () => {
  const { value } = inputEmail;
  const result = validateEmail(value);
  if (result) {
    inputEmail.classList.remove('is-invalid');
    inputEmail.classList.add('is-valid');
  } else {
    inputEmail.classList.remove('is-valid');
    inputEmail.classList.add('is-invalid');
  }
  const valid = document.querySelectorAll('.is-valid').length;
  if (valid === 2) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
});
