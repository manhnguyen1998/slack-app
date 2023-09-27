import axios from "axios";
const api = "https://httpbin.org/get";

const form = document.querySelector(".form-data");

const country = document.querySelector(".country-name");

const searchForCountry = async countryName => {
  try {
    console.log(countryName)
    // const response = await axios.get(`${api}/${countryName}`);
    const response = await axios.get(`${api}`);
    console.log(response)
  } catch (error) {
    error.textContent = "we have no dataaaaaa"
  }
}

const handleSubmit = async e => {
  console.log("aaaa")
  e.preventDefault();
  searchForCountry(country.value);
  console.log(country.value);
};

form.addEventListener("submit", e => handleSubmit(e));
