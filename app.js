const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');
const weatherIcon = document.getElementById('weatherIcon');
const temp = document.getElementById('temp');
const desc = document.getElementById('desc');
const errorMsg = document.getElementById('errorMsg');

const API_KEY = 'd3a227cf31c085c7514f099031d832a8';

searchBtn.addEventListener('click', () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${API_KEY}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Cidade não encontrada.');
            }
            return response.json();
        })
        .then(data => {
            weatherInfo.classList.remove('hidden');
            errorMsg.classList.add('hidden');
            weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            temp.textContent = `Temperatura: ${data.main.temp}°C`;
            desc.textContent = `Descrição: ${data.weather[0].description}`;
        })
        .catch(err => {
            weatherInfo.classList.add('hidden');
            errorMsg.classList.remove('hidden');
            errorMsg.textContent = err.message;
        });
});
.then(data => {
    weatherInfo.classList.remove('hidden');
    errorMsg.classList.add('hidden');
    weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    temp.textContent = `Temperatura: ${data.main.temp}°C`;
    desc.textContent = `Descrição: ${data.weather[0].description}`;

    addToHistory(cityInput.value);
})
// ...

// Adiciona a cidade ao histórico
function addToHistory(city) {
    const historyList = document.getElementById('historyList');
    const listItem = document.createElement('li');
    listItem.textContent = city;
    historyList.appendChild(listItem);
}
