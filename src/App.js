import React, { useState } from 'react';
import PostalInput from './components/PostalInput';
import WeatherData from './components/WeatherData';
import './App.css';

function App() {
    const [weatherData, setWeatherData] = useState()
    console.log(weatherData)
    return (
        <div className="App">
            <PostalInput
                weatherData={weatherData}
                setWeatherData={setWeatherData}
            />
            { weatherData && 
                <WeatherData 
                    weatherData={weatherData}
                />
            }
        </div>
    );
}

export default App;
