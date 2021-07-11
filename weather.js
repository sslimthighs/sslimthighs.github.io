const API_KEY = "49f388e6149e8472691440c9f24ebc67"

function onGeoOK (position) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")
            city.innerText = data.name
            weather.innerText = `${data.weather[0].main}`
    })
}

function onGeoError () {
    alert("Can't find you. No weather for you.")
}


navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)