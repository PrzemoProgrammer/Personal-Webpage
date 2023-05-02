import React from "react";
import "./Section2.css";

function Section2() {
  return (
    <section className="section2">
      <h1 className="title">Video</h1>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NlkxYbjXEoo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default Section2;
