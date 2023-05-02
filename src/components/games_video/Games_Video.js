import React from "react";
import video from "./games_promotion.mp4";
import "./Games_Video.css";

function GamesVideo() {
  return (
    <div className="games-video">
      <h1>Some sample games</h1>
      <video controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default GamesVideo;
