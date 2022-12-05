import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("metric");
  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }
  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("metric");
  }
  if (unit === "metric") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertToFarenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    const fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelcius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
