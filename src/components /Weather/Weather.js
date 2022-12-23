import React, { useState } from "react";
import axios from "axios";

import Forecast from "../Forecast/Forecast";
import DateTime from "../DateTime/DateTime";
import "./Weather.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    event.preventDefault();
    setWeather(false);
    setError(false);
    setCity(event.target.value);
  }

  function search() {
    let apiID = "3a94f3778290bfeee61278505dbbe51d";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiID}&units=metric`;

    axios
      .get(url)
      .then((res) => {
        setWeather({
          loaded: true,
          temp: Math.round(res.data.main.temp),
          description: res.data.weather[0].description,
          humidity: res.data.main.humidity,
          wind: res.data.wind.speed,
          img: `http://openweathermap.org/img/w/${res.data.weather[0].icon}.png`,
          date: new Date(res.data.dt * 1000),
        });
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
        setError(true);
      });
  }

  return (
    <div className="Weather">
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={city} placeholder="City Name" />
          <button>Search</button>
        </form>
      </div>
      {weather.loaded && (
        <div>
          <h2>{city}</h2>
          <DateTime date={weather.date} />
          <Forecast
            temp={weather.temp}
            description={weather.description}
            humidity={weather.humidity}
            wind={weather.wind}
            img={weather.img}
          />
        </div>
      )}
      {error && <h2>Please type in a valid city</h2>}
    </div>
  );
};

export default Weather;
