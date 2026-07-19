import activeLayout, { dashboardLiActive } from './main.js';

const backLink = document.querySelector('.weather-forecast .back-link');

if (backLink) {
    backLink.addEventListener('click', () => {
        dashboardLiActive();
        activeLayout(document.querySelector('.dashboard'));
    });
}






//const apiKey = '06b5cd6b420e49c38a383620261207';
// const apiKey = '40b29b1e61ea4c14942125842261907';
// const city = 'hyderabad';
// const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`;

// fetch(url).then((res) => {
//     if (!res.ok) {
//         alert('API failed! Last valid date: 19th July');
//         throw new Error('API Error');
//     }
//     return res.json();
// }).then((data) => {
//     //    console.log(data)
//     document.querySelector('.weather-location').innerText = `${data.location.name} ${data.location.region}, ${data.location.country}`;
//     document.querySelector('.weather-temp').innerText = `${Math.floor(data.current.temp_c)}°C`;
//     document.querySelector('.side-stat-value.humidity').innerText = `${Math.floor(data.current.humidity)}%`;
//     document.querySelector('.side-stat-value.wind').innerText = `${Math.floor(data.current.wind_kph)} km/h`;
//     document.querySelector('.side-stat-value.feels').innerText = `${Math.floor(data.current.wind_kph)} km/h`;

//     document.querySelector('.weather-row .big').innerText = `${Math.floor(data.current.temp_c)}°C`;
// })
//     .catch((err) => console.log('something went wrong', err))

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeather, showError);
} else {
    console.log("Geolocation is not supported.");
}

async function getWeather(position) {

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // console.log(latitude, "latitude");
    // console.log(longitude, "longitude");

  const apiKey = '40b29b1e61ea4c14942125842261907';

    const url = `http://api.weatherapi.com/v1/marine.json?key=${apiKey}&q=${latitude},${longitude}`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch weather data.");
        }

        const data = await response.json();

        // console.log(data);
        // console.log(data.forecast.forecastday[0].astro.sunrise, "sunrise")
        // console.log(data.forecast.forecastday[0].astro.sunset, "sunset")

        // console.log(data.forecast.forecastday[0].hour[10].temp_c, "hour 11AM")
        // console.log(data.forecast.forecastday[0].hour[11].temp_c, "hour 12AM")
        // console.log(data.forecast.forecastday[0].hour[12].temp_c, "hour 1PM")
        // console.log(data.forecast.forecastday[0].hour[13].temp_c, "hour 2PM")
        // console.log(data.forecast.forecastday[0].hour[14].temp_c, "hour 3PM")

        // console.log(data.forecast.forecastday[0].day.avghumidity, "humidity")
        // console.log(data.forecast.forecastday[0].day.avgvis_km, "wind speed km/hr")
		// console.log(data.forecast.forecastday[0].day.maxwind_kph, "feels like km/hr")

        // console.log("City:", data.location.name);
        // console.log("Region:", data.location.region);
        // console.log("Country:", data.location.country);

        document.querySelector('.weather-location').innerText = `${data.location.name} ${data.location.region}, ${data.location.country}`;
        document.querySelector('.weather-temp').innerText =  `${Math.floor(data.forecast.forecastday[0].hour[0].temp_c)}°C`;
        document.querySelector('.side-stat-value.humidity').innerText = `${Math.floor(data.forecast.forecastday[0].day.avghumidity)}`;
        document.querySelector('.side-stat-value.wind').innerText = `${Math.floor(data.forecast.forecastday[0].day.avgvis_km)}`
        document.querySelector('.side-stat-value.feels').innerText = `${Math.floor(data.forecast.forecastday[0].day.maxwind_kph)} km/h`;

        document.querySelector('.weather-row .big').innerText = `${Math.floor(data.forecast.forecastday[0].hour[0].temp_c)}°C`;
        document.querySelector('.weather-row .sub').innerText = `${data.location.name} ${data.location.region}, ${data.location.country}`;

        document.querySelector('.sunrise-time').innerText = data.forecast.forecastday[0].astro.sunrise;
        document.querySelector('.sunset-time').innerText = data.forecast.forecastday[0].astro.sunset;

        document.querySelector('.hourly-temp.eleven').innerText = Math.floor(data.forecast.forecastday[0].hour[10].temp_c);
        document.querySelector('.hourly-temp.twelve').innerText = Math.floor(data.forecast.forecastday[0].hour[11].temp_c);
        document.querySelector('.hourly-temp.thirteen').innerText = Math.floor(data.forecast.forecastday[0].hour[12].temp_c);
        document.querySelector('.hourly-temp.fourteen').innerText = Math.floor(data.forecast.forecastday[0].hour[13].temp_c);
        document.querySelector('.hourly-temp.fifteen').innerText = Math.floor(data.forecast.forecastday[0].hour[14].temp_c);

    } catch (error) {
        console.error(error.message);
    }

}

function showError(error) {
    console.log(error.message);
}




