import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <section className="loading-container">
      <div className="loading-page">
        <div className="text">
          <span className="loading-text">Loading, please wait :)</span>
        </div>
        <div className="loading-spinner"></div>
      </div>
    </section>
  );
}

export default Loading;
