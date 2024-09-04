import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = '18c87017bec305c23e3eb939958ec843';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
};

export default App;
