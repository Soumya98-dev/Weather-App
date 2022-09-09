import React from "react";
import "./CurrentWeather.css";

function CurrentWeather({ data }) {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
      </div>
      <div className="bottom">
        <div>
          <p className="temperature">{(data.main.temp - 273.15).toFixed(2)}°C</p>
        </div>
        <div>
          <div className="parameter-row">
            <span>Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">{(data.main.feels_like - 273.15).toFixed(2)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed}m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{(data.main.pressure * 0.01).toFixed(2)} hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
