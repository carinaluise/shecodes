import React from "react";

import "./Search.css";

const Search = () => {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className="Search">
      <input placeholder="Type a city..." />
      <button onClick={refreshPage}>Search</button>
    </div>
  );
};

export default Search;
