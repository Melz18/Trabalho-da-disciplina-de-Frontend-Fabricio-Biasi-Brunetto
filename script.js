const API_KEY = 'b2ad9200139bddbe8bb8bfaf342ba5d1';



function fetchWeather() {
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('temperature').innerText = `${data.main.temp}°C`;
                document.getElementById('description').innerText = data.weather[0].description;
                document.getElementById('weatherIcon').src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
                document.getElementById('error').innerText = '';
            } else {
                document.getElementById('error').innerText = 'Cidade não encontrada!';
            }
        })
        .catch(error => {
            document.getElementById('error').innerText = 'Erro na requisição da API!';
        });
}
