import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  const maxTemp = Math.round(props.data.temp.max);
  const minTemp = Math.round(props.data.temp.min);

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="ForecastDay">{day()} </div>
      <WeatherIcon code={props.data.weather[0].icon} size={34} />
      <div className="ForecastTemps">
        <span className="TempMax">{maxTemp}°</span>
        <span className="TempMin">{minTemp}°</span>
      </div>
    </div>
  );
}
