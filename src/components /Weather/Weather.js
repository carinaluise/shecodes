import React, { useState } from "react";
import axios from "axios";

import Forecast from "../Forecast/Forecast";
import "./Weather.css";

const Weather = () => {
  const [city, setCity] = useState("Berlin");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(false);

  let display;

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    event.preventDefault();
    setError(false);
    setCity(event.target.value);
  }

  function search() {
    let apiID = "ca5af28648d86b7925348bb9fb85cd3a";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiID}&units=metric`;

    axios
      .get(url)
      .then((res) => {
        setWeather({
          loaded: true,
          city: res.data.name,
          coord: res.data.coord,
          temp: Math.round(res.data.main.temp),
          description: res.data.weather[0].description,
          humidity: res.data.main.humidity,
          wind: res.data.wind.speed,
          icon: res.data.weather[0].icon,
          date: new Date(res.data.dt * 1000),
        });
        setCity("");
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
        setError(true);
      });
  }

  if (weather.loaded) {
    display = (
      <Forecast
        city={weather.city}
        date={weather.date}
        temp={weather.temp}
        description={weather.description}
        humidity={weather.humidity}
        wind={weather.wind}
        icon={weather.icon}
        coord={weather.coord}
      />
    );
  }

  if (!weather.loaded) {
    search();
  }

  return (
    <div className="Weather">
      <div>
        <form onSubmit={handleSubmit}>
          {error && <p>Please enter a valid city</p>}
          <input onChange={handleChange} value={city} placeholder="City Name" />
          <button>Search</button>
        </form>
      </div>
      {display}
    </div>
  );
};

export default Weather;
