import React, { useEffect, useState } from "react";

import "./Temperature.css";

const Temperature = ({ temp, small }) => {
  const [convertedTemp, setConvertedTemp] = useState(temp);
  // const [smallTemp, setSmallTemp] = useState(temp);
  const [metric, setMetric] = useState("C");

  // useEffect(() => {
  //   if (metric === "C") {
  //     setSmallTemp(temp);
  //   }
  //   if (metric === "F") {
  //     setSmallTemp(14);
  //   }
  // }, [metric, temp]);

  function handleFahrenheit(e) {
    e.preventDefault();
    setConvertedTemp(Math.round(temp * 1.8 + 32));
    setMetric("F");
  }

  function handleCelcius(e) {
    e.preventDefault();
    setConvertedTemp(temp);
    setMetric("C");
  }
  return (
    <div className="Temp">
      {!small && (
        <div>
          <span className="Temp_Value">{convertedTemp}</span>
          <div className="Temp_Metric">
            <button onClick={handleCelcius}>°C</button>
            <span>|</span>
            <button onClick={handleFahrenheit}>°F</button>
          </div>
        </div>
      )}
      {small && (
        <div>
          <span>
            {}°{metric}
          </span>
        </div>
      )}
    </div>
  );
};

export default Temperature;
