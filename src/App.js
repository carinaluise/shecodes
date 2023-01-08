import React from "react";

import "./App.css";
import Weather from "./components /Weather/Weather";

function App() {
  return (
    <div className="App">
      <main>
        <Weather />
      </main>
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
