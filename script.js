

const apiKey = "a3a8896651a4f0d72da938dd4316ab79";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWheather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json()
    console.log(data)
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.numidity').innerHTML = data.main.humidity+ '%';
    document.querySelector('.wind').innerHTML = data.wind.speed+'km/h';
}
checkWheather();