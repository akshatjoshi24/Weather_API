const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9a0300677fmsh27579db64f0e903p1a1a95jsn49cc199d22b4',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather = (city) => {

	cityName.innerHTML = city
fetch('https//weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=city='+city,options)
	.then(response => response.json())
	.then(response => {
    
    console.log(response)
  
  cloud_pct.innerHTML = response.cloud_pct
  temp.innerHTML = response.temp
  feels_like.innerHTML = response.feels_like
  humidity.innerHTML = response.humidity
  min_temp.innerHTML = response.min_temp
  max_temp.innerHTML = response.max_temp
  wind_speed.innerHTML = response.wind_speed
  wind_degrees.innerHTML = response.wind_degrees
  sunrise.innerHTML = response.sunrise
  sunset.innerHTML = response.sunset
  
  })
  
	.catch(err => console.error(err));

}

Submit.EventaddEventListner("click", (event)=>{
	event.preventDefault()
	getweather(city.value)
})

getweather("Ujjian")