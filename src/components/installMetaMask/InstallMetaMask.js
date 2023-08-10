import React from "react";
import MetamaskImage from "./assets/metamaskImage.png";
import "./InstallMetaMask.css";

function InstallMetaMask() {
  return (
    <>
      <section className="install-metamask-container">
        <div className="metamask-image">
          <img
            src={MetamaskImage}
            alt={"metamaskImage"}
            className="nft-image"
          />
        </div>

        <div className="install-message">
          To use this app, please install the extension MetaMask to your
          browser.
        </div>
        <div className="install-button">
          <a
            href="https://metamask.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">Install MetaMask</button>
          </a>
        </div>
      </section>
    </>
  );
}

export default InstallMetaMask;
