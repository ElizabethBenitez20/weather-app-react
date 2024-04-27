import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Weather App</h1>
    <App />
    <hr />
    <h3>
      This code was coded by{" "}
      <a
        href="https://github.com/ElizabethBenitez20"
        target="_blank"
        rel="noreferrer"
      >
        Elizabeth Benitez
      </a>
      , is{" "}
      <a
        href="https://github.com/ElizabethBenitez20/weather-app-react"
        target="_blank"
        rel="noreferrer"
      >
        open source
      </a>
      , and is{" "}
      <a
        href="https://eb-weather-app-react.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        hosted on Netlify
      </a>
      .
    </h3>
  </React.StrictMode>
);

reportWebVitals();
