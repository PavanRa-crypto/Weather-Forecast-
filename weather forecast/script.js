const apiKey = "c3bd92a7ff61e9b23d39065d8071e782";

const options = {
  method: "GET",
  headers: {
    "X-API-Key": apiKey,
  },
};

const updateWeather = (city, elements) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then((response) => {
      console.log(response);
      elements.cityName.innerHTML = city;
      elements.temp.innerHTML = response.main.temp;
      elements.feels_like.innerHTML = response.main.feels_like;
      elements.humidity.innerHTML = response.main.humidity;
      elements.min_temp.innerHTML = response.main.temp_min;
      elements.max_temp.innerHTML = response.main.temp_max;
      elements.wind_speed.innerHTML = response.wind.speed;
      elements.wind_degrees.innerHTML = response.wind.deg;
      elements.sunset.innerHTML = new Date(response.sys.sunset * 1000).toLocaleTimeString(); // Convert UNIX timestamp to readable time
    })
    .catch((err) => {
      console.error(err);
      elements.cityName.innerHTML = `Error fetching data for ${city}`;
    });
};

const cities = [
  { name: 'Mumbai', elements: { cityName: cityName1, temp: temp2, feels_like: feels_like2, humidity: humidity2, min_temp: min_temp2, max_temp: max_temp3, wind_speed: wind_speed2, wind_degrees: wind_degrees2, sunset: sunset2 } },
  { name: 'New Delhi', elements: { cityName: cityName2, temp: temp3, feels_like: feels_like3, humidity: humidity3, min_temp: min_temp3, max_temp: max_temp4, wind_speed: wind_speed3, wind_degrees: wind_degrees3, sunset: sunset3 } },
  { name: 'Kolkata', elements: { cityName: cityName3, temp: temp4, feels_like: feels_like4, humidity: humidity4, min_temp: min_temp4, max_temp: max_temp5, wind_speed: wind_speed4, wind_degrees: wind_degrees4, sunset: sunset4 } },
  { name: 'Mysore', elements: { cityName: cityName4, temp: temp5, feels_like: feels_like5, humidity: humidity5, min_temp: min_temp5, max_temp: max_temp6, wind_speed: wind_speed5, wind_degrees: wind_degrees5, sunset: sunset5 } },
  { name: 'Pune', elements: { cityName: cityName5, temp: temp6, feels_like: feels_like6, humidity: humidity6, min_temp: min_temp6, max_temp: max_temp7, wind_speed: wind_speed6, wind_degrees: wind_degrees6, sunset: sunset6 } },
  { name: 'Bangalore', elements: { cityName: cityName6, temp: temp7, feels_like: feels_like7, humidity: humidity7, min_temp: min_temp7, max_temp: max_temp8, wind_speed: wind_speed7, wind_degrees: wind_degrees7, sunset: sunset7 } }
];

const getWeather = (city) => {
  updateWeather(city, {
    cityName: cityName,
    temp: temp,
    feels_like: feels_like,
    humidity: humidity,
    min_temp: min_temp,
    max_temp: max_temp,
    wind_speed: wind_speed,
    wind_degrees: wind_degrees,
    sunset: sunset,
  });
};

cities.forEach(city => {
  updateWeather(city.name, city.elements);
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Bangalore");