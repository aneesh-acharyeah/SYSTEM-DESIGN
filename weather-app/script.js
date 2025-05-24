const API_KEY = "08f881cc3acb4521cddfbfd1d99a9ee0";

const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");
const weatherResult = document.getElementById("weather-result");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (!city) {
        weatherResult.innerHTML = `<p class="error">Please enter a city name.</p>`;
        return;
    }
    getWeather(city);
})

async function getWeather(city) {
    weatherResult.innerHTML = "Loading...";
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        )
        if (!res.ok) throw new Error("city not found");
        const data = await res.json();
        const { name, main, weather } = data;

        weatherResult.innerHTML = `
      <h2>${name}</h2>
      <p><strong>Temperature:</strong> ${main.temp}°C</p>
      <p><strong>Humidity:</strong> ${main.humidity}%</p>
      <p><strong>Condition:</strong> ${weather[0].description}</p>
    `;
    } catch (err) {
        weatherResult.innerHTML = `<p class="error">${err.message}</p>`;
    }
}