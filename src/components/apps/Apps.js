import { Link } from "react-router-dom";
import WeatherAppIcon from "./assets/weatherAppIcon.png";
import "./Apps.css";

// const cloudQuest = "https://cloud-quest.io/";

function AddGame({ type, link, icon, title, description, onClick }) {
  const handleClick = typeof onClick === "function" ? onClick : () => {};
  const linkProps = link && link !== "none" ? { to: link } : {};

  return (
    <Link className="link" {...linkProps}>
      <div className={type} onClick={handleClick}>
        <img className="app-icon" src={icon} alt={title} />

        <h1 className="title">{title}</h1>
        <h3 className="description">{description}</h3>
      </div>
    </Link>
  );
}

function Apps() {
  return (
    <div className="apps-page">
      <div className="apps-list">
        <h1 className="page-title">Apps</h1>
        <div className="apps-container">
          <AddGame
            type="web-app"
            link="/WeatherApp"
            icon={WeatherAppIcon}
            title="Weather"
            description="Check the weather in your city"
            onClick="null"
          />
        </div>
      </div>
    </div>
  );
}

export default Apps;
