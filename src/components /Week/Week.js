import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Week.css";
import Day from "../Day/Day";

const Week = ({ coord, icon }) => {
  const [weekData, setWeekData] = useState();

  useEffect(() => {
    let apiID = "ca5af28648d86b7925348bb9fb85cd3a";
    let lat = coord.lat;
    let lon = coord.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiID}&units=metric`;

    axios
      .get(url)
      .then((res) => {
        setWeekData({
          daily: [...res.data.daily],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(weekData);
  return (
    <div className="Week">
      {weekData &&
        weekData.daily.map((day) => {
          return <Day data={day} icon={icon} />;
        })}
    </div>
  );
};

export default Week;
