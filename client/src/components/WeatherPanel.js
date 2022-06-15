import { useEffect, useState } from 'react';

function WeatherPanel() {
    const [weatherData, setWeatherData] = useState([])

    useEffect(() => {
        (async ()=> {
            // change city with filter
          let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Manhattan&units=metric&appid=`)
        //   let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${MYAPIKEY}`)
          let res = await req.json()
          console.log("Results => ", res)
          setWeatherData(res)
        })()
      }, [])
      console.log("Weather data", weatherData)
    return (
        <div>
            <h2>Today in {weatherData.name}</h2>
            <h3>Cloud: {weatherData.clouds.all}</h3>
            <h3>Max: {weatherData.main.temp_max}f</h3>
            <h3>Min: {weatherData.name}</h3>
            <h3>Humidity: {weatherData.main.humidity}%</h3>
        </div>
    )
}

export default WeatherPanel;