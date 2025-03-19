// const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "0ddaeb87b8msheccd80bd0038969p195994jsnd6b1b4e2fcf9",
//       "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
//     },
//   };
//   const getWeather = (city) => {
  
//   cityName6.innerHTML = city
//   fetch(
//     'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bangalore',
//     options
//   )
//     .then(response => response.json())
//     .then((response) => {
//       console.log(response)

//       temp7.innerHTML = response.temp
//       feels_like7.innerHTML = response.feels_like
//       humidity7.innerHTML = response.humidity
//       min_temp7.innerHTML = response.min_temp
//       max_temp8.innerHTML = response.max_temp
//       wind_speed7.innerHTML = response.wind_speed
//       wind_degrees7.innerHTML = response.wind_degrees
//       sunset7.innerHTML = response.sunset
//     })
//     .catch((err) => console.error(err));

//   };

//   submit.addEventListener("click", (e) => {
//     e.preventDefault()
//     getWeather(city.value)
//   }); 
  
//    getWeather("Shimoga");