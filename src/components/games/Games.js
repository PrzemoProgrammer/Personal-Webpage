import { useState } from "react";
import { Link } from "react-router-dom";
import RiskyJumperIcon from "./assets/riskyJumperIcon.png";
import CircleRiskIcon from "./assets/circleRiskIcon.png";
import ComplexityJungleIcon from "./assets/complexityJungleIcon.png";
import ManualSwampIcon from "./assets/manualSwampIcon.png";
import ScalabilityMountainIcon from "./assets/scalabilityMountainIcon.png";
import MathRaceIcon from "./assets/mathRaceIcon.png";
import VocabularyRaceIcon from "./assets/vocabularyRaceIcon.png";

import "./Games.css";

const riskyJumperAppStoreLink =
  "https://play.google.com/store/apps/details?id=com.riskyjumper.app";

const circleRiskAppStoreLink =
  "https://play.google.com/store/apps/details?id=com.pipcompany.circlerisk";

const cloudQuest = "https://cloud-quest.io/";

function AddGame({ type, link, icon, title, description, onClick }) {
  const handleClick = typeof onClick === "function" ? onClick : () => {};
  const linkProps = link && link !== "none" ? { to: link } : {};

  return (
    <Link className="link" {...linkProps}>
      <div className={type} onClick={handleClick}>
        <img className="game-icon" src={icon} alt={title} />

        <h1 className="title">{title}</h1>
        <h3 className="description">{description}</h3>
      </div>
    </Link>
  );
}

function GamesPage() {
  const [showAllGames, setShowAllGames] = useState(false);

  const toggleShowAllGames = () => {
    setShowAllGames((prevState) => !prevState);
  };

  return (
    <div className="games-page">
      <div className="games-list">
        <h1 className="page-title">Games</h1>
        <div className="browser">
          <h1 className="browser-title">For Browser</h1>
          <div className="games-container">
            <AddGame
              type="web-game"
              link="none"
              icon={ComplexityJungleIcon}
              title="Complexity Jungle"
              description="You have 60 seconds to get out of the maze without getting killed"
              onClick={() => window.open(cloudQuest, "_blank")}
            />

            <AddGame
              type="web-game"
              link="none"
              icon={ManualSwampIcon}
              title="Manual Swamp"
              description="You have to last 60 seconds jumping over garbage"
              onClick={() => window.open(cloudQuest, "_blank")}
            />

            <AddGame
              type="web-game"
              link="none"
              icon={ScalabilityMountainIcon}
              title="Scalability Mountain"
              description="You have 90 seconds to get to the top of the mountain as quickly as possible"
              onClick={() => window.open(cloudQuest, "_blank")}
            />

            <AddGame
              type="web-game"
              link="/Error_500"
              icon={VocabularyRaceIcon}
              title="Vocabulary Race"
              description="Choose the correct spelling of the word and win the race"
              onClick="null"
            />

            <AddGame
              type="web-game"
              link="/Error_500"
              icon={MathRaceIcon}
              title="Math Race"
              description="Answer math correctly and overtake cars to earn points"
              onClick="null"
            />
          </div>
        </div>

        {showAllGames && (
          <>
            {
              <div className="android">
                <h1 className="android-title">For Android</h1>
                <div className="games-container">
                  <AddGame
                    type="android-game"
                    link="none"
                    icon={RiskyJumperIcon}
                    title="Risky Jumper"
                    description="Simple one tap game with ranking online"
                    onClick={() =>
                      window.open(riskyJumperAppStoreLink, "_blank")
                    }
                  />

                  <AddGame
                    type="android-game"
                    link="none"
                    icon={CircleRiskIcon}
                    title="Circle Risk"
                    description="Simple one tap game with ranking online"
                    onClick={() =>
                      window.open(circleRiskAppStoreLink, "_blank")
                    }
                  />
                </div>
              </div>
            }
          </>
        )}

        <button className="see-more-button" onClick={toggleShowAllGames}>
          {showAllGames ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
}

export default GamesPage;
