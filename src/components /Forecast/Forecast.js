import React from "react";

import "./Forecast.css";
import Temperature from "../Temperature/Temperature";

const Forecast = ({ temp, img, description, humidity, wind }) => {
  return (
    <div className="Forecast">
      <ul>
        <li>Description: {description}</li>
        <li>Humidity : {humidity}</li>
        <li>Wind : {wind}km/h</li>
      </ul>
      <img src={img} alt={description} />
      <Temperature temp={temp} />
    </div>
  );
};

export default Forecast;
