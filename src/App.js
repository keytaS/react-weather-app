import React from "react";
import Weather from "./Weather";
import "./App.css";
import clouds from "./assets/clouds.mp4";

export default function App() {
  return (
    <div className="background">
      <div className="overlay">
        <video loop autoPlay muted id="bg-video" playbackRate="0.2">
          <source src={clouds} autoPlay loop muted />
        </video>
      </div>
      <div className="App">
        <div className="container">
          <Weather defaultCity="Kyiv" />

          <footer>
            This project was coded by{" "}
            <a
              href="https://main--jolly-druid-2a995a.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kateryna Saltykova
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/keytaS/react-weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://superb-hotteok-302977.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
