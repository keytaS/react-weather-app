import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <ForecastDay data={forecast[1]} weather={forecast[1].weather[0]} />
          </div>
          <div className="col">
            <ForecastDay data={forecast[2]} weather={forecast[2].weather[0]} />
          </div>
          <div className="col">
            <ForecastDay data={forecast[3]} weather={forecast[3].weather[0]} />
          </div>
          <div className="col">
            <ForecastDay data={forecast[4]} weather={forecast[4].weather[0]} />
          </div>
          <div className="col">
            <ForecastDay data={forecast[5]} weather={forecast[5].weather[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "c52ac46adf5f0f13abc3cf415215fbaf";
    const lon = props.coordinates.lon;
    const lat = props.coordinates.lat;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
