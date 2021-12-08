const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

//                  --- API & KEY ---
const apikey = "c32ffe255cdfad999d67dfb511e5323e";
const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;


async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), {
    origin: "cors"});
    const respData = await resp.json();

    addWeatherToPage(respData);
}

function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);

    const weather = document.createElement('div');
    weather.classList.add('weather');

    weather.innerHTML = `
        <small>There are</small>
        <h2>${temp}°C</h2>
        <p>in ${search.value}</p>`;


//          --- cleaning up ---

    main.innerHTML = "";

    
    main.appendChild(weather);
}

function KtoC(K) {
    return (K - 273.15).toFixed(2);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = search.value;

    if(city) {
        getWeatherByLocation(city);
    }
});