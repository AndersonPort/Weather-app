const apikey = "c32ffe255cdfad999d67dfb511e5323e";

const url = (location) => `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;

async function getWeatherByLocation(location) {
    const resp = await fetch(url(location), {
    origin: "cors"});

    const respData = await resp.json();

    console.log(respData, KtoC(respData.main.temp));

}

getWeatherByLocation("Sobral");

function KtoC(K) {
    return (K - 273.15).toFixed(2);
}