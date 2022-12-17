import React, { useState } from "react";

import "./Forecast.css";

const Forecast = ({ city, temp, img, description, humidity, wind }) => {
  const [temperature, setTemp] = useState(temp);

  function handleFahrenheit(e) {
    e.preventDefault();
    setTemp(Math.round(temp * 1.8 + 32));
  }

  function handleCelcius(e) {
    e.preventDefault();
    setTemp(temp);
  }

  return (
    <div className="Forecast">
      <h2>{city}</h2>
      <section className="Info">
        <ul>
          <li>{description}</li>
          <li>humidity : {humidity}</li>
          <li>wind : {wind}km/h</li>
        </ul>
      </section>
      <img src={img} alt="weather-icon" />
      <div className="Temp">
        <span className="Temp_Value">{temperature}</span>
        <div className="Deg_Options">
          <button onClick={handleCelcius}>°C</button>
          <span>|</span>
          <button onClick={handleFahrenheit}>°F</button>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
