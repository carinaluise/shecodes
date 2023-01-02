import React from "react";

import "./Day.css";
import Temperature from "../Temperature/Temperature";
import WeatherIcon from "../Icon/Icon";

const Day = ({ data, icon }) => {
  return (
    <div className="Day">
      <h4>Thu</h4>
      <WeatherIcon size={40} icon={icon} />
      <Temperature small={true} temp={Math.round(data.temp.max)} />
      <Temperature small={true} temp={Math.round(data.temp.min)} />

      {/* <span>{Math.round(data.temp.max)}°</span>
      <span>|</span>
      <span>{Math.round(data.temp.min)}°</span> */}
    </div>
  );
};

export default Day;
