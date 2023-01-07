import React from "react";

import "./Forecast.css";
import Temperature from "../Temperature/Temperature";
import Week from "../Week/Week";
import WeatherIcon from "../Icon/Icon";
import DateTime from "../DateTime/DateTime";

const Forecast = ({
  temp,
  icon,
  description,
  humidity,
  wind,
  coord,
  city,
  date,
}) => {
  return (
    <div className="Forecast">
      <div className="Forecast__Information">
        <div className="Forecast__Location">
          <h2>{city}</h2>
          <DateTime date={date} />
        </div>
        <ul>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}</li>
          <li>Wind: {wind}km/h</li>
        </ul>
        <Temperature temp={temp} />
        <WeatherIcon icon={icon} size={130} alt={description} />
      </div>
      <Week coord={coord} icon={icon} />
    </div>
  );
};

export default Forecast;
