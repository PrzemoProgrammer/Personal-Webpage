import React from "react";
import "./SuccessMessage.css";

function Success() {
  return (
    <section className="success-container">
      <div className="success-content">
        <div className="success-icon"></div>
        <div className="text">
          <h1>Success!</h1>
          <p>Your action was completed successfully.</p>
        </div>
      </div>
    </section>
  );
}

export default Success;
