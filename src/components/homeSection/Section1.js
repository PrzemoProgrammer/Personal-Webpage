import React from "react";
import { Link } from "react-router-dom";
import "./Section1.css";
import homeImage from "./home-image.png";
import homeImageElement from "./home-image-element.png";

function Section1() {
  // const handleClick = () => {
  //   window.location.href = "/subpage";
  // };

  return (
    <section className="section1">
      <div className="homeImageElement">
        <img src={homeImageElement} alt="element" />
      </div>

      <div className="text">
        <h1>
          Hi, I'am <span className="name">Przemek</span>
        </h1>
        <h3 className="profession">Game Developer</h3>

        <Link to="/about" className="contactButton">
          About Me
        </Link>
      </div>

      <div className="homeImage">
        <img src={homeImage} alt="home" />
      </div>
    </section>
  );
}

export default Section1;
