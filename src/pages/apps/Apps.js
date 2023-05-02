import Navbar from "../../components/navbar/Navbar";
import WeatherApp from "../../components/weatherApp/Section3";
import "./Apps.css";

function AppsPage() {
  return (
    <div className="apps-container">
      <Navbar />
      <WeatherApp />
    </div>
  );
}

export default AppsPage;
