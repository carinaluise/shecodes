import React from "react";

import "./DateTime.css";

const DateTime = ({ date }) => {
  return (
    <div className="DateTime">
      <p className="DateTime_Date">{date.toDateString()}</p>
      <p className="DateTime_Time"> {date.toLocaleTimeString()}</p>
    </div>
  );
};

export default DateTime;
