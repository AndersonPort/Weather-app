const apikey = "c37e926f4847b0ed1377dbe970b7bf59";

const url = (location) => `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;

async function getWeatherByLocation(location) {
    const resp = await fetch(url(location), {
    origin: "cors"});

    const respData = await resp.json();

    console.log(respData);


}

getWeatherByLocation("London");