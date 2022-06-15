import { useEffect, useState } from 'react';

function WeatherPanel() {
    const [weatherData, setWeatherData] = useState([])

    useEffect(() => {
        (async ()=> {
            // change city with filter
          let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Manhattan&units=metric&appid=${MYAPIKEY}`)
        //   let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${MYAPIKEY}`)
          let res = await req.json()
          console.log("Results => ", res)
          setWeatherData(res)
        })()
      }, [])
      console.log("Weather data", weatherData)
    return (
        <div></div>
    )
}

export default WeatherPanel;