import { useEffect, useState } from 'react';

function WeatherPanel({ weatherData, setWeatherData }) {
    const [city, setCity] = useState("Manhattan")
    const [isLoaded, setIsLoaded] = useState(false)
    // const noWhitespace = str.replace(/\s/g, '')
    // const [cityString, setCityString] = useState("")
    useEffect(() => {
        (async ()=> {
            setIsLoaded(false)
            // let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_API_KEY_PRIMARY}`)
            // change city with filter
              let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_API_KEY_SECONDARY}`)
            let res = await req.json()
            console.log("Results => ", res)
            setWeatherData(res)
            setIsLoaded(true)
        })()
    }, [city])

    // const handleCity = async (e) => {
    //     e.preventDefault()
    //     let toParse = cityString.replace(/\s/g, '')
    //     setCity(toParse)
    //     console.log("I'm workin maybeee", city)
    // }
    
    // const handleCityChange = async (e) => {
    //     e.preventDefault()
    //     console.log(e.target.value)
    //     setCityString(e.target.value)
    // }
    if (isLoaded) {
        return (
            <div className="weather-panel">
                <h2>{weatherData.name}</h2>
                <i class="fa-solid fa-cloud fa-5x"></i>
                <h3 id="cloud-data">{weatherData.clouds.all}</h3>
                <i class="fa-solid fa-temperature-high fa-5x"></i>
                <h3 id="max-temp"> {weatherData.main.temp_max}f </h3>
                <i class="fa-solid fa-temperature-low fa-5x"></i>
                <h3>
                {weatherData.main.temp_min}f
                </h3>
                    <i class="fa-solid fa-droplet fa-5x"></i>
                <h3>
                    {weatherData.main.humidity}%
                </h3>

                <div class="city-select">
                    <form id="city-menu">
                        <label for="cities">Change city...</label>
                        <select id="cities" name="cities" onChange={(e) => {
                            setCity(e.target.value)
                        }}>
                        <option value="Berlin">Berlin, DE</option>
                        <option value="Greenwich">Greenwich, UK</option>
                        <option value="Mahattan" selected> Manhattan, NY, US</option>
                        </select>
                    </form>
                </div>
            </div>)

    } else {
        return(
        <div className="weather-panel">
        <h2>Loading today's weather</h2>
        </div>)
    }
}

export default WeatherPanel;