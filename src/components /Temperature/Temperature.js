import React, { useState } from "react";

import "./Temperature.css";

const Temperature = ({ temp }) => {
  const [convertedTemp, setConvertedTemp] = useState(temp);

  function handleFahrenheit(e) {
    e.preventDefault();
    setConvertedTemp(Math.round(temp * 1.8 + 32));
  }

  function handleCelcius(e) {
    e.preventDefault();
    setConvertedTemp(temp);
  }
  return (
    <div className="Temp">
      <span className="Temp_Value">{convertedTemp}</span>
      <div className="Temp_Metric">
        <button onClick={handleCelcius}>°C</button>
        <span>|</span>
        <button onClick={handleFahrenheit}>°F</button>
      </div>
    </div>
  );
};

export default Temperature;
