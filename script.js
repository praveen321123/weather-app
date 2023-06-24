const searchInput = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const icon = document.querySelector('.weather-icon')
const weatherDiv = document.querySelector('.weather')

const apiKey = 'eb70c7ba35ece20fd29f2fe4b776e7b6'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

async function checkWeather(city){
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`)
    var data = await response.json()
    console.log(data);

    document.querySelector('.city').innerHTML = data.name ? data.name : "No city found!"
    document.querySelector('.temp').innerHTML = data.cod != 404 ? `${Math.round(data.main.temp)}°C` : '0°C'
    document.querySelector('.humidity').innerHTML = data.cod != 404 ? `${data.main.humidity} %` : '0 %'
    document.querySelector('.wind').innerHTML = data.cod != 404 ? `${data.wind.speed} Km/h` : '0 Km/h'

    if (data.cod != 404){
        icon.src = `./${data.weather[0].main}.png`
        console.log('heyyy');
    } else {
        icon.src = './invalid.webp'
        console.log("notttt");
    }
}

searchBtn.addEventListener('click', ()=> {
    checkWeather(searchInput.value)
    weatherDiv.classList.remove('hidden')
})






