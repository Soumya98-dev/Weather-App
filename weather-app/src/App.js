import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import CurrentWeather from "./Components/CurrentWeather/CurrentWeather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import Forecast from "./Components/ForecastWeather/Forecast";

function App() {
  // *** INITIALIZING STATE FOR THE SEARCH INPUT
  const [search, setSearch] = React.useState(null);
  // *** INITIALIZING STATES FOR THE WEATHER RESPONSE
  const [weather, setWeather] = React.useState(null);
  // *** INITIALIZING STATE FOR FORECAST RESPONSE
  const [forecast, setForecast] = React.useState(null);

  const onSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        // *** SETTING THE STATE OF WEATHER & FORECAST
        setWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  // console.log(weather);
  // console.log(forecast);

  return (
    <div className="container">
      <SearchBar
        search={search}
        setSearch={setSearch}
        onSearchChange={onSearchChange}
      />
      {weather && <CurrentWeather data={weather} />}
      {weather && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
