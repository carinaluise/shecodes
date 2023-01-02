import React from "react";

import "./Forecast.css";
import Temperature from "../Temperature/Temperature";
import Week from "../Week/Week";
import WeatherIcon from "../Icon/Icon";

const Forecast = ({ temp, icon, description, humidity, wind, coord }) => {
  return (
    <div className="Forecast">
      <ul>
        <li>Description: {description}</li>
        <li>Humidity: {humidity}</li>
        <li>Wind: {wind}km/h</li>
      </ul>
      <WeatherIcon icon={icon} alt={description} />
      <Temperature temp={temp} />
      <Week coord={coord} icon={icon} />
    </div>
  );
};

export default Forecast;
