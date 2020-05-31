//API endpoint for openWeather JSON response
const miamiWeather =
  "https://api.openweathermap.org/data/2.5/weather?lat=25.7743&lon=-80.1937&appid=d4db498de54f6a5f3d1e98c18422ce50";

function renderText(data) {
  var mainContainer = document.getElementById("weatherStats");
  var outlook = document.createElement("outlook");
  outlook.innerHTML = data.weather[0].description;
  mainContainer.appendChild(outlook);

  var tempContainer = document.getElementById("miamiTemperature");
  var temperature = document.createElement("temperature");
  var fahrenheit = data.main.temp;
  fahrenheit = (fahrenheit - 273.15) * 1.8 + 32.0;
  fahrenheit = fahrenheit.toString().substring(0, 5);
  temperature.innerHTML = fahrenheit + "\u00B0" + " F";
  tempContainer.appendChild(temperature);

  var humidContainer = document.getElementById("miamiHumidity");
  var humid = document.createElement("humid");
  var numeric = data.main.humidity;
  numeric = numeric.toString();
  humid.innerHTML = numeric + "% Humidity";
  humidContainer.appendChild(humid);
}

function parseAsJSON(response) {
  // Return the JSON from the response
  return response.json();
}

function handleError(err) {
  // Show the error to the user
  console.error(err);
  alert(err.message);
}
fetch(miamiWeather).then(parseAsJSON).then(renderText).catch(handleError);
