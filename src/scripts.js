import './style.css';

const body = document.querySelector('body');
const Country = require('country-list');

const countries = Country.getNames();
const selector = document.querySelector('#countrySelector');

// Country selector list
countries.forEach((country) => {
  const option = document.createElement('option');
  option.value = country;
  option.textContent = country;
  selector.appendChild(option);
});

// Form validations
const email = document.querySelector('#email');
const emailError = document.querySelector('#email + span');

const zip = document.querySelector('#zip');
const zipError = document.querySelector('#zip + span');

const country = document.querySelector('#countrySelector');
const countryError = document.querySelector('#countrySelector + span');

const password = document.querySelector('#pwd');
const pwdConfirm = document.querySelector('#pwdConf');
const pwdError = document.querySelector('#pwdConf + span');

const hey = document.createElement('h1');
hey.textContent = 'Great! all fields are OK.';

// Show errors functions
function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Please enter a valid email';
  }
  emailError.className = 'error';
}

function showZipError() {
  if (zip.validity.valueMissing) {
    zipError.textContent = 'Enter your zip code';
    zipError.classList = 'error';
  }
}

function showCountryError() {
  if (country.value == 'Select country') {
    countryError.textContent = 'Select a country from the list.';
  }
  countryError.classList = 'error';
}

function showPwdError() {
  if (pwdConfirm.validity.valueMissing) {
    pwdError.textContent = 'Please confirm the password';
  } else if (password.value != pwdConfirm.value) {
    pwdError.textContent = 'Passwords not matching';
  }
  pwdError.classList = 'error';
}

// Fields event Listeners
pwdConfirm.addEventListener('change', () => {
  let c = true;
  if (password.value != pwdConfirm.value) {
    c = false;
  }
  if (c) {
    pwdError.classList = '';
    pwdError.textContent = '';
    pwdConfirm.classList = 'valid';
    password.classList = 'valid';
  } else {
    showPwdError();
  }
});

zip.addEventListener('change', () => {
  if (zip.validity.valid) {
    zipError.textContent = '';
    zipError.classList = '';
    zip.classList = 'valid';
  } else {
    showZipError();
  }
});

country.addEventListener('change', () => {
  if (country.validity.valid) {
    countryError.textContent = '';
    countryError.classList = '';
    country.classList = 'valid';
  } else {
    showCountryError();
  }
});

email.addEventListener('change', () => {
  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.classList = '';
    email.classList = 'valid';
  } else {
    showEmailError();
  }
});

const form = document.querySelector('form');
const button = document.querySelector('button');
button.addEventListener('click', (event) => {
  if (!email.validity.valid) {
    showEmailError();
    event.preventDefault();
  }
  if (country.value == 'Select country') {
    showCountryError();
    event.preventDefault();
  }
  if (!zip.validity.valid) {
    showZipError();
    event.preventDefault();
  }
  if (!pwdConfirm.validity.valid) {
    showPwdError();
    event.preventDefault();
  } else {
    form.classList = 'hidden';
    body.appendChild(hey);
  }
});
