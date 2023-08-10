import React from "react";
import "./YoutubeVideo.css";

function YoutubeVideo() {
  return (
    <section className="youtube-video-container">
      <h1 className="title">Video</h1>
      <div className="video-container">
        <div className="video">
          <iframe
            width="760"
            height="450"
            src="https://www.youtube.com/embed/ACy5xnGE3ok"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div className="video">
          <iframe
            width="760"
            height="450"
            src="https://www.youtube.com/embed/0u7wKCR42rQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default YoutubeVideo;
