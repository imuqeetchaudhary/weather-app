function onSubmit(event) {
  event.preventDefault();

  const form = document.forms.weather;
  const cityName = form.elements.cityName.value;

  const apiKey = `33762b2af0e148042f2fafa716202a75`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  axiosHTTPRequest(url, cityName);
}

function axiosHTTPRequest(url, cityName) {
  axios.get(url).then((response) => {
    const weatherData = response.data;

    const section = document.querySelector("section.show-weather");
    const h2 = section.querySelector("h2");
    const p = section.querySelector("p");
    const img = section.querySelector("img");

    const temperature = weatherData.main.temp - 273.15;
    const feelsLike = weatherData.main.feels_like - 273.15;

    const source = weatherData.weather[0].icon;

    h2.innerText = `Weather of ${cityName}`;

    p.innerText = `Actual temperature of ${cityName} is ${Math.round(
      temperature.toFixed(2)
    )} celsius and feels like temperature is ${Math.round(
      feelsLike.toFixed(2)
    )} celsius`;

    img.src = `https://openweathermap.org/img/wn/${source}@2x.png`;

    window.location.href = "/index.html#show-weather";
  });
}
