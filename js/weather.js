// Element ==================================================
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
// Element ==================================================



// DEFINE ==================================================
const WEATHER_API_KEY = "6419b86c9cb3d93b74633375a49f8f32"
// DEFINE ==================================================



// Event Function ==================================================

// Event Function ==================================================



// Function ==================================================
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) =>{
            const _city = data.name;
            const _weather = data.weather[0].main;
            const _temp = data.main.temp;

            weather.innerText = `${_weather} / ${_temp}℃`;
            city.innerText = ` / ${_city}`;
        });
}

function onGeoError(position){
    alert("Can't find you. No weather for you.");
}
// Function ==================================================



// Main ==================================================
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// Main ==================================================