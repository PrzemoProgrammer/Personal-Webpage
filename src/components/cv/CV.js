import React, { useState } from "react";
import CvIcon from "./assets/cvIcon.png";
import CVProgramist from "./assets/CVProgramist.png";

import "./CV.css";

function CV() {
  const [showImage, setShowImage] = useState(false);

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <div className="cv-container">
      <div className="title">
        <p className="nft-title">CV</p>
      </div>

      <div className="button">
        <button onClick={toggleImage} className="toggle-button">
          Show
        </button>
      </div>

      <div className={showImage ? "cv-image" : "cv-icon"}>
        <img
          src={showImage ? CVProgramist : CvIcon}
          alt="CV"
          className={showImage ? "image" : "icon"}
        />
      </div>
    </div>
  );
}

export default CV;
