import React from "react";
import Forecast from "../Forecast/Forecast";

import "./Info.css";

const Info = () => {
  return (
    <section className="Info">
      <h1>New York</h1>
      <ul>
        <li>Last updated: Tuesday 10:00</li>
        <li>Cloudy</li>
        <li>Humidity: 80%</li>
        <li>Wind: 10 km/h</li>
      </ul>
      <Forecast />
    </section>
  );
};

export default Info;
