import React, { useState } from "react";
import "./Section3.css";
import logo from "./assets/city-weather.png";

const apiKey = "77fdfb2aa595439106ecbf9c3ac69f7a";

function Section3() {
  const [weatherData, setWeatherData] = useState(null);

  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      const city = event.target.value;
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        if (!response.ok) {
          throw new Error(response.status);
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.log("Error fetching weather data:", error);
      }
    }
  };

  return (
    <section className="section3">
      <h1 className="title"> WEATHER APP</h1>

      <input
        type="text"
        className="search"
        placeholder="Your location..."
        onKeyPress={handleKeyPress}
      />
      <div className="logo">
        <img className="image" src={logo} alt="Logo" />
      </div>
      <div className="itemBox">
        {weatherData ? (
          <>
            <p className="card-text">
              <span className="current-temp">{weatherData.name}</span>
            </p>
            <p className="card-text">
              <span className="current-temp">{weatherData.sys.country}</span>
            </p>
            <p className="card-text">
              Temperature:{" "}
              <span className="current-temp">{weatherData.main.temp}°C </span>
            </p>
            <p className="card-text">
              Max Temperature:{" "}
              <span className="current-temp">
                {weatherData.main.temp_max}°C{" "}
              </span>
            </p>
            <p className="card-text">
              Min Temperature:{" "}
              <span className="current-temp">
                {weatherData.main.temp_min}°C{" "}
              </span>
            </p>

            <p className="card-text">
              Humidity:{" "}
              <span className="current-temp">
                {weatherData.main.humidity}%{" "}
              </span>
            </p>

            <p className="card-text">
              Wind speed:{" "}
              <span className="current-temp">
                {(() => {
                  const windSpeedInMiles = weatherData.wind.speed;
                  const windSpeedInKm = windSpeedInMiles * 1.60934;
                  return `${windSpeedInKm.toFixed(2)} km/h`;
                })()}
              </span>
            </p>

            <p className="card-text">
              Cloudiness:{" "}
              <span className="current-temp">{weatherData.clouds.all}% </span>
            </p>

            <p className="card-text">
              Sunset Time:{" "}
              <span className="current-temp">
                {new Date(weatherData.sys.sunset * 1000).toUTCString()}
              </span>
            </p>

            <p className="card-text">
              Sunrise Time:{" "}
              <span className="current-temp">
                {new Date(weatherData.sys.sunrise * 1000).toUTCString()}
              </span>
            </p>
          </>
        ) : (
          <>
            <p className="card-text">-</p>
            <p className="card-text">-</p>
            <p className="card-text">
              Temperature: <span className="current-temp">--°C </span>
            </p>
          </>
        )}

        {/* <button className="button">SEE MORE</button> */}
      </div>
    </section>
  );
}

export default Section3;
