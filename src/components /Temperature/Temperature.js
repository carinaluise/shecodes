import React from "react";

import "./Temperature.css";

const Temperature = ({ temp, small }) => {
  return (
    <div className={small ? "Temp--small" : "Temp"}>
      <span className="Temp_Value">{temp}</span>
      <span>°</span>
      {!small && <span>°C</span>}
    </div>
  );
};

export default Temperature;
