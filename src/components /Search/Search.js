import React, { useState } from "react";
import axios from "axios";

import Forecast from "../Forecast/Forecast";
import "./Search.css";

const Search = () => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;

    axios
      .get(url)
      .then((res) => {
        setResult({
          temp: Math.round(res.data.main.temp),
          description: res.data.weather[0].description,
          humidity: res.data.main.humidity,
          wind: res.data.wind.speed,
          img: `http://openweathermap.org/img/w/${res.data.weather[0].icon}.png`,
        });
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
        setError(true);
      });
  }

  function handleChange(event) {
    event.preventDefault();
    setResult(false);
    setError(false);
    setCity(event.target.value);
  }

  return (
    <div>
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={city} placeholder="City Name" />
          <button>Search</button>
        </form>
      </div>
      {result && (
        <Forecast
          city={city}
          temp={result.temp}
          description={result.description}
          humidity={result.humidity}
          wind={result.wind}
          img={result.img}
        />
      )}
      {error && <h2>Please type in a valid city</h2>}
    </div>
  );
};

export default Search;
