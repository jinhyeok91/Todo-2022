const API_KEY = "8694d421fdd39587269d4edd72c84ac9";

function onGeoOk(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const name = data.name;
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main},${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather foe you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//
