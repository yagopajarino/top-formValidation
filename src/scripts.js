import './style.css';

const Country = require('country-list');

const countries = Country.getNames();
const selector = document.querySelector('#countrySelector');

countries.forEach((country) => {
  const option = document.createElement('option');
  option.value = country;
  option.textContent = country;
  selector.appendChild(option);
});
