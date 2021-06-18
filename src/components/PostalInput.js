import React, { useState } from 'react';
import './PostalInput.css';

function PostalInput({ weatherData, setWeatherData }) {
    const [postal, setPostal] = useState('')

    console.log(postal.length === 5)
    console.log(postal.match('/^\d+$/'))
    console.log(!weatherData)
    console.log('\n')
    if (postal.length === 5 && postal.match(/^\d+$/) && !weatherData) {
        fetchWeather()        
    }

    async function fetchWeather() {
    const units = "metric"
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${postal},us&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=${units}`
        try {
            const res = await fetch(url)
            console.log(res)
            setWeatherData(res.json())
        } catch (error) {
            setWeatherData(null)
            console.log(error.message)
        }
    }
    return (
        <input 
            placeholder="enter zip code"
            type="text" 
            minLength="5" 
            maxLength="5" 
            value={ postal } 
            onChange={ (e) => setPostal(e.target.value) }
        />
    );
}

export default PostalInput;
