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

      <div className="itemBox">
        <img className="image" src={logo} alt="Logo" />

        {weatherData ? (
          <>
            <p className="card-text">{weatherData.name}</p>
            <p className="card-text">{weatherData.sys.country}</p>
            <p className="card-text">
              Temperatura:{" "}
              <span className="current-temp">{weatherData.main.temp}°C </span>
            </p>
          </>
        ) : (
          <>
            <p className="card-text">-</p>
            <p className="card-text">-</p>
            <p className="card-text">
              Temperatura: <span className="current-temp">--°C </span>
            </p>
          </>
        )}

        <button className="button">SEE MORE</button>
      </div>
    </section>
  );
}

export default Section3;
