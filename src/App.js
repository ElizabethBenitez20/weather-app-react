import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  let [city, setCity] = useState("");
  let [data, setData] = useState(false);
  let [weather, setWeather] = useState({});

  function ShowWeather(response) {
    setData(true);
    setWeather({
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function searchCity(event) {
    event.preventDefault();
    let apiKey = "3dce9b1c66837262a25b3f448d354a76";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(ShowWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="form">
      <form onSubmit={searchCity}>
        <input
          className="search-city"
          type="search"
          placeholder="Search a city..."
          autoComplete="off"
          onChange={updateCity}
        />
        <input className="search-button" type="submit" value="Search" />
      </form>
    </div>
  );

  if (data) {
    return (
      <div className="container">
        {form}
        <h2>{weather.name}</h2>
        <ul>
          <li>Temperature: {Math.round(weather.temperature)} °C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity} %</li>
          <li>Wind: {weather.wind} km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
