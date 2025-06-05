function showweatherDetails(event) {
    event.preventDefault();
}

document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city').value.trim();
    if (!city) {
      alert("Please enter a city name.");
      return;
    }
  
    const apiKey = '883709d5ebdeacac5a2d3f70ec99ca3e';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('City not found');
        }
        return response.json();
      })
      .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
          <h2>Weather in ${data.name}</h2>
          <p>Temperature: ${data.main.temp} &#8451;</p>
          <p>Weather: ${data.weather[0].description}</p>`;
      })
      .catch(error => {
        document.getElementById('weatherInfo').innerHTML = `<p>Error: ${error.message}</p>`;
      });
  });