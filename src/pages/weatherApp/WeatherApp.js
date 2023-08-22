import Navbar from "../../components/navbar/Navbar";
import Weather from "../../components/weather/Section3";
import "./WeatherApp.css";

function WeatherApp() {
  return (
    <div className="apps-container">
      <Navbar />
      <Weather />
    </div>
  );
}

export default WeatherApp;
