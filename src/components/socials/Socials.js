import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Socials.css";

function Socials() {
  return (
    <section className="socials-container">
      <div className="contactAndMedia">
        <h2>
          <span className="blue">CONTACT</span>
          <br />
          <br />
        </h2>
        <h2 className="email">
          przemek.murawski.developer@gmail.com
          <br />
        </h2>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/przemek.murawski.7"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/muran_98"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.github.com/PrzemoProgrammer"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://www.linkedin.com/in/przemek-murawski-muran/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Socials;
