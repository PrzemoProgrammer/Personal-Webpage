import Navbar from "../../components/navbar/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./About.css";
import skillsInformation from "./skills";
import GamesVideo from "../../components/games_video/Games_Video";
import MyPhoto from "./assets/myPhoto.png";
import HeaderElement from "./assets/headerElement.png";
import headerElement2 from "./assets/headerElement2.png";
import describeElement from "./assets/describeElement.png";

function AddIcon({ icon }) {
  return <img src={icon} alt={icon} className="caption-icon" />;
}

function AboutPage() {
  const skills = skillsInformation;

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
            <br />
            I'm <span className="blue">Przemek Murawski</span>,
            <br />
            <span className="rank">
              Full Stack Web Game & Blockchain Developer
            </span>
          </h1>
        </div>
        <div className="element2">
          <AddIcon icon={headerElement2} />
        </div>
        <div className="photo">
          <AddIcon icon={MyPhoto} />
        </div>
      </div>
      <div className="descriptionPage">
        <div className="description">
          <h2>
            I have <span className="blue"> three years of experience</span> in
            game development. During my tenure, I have expertise in working with
            both <span className="blue">Centralized Databases (CDB)</span> and{" "}
            <span className="blue">Decentralized Databases (DDB)</span>
            .
            <br />
            <br />I think <span className="blue">Web 3.0 </span>is the future
            that will take over the internet, so I'm training my skills in{" "}
            <span className="blue">Blockchain technology</span> .
            <br />I created my own <span className="blue">NFT</span> and simple{" "}
            <span className="blue">NFT game</span>.
            <br />
            <br />
            Additionally, I have a background as a{" "}
            <span className="blue">graphic designer</span>, enhancing my skill
            set. I incorporate visually appealing elements into my game designs
            for immersive user experiences.
            <br />
            <br />
            As a child I played multiplayer games and was always curious about
            how they work. I was wondering why some people are good at cheating
            in games and how they both do it. When I delved into this topic, I
            wanted to create my own game and that's how my adventure began.
            <br />
            <br />
          </h2>
        </div>
      </div>
      <div className="skillsPage">
        <div className="skills">
          <h2>
            <br />
            <strong>I’m experienced in:</strong>
            <br />
            <br /> <em>Frontend:</em>
            <br />
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>
                  <i>{skill.name}</i>
                  <br />
                  {index === 6 && (
                    <span className="white">
                      {" "}
                      <br />
                      <em>Backend:</em>
                    </span>
                  )}

                  {index === 10 && (
                    <span className="white">
                      {" "}
                      <br />
                      <em>Blockchain:</em>
                    </span>
                  )}

                  {index === 13 && (
                    <span className="white">
                      {" "}
                      <br />
                      <em>Mobile application development:</em>
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <br />
            {skills.map((skill, index) => (
              <AddIcon key={index} icon={skill.icon} />
            ))}
            <br />I can also create a game for the{" "}
            <span className="blue">Android</span> platform using Apache Cordova.
          </h2>
        </div>
        <div className="describeElement">
          <AddIcon icon={describeElement} />
        </div>
      </div>
      <div className="offer">
        <h2>
          I'll fully project manage your brief from start to finish, providing a{" "}
          <span className="blue">high-quality product</span>. I optimize for
          efficient performance and a seamless user interface, while
          prioritizing <span className="blue">security</span> measures to
          safeguard your business data.
          <br />
          <br />
          Engage my services for a comprehensive game development solution
          tailored to your <span className="blue">specific requirements</span>.
          Together, we can create a product that exceeds your expectations,
          positioning your <span className="blue">business</span> for{" "}
          <span className="blue">success</span> in the competitive gaming
          industry.
        </h2>
        <br />
        <h1>
          <span className="blue">Game can include:</span>
        </h1>
        <h2>
          - animations
          <br />
          - sounds
          <br />
          - physics
          <br />
          - creative ideas
          <br />- and more, depending on your request
        </h2>
        <br />
        <br />
        <h1>
          <span className="blue">You can expect:</span>
          <br />
        </h1>
        <h2>
          - competitive pricing
          <br />
          - timely delivery
          <br />
          - smooth gameplay experience
          <br />
          - security measures
          <br />
          - comfortably
          <br />- easy modification of game data if needed
        </h2>
      </div>
      <div className="games-video">
        <GamesVideo />
      </div>
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
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
