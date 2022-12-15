import React from "react";

import "./Forecast.css";

const Forecast = () => {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className="Forecast">
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt="weather-icon"
      />
      <div className="Temp">
        <span className="Temp_Value">19</span>
        <div className="Deg_Options">
          <button onClick={refreshPage}>°C</button>
          <span>|</span>
          <button onClick={refreshPage}>°F</button>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
