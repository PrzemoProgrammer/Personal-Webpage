import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GamesVideo from "../../components/games_video/Games_Video";
import MyPhoto from "./assets/myPhoto.png";

import HeaderElement from "./assets/headerElement.png";
import headerElement2 from "./assets/headerElement2.png";

import TypeScriptIcon from "./assets/typeScriptIcon.png";
import Game2DIcon from "./assets/game2DIcon.png";
import AndroidIcon from "./assets/androidIcon.png";
import HTML5Icon from "./assets/HTML5Icon.png";
import JavaScriptIcon from "./assets/javaScriptIcon.png";
import MongoDBIcon from "./assets/mongoDBIcon.png";
import NodeIcon from "./assets/nodeIcon.png";
import ReactIcon from "./assets/reactIcon.png";
import Phaser3Icon from "./assets/phaser3Icon.png";
import CordovaIcon from "./assets/cordovaIcon.png";
import CSS3Icon from "./assets/CSS3Icon.png";

import {
  faInstagram,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./About.css";

function AddIcon({ icon }) {
  return <img src={icon} alt={icon} className="caption-icon" />;
}

function AboutPage() {
  return (
    <div className="about-page">
      <Navbar />
      <div className="header">
        <div className="element1">
          <AddIcon icon={HeaderElement} />
        </div>

        <div className="entry">
          <h1>
            Hi There,
            <br></br>
            I'm <span className="blue">Przemek Murawski</span>,<br></br>
            <span className="rank">Full Stack Web Game Developer</span>
          </h1>
        </div>

        <div className="element2">
          <AddIcon icon={headerElement2} />
        </div>

        <div className="photo">
          <AddIcon icon={MyPhoto} />
        </div>
      </div>

      <div className="description">
        <h2>
          I have been creating games for <span className="blue">two years</span>
          . I created games for small and medium sized businesses.
          <br></br>I also had a period when I was a{" "}
          <span className="blue">graphic designer</span>.<br></br>
          I’ll fully project manage your brief from start to finish.<br></br>I
          provide a <span className="blue">high-quality product</span> that will
          help take your <span className="blue">business</span> to the next
          level.<br></br>
          Properly <span className="blue">optimized</span> and{" "}
          <span className="blue">secured</span>.
        </h2>
      </div>

      <div className="skills">
        <h2>
          <br></br>
          <strong>I’m experienced in:</strong>
          <br></br>
          <li>
            <i>HTML5</i>
          </li>
          <li>
            <i>CSS3</i>
          </li>
          <li>
            <i>JavaScript</i>
          </li>
          <li>
            <i>TypeScript</i>
          </li>
          <li>
            <i>Phaser3</i>
          </li>
          <li>
            <i>Cordova</i>
          </li>
          <li>
            <i>React</i>
          </li>
          <li>
            <i>Node</i>
          </li>
          <li>
            <i>MongoDB</i>
          </li>
          <li>
            <i>Games 2D</i>
          </li>
          <br></br>
          <AddIcon icon={HTML5Icon} />
          <AddIcon icon={CSS3Icon} />
          <AddIcon icon={JavaScriptIcon} />
          <AddIcon icon={TypeScriptIcon} />
          <AddIcon icon={ReactIcon} />
          <AddIcon icon={NodeIcon} />
          <AddIcon icon={MongoDBIcon} />
          <AddIcon icon={Phaser3Icon} />
          <AddIcon icon={CordovaIcon} />
          <AddIcon icon={AndroidIcon} />
          <AddIcon icon={Game2DIcon} />
          <br></br>I can also create a game for the{" "}
          <span className="blue">Android</span> platform.
        </h2>
      </div>

      <div className="offer">
        <h1>
          <span className="blue">Game can include:</span>
        </h1>
        <h2>
          - animations<br></br>- sounds<br></br>- physics<br></br>- creative
          ideas<br></br>- and more, depending on your request
        </h2>
        <br></br>
        <br></br>

        <h1>
          <span className="blue">What do you get?</span>
          <br></br>
        </h1>
        <h2>
          - the right price<br></br>- fast delivery time<br></br>- smoothness of
          the game<br></br>- safe game<br></br>- comfortably
          <br></br>- possibility of simple modification of game data
        </h2>
      </div>

      <div className="games-video">
        <GamesVideo />
      </div>

      <div className="contactAndMedia">
        <h2>
          <span className="blue">CONTACT</span>
          <br></br>
          <br></br>
        </h2>
        <h2 className="email">
          przemek.murawski.developer@gmail.com
          <br></br>
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
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
