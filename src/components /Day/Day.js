import React from "react";

import "./Day.css";
import Temperature from "../Temperature/Temperature";
import WeatherIcon from "../Icon/Icon";

const Day = ({ data, icon }) => {
  const date = new Date(data.dt * 1000);
  return (
    <div className="Day">
      <h4 className="Day__Name">{date.toDateString().slice(0, 3)}</h4>
      <WeatherIcon size={40} icon={icon} />
      <div className="Day__MinMax">
        <Temperature small={true} temp={Math.round(data.temp.max)} />
        <span className="MinMax__Seperator">|</span>
        <Temperature small={true} temp={Math.round(data.temp.min)} />
      </div>
    </div>
  );
};

export default Day;
