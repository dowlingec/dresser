import { useEffect } from 'react';

function WeatherPanel({ weatherData, setWeatherData }) {
    // const [weatherData, setWeatherData] = useState([])
    // Moving state to access in new outfit form

    useEffect(() => {
        (async ()=> {
            
            let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Manhattan&units=imperial&appid=${process.env.REACT_APP_API_KEY_PRIMARY}`)
            // change city with filter
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
                <i class="fa-solid fa-cloud fa-6x"></i>
                {/* {weatherData.clouds.all} */}
            </h3>
            <h3>
                <i class="fa-solid fa-temperature-high fa-6x"></i>
                {/* {weatherData.main.temp_max}f */}
            </h3>
            <h3><i class="fa-solid fa-temperature-low fa-6x"></i>
            {/* {weatherData.main.temp_min}f */}
            </h3>
            <h3><i class="fa-solid fa-droplet fa-6x"></i>
            {/* {weatherData.main.humidity}% */}
            </h3>
            <h3><i class="fa-solid fa-umbrella fa-6x" alt="RAIN"></i></h3>
            <input type="text" placeholder="Change city..."/>
        </div>
    )
}

export default WeatherPanel;