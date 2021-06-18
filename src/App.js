import React, { useState } from 'react';
import PostalInput from './components/PostalInput';
import WeatherData from './components/WeatherData';
import MoodInput from './components/MoodInput';
import './App.css';

function App() {
    const [weatherData, setWeatherData] = useState()
    return (
        <div className="App">
            <PostalInput
                weatherData={weatherData}
                setWeatherData={setWeatherData}
            />
            { weatherData && 
                <>
                    <WeatherData 
                        weatherData={weatherData}
                    />
                    <MoodInput />
                </>
            }
        </div>
    );
}

export default App;
