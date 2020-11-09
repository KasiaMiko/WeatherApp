function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let citySearch = document.querySelector("#citySearch");
  citySearch.innerHTML = `${searchInput.value}`;
  let apiKey = "cac6eb1808e7ad8b2e537949ab1a8c09";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric`;

  function showTemperature(response) {
    console.log(response.data.main.temp);
    let temperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector("#degrees");
    temperatureElement.innerHTML = `${temperature}`;
    let now = new Date();
    let nowDate = document.querySelector("#curentDate");
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[now.getDay()];
    let hours = now.getHours();
    let minutes = now.getMinutes();
    nowDate.innerHTML = `${day} ${hours}:${minutes}`;
  }
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

function currentTemp() {
  function getPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "cac6eb1808e7ad8b2e537949ab1a8c09";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
    function showCityTemp(response) {
      let temperature = Math.round(response.data.main.temp);
      console.log(temperature);
      let temperatureElement = document.querySelector("#degrees");
      temperatureElement.innerHTML = `${temperature}`;
      let currentLocation = document.querySelector("#citySearch");
      currentLocation.innerHTML = response.data.name;
      let now = new Date();
      let nowDate = document.querySelector("#curentDate");
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      let day = days[now.getDay()];
      let hours = now.getHours();
      let minutes = now.getMinutes();
      nowDate.innerHTML = `${day} ${hours}:${minutes}`;
    }

    axios.get(`${apiUrl}&appid=${apiKey}`).then(showCityTemp);
  }

  navigator.geolocation.getCurrentPosition(getPosition);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let currentButton = document.querySelector("button");
currentButton.addEventListener("click", currentTemp);

let now = new Date();
let nowDate = document.querySelector("#curentDate");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
nowDate.innerHTML = `${day} ${hours}:${minutes}`;