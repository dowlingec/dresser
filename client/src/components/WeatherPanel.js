import { useEffect, useState } from 'react';

function WeatherPanel() {
    const [weatherData, setWeatherData] = useState([])

    useEffect(() => {
        (async ()=> {
            // change city with filter
          let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Manhattan&units=imperial&appid=${process.env.REACT_APP_API_KEY_PRIMARY}`)

        //   let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${MYAPIKEY}`)
          let res = await req.json()
          console.log("Results => ", res)
          setWeatherData(res)
        })()
      }, [])
      console.log("Weather data", weatherData)
    return (
        <div className="weather-panel">
            <h2>Today in 
                {/* {weatherData.name} */}
            </h2>
            <h3>
                <i class="fa-solid fa-cloud"></i>
                {/* {weatherData.clouds.all} */}
            </h3>
            <h3>
                <i class="fa-solid fa-temperature-high"></i>
                {/* {weatherData.main.temp_max}f */}
            </h3>
            <h3>
                <i class="fa-solid fa-temperature-low"></i>
            {/* {weatherData.name} */}
            </h3>
            <h3><i class="fa-solid fa-droplet"></i>
                {/* {weatherData.main.humidity}% */}
            </h3>
            <h3><i class="fa-solid fa-umbrella"></i></h3>
            <input type="text" placeholder="Change city..."/>
        </div>
    )
}

export default WeatherPanel;