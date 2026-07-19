import activeLayout, { dashboardLiActive } from './main.js';

const backLink = document.querySelector('.weather-forecast .back-link');

if (backLink) {
    backLink.addEventListener('click', () => {
        dashboardLiActive();
        activeLayout(document.querySelector('.dashboard'));
    });
}


async function init() {

    try {

        const location = await getLocation();

        console.log(location);

    } catch (error) {

        console.error(error);

    }

}

init();

// let currentLocaton = null;
// const getLocation = async () => {
//     const response = await fetch("https://ipapi.co/json/");
//     const data = await response.json();
//     console.log(data.city);
//     return data.city;
//     // fetch("https://ipapi.co/json/")
//     // .then(response => response.json())
//     // .then(data => {
//     //     console.log(data.city);
//     //     console.log(data.region);
//     //     console.log(data.country_name);
//     // });
// }
//getLocation();

// if(!currentLocaton){
//     currentLocaton = getLocation();
// }

//const apiKey = '06b5cd6b420e49c38a383620261207';
const apiKey = '40b29b1e61ea4c14942125842261907';
const city = 'delhi';
const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`;

fetch(url).then((res) => {
    if (!res.ok) {
        alert('API failed! Last valid date: 19th July');
        throw new Error('API Error');
    }
    return res.json();
}).then((data) => {
    //    console.log(data)
    document.querySelector('.weather-location').innerText = `${data.location.name} ${data.location.region}, ${data.location.country}`;
    document.querySelector('.weather-temp').innerText = `${Math.floor(data.current.temp_c)}°C`;
    document.querySelector('.side-stat-value.humidity').innerText = `${Math.floor(data.current.humidity)}%`;
    document.querySelector('.side-stat-value.wind').innerText = `${Math.floor(data.current.wind_kph)} km/h`;
    document.querySelector('.side-stat-value.feels').innerText = `${Math.floor(data.current.wind_kph)} km/h`;

    document.querySelector('.weather-row .big').innerText = `${Math.floor(data.current.temp_c)}°C`;
})
    .catch((err) => console.log('something went wrong', err))


