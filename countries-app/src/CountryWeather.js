import { useState, useEffect } from "react";
import {getCountryWeather} from './services/WeatherService.js'
import './CountryWeather.css'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const CountryWeather = ({city}) => {
    const [weather, setWeather] = useState()

    useEffect(() => {
        getCountryWeather(city, API_KEY).then(weather => {
            setWeather(weather)
        });
      }, [city])

    return (
        <div> 
            {weather !== undefined ? 
            <div>
                <h2>Weather in {city}</h2>
                <p>local time: {weather.location.localtime}</p>
                <p>temperature: {weather.current.temperature}º C</p>
                <img alt={weather.current.weather_descriptions} title={weather.current.weather_descriptions} className='weather' src={weather.current.weather_icons} />
                <p>weather description: {weather.current.weather_descriptions}</p>
            </div>
            : '' }
        </div>
    )
}

export default CountryWeather