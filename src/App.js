import React from "react";
import "./App.css";

import Search from "./components /Search/Search";

function App() {
  return (
    <div>
      <section className="App">
        <h1>Weather App</h1>
        <Search />
      </section>
      <footer>
        <p>
          This is an opensource project, find repo here: <br />
          <a
            href="https://github.com/carinaluise/shecodes"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            https://github.com/carinaluise/shecodes
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
