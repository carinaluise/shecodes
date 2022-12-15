import React from "react";
import "./App.css";

import Search from "./components /Search/Search";
import Info from "./components /Info/Info";

function App() {
  return (
    <div className="App">
      <main>
        <article>
          <Search />
          <Info />
        </article>
      </main>
    </div>
  );
}

export default App;
