let now = new Date();
let nowDate = document.querySelector("#curentDate");
let date = now.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
nowDate.innerHTML = `${day} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let citySearch = document.querySelector("#citySearch");
  citySearch.innerHTML = `${searchInput.value}`;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function changeUnitsCelsius(event) {
  event.preventDefault();
  let celsius = document.querySelector("#degrees");
  celsius.innerHTML = 19;
}
let linkCelsius = document.querySelector("#celsius");
linkCelsius.addEventListener("click", changeUnitsCelsius);

function changeUnitsFahrenheit(event) {
  event.preventDefault();
  let fahrenheit = document.querySelector("#degrees");
  fahrenheit.innerHTML = 66;
}
let linkFahrenheit = document.querySelector("#fahrenheit");
linkFahrenheit.addEventListener("click", changeUnitsFahrenheit);
