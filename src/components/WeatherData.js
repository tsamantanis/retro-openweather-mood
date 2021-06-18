import './WeatherData.css';

function WeatherData({ weatherData }) {
    return (
        <div className="weather-card">
            <div className="weather-main">
                <span className="weather-description">{ weatherData.weather[0].description }</span>
                <span className="weather-temp">{ weatherData.main.temp }°</span>
            </div>
            <div className="weather-details">
                <span className="date">{ new Date().toDateString() }</span>
                <span className="city-name">{ weatherData.name }</span>
            </div>
            <img 
                width="160px"
                height="160px"
                src={`http://openweathermap.org/img/wn/${ weatherData.weather[0].icon }@2x.png`} 
                alt="weather icon" 
            />
        </div>
    );
}

export default WeatherData;
