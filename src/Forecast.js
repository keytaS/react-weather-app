import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Thu </div>
          <WeatherIcon code="01d" size={34} />
          <div className="ForecastTemps">
            <span className="TempMax">19</span>
            <span className="TempMin">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
