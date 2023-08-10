import React, { useState, useEffect } from "react";
import MetaMask from "../../utils/MetaMask";
import Web3Manager from "../../utils/Web3Manager";
import DocumentIcon from "./assets/documentIcon.png";
import GamepadIcon from "./assets/padIcon.png";
import ArrowIcon from "./assets/arrowIcon.png";
import OpenSeaIcon from "./assets/openSeaIcon.png";
import "./WalletBar.css";

function WalletBar() {
  const [isConnected, setConnected] = useState(false);
  const [account, setAccount] = useState("");
  const [isTranslated, setIsTranslated] = useState(false);

  const contractAddressLink =
    "https://polygonscan.com/address/0xEFf9E7DDe4E791Fc124c53848c855a4FB9E17652";
  const openSeaLink = "https://opensea.io/collection/gooby-faces";

  const checkIsWalletConnected = async () => {
    const userWalletAddress = await Web3Manager.getUserWalletAddress();

    if (typeof userWalletAddress === "string") {
      setConnected(true);
      setAccount(userWalletAddress);
      setIsTranslated((i) => !i);
    }
  };

  useEffect(() => {
    checkIsWalletConnected();
  }, []);

  const connectWallet = async () => {
    const isMetaMaskAvailable = await MetaMask.checkIsAvailable();
    if (!isMetaMaskAvailable) {
      return;
    }

    try {
      await Web3Manager.assignUserWalletAddress();
      const userWalletAddress = await Web3Manager.getUserWalletAddress();
      setConnected(true);
      setAccount(userWalletAddress);

      await MetaMask.connectToPolygonNetworkIfNeeded();
      window.location.reload();
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const handleGamepadIconClick = () => {
    window.open("/error_500", "_blank");
  };

  const handleDocumentIconClick = () => {
    window.open(contractAddressLink, "_blank");
  };

  const handleOpenSeaIconClick = () => {
    window.open(openSeaLink, "_blank");
  };

  const handleArrowIconIconClick = () => {
    setIsTranslated(!isTranslated);
  };

  return (
    <section className="walletbar">
      <div className="wallet-bar">
        {isConnected ? (
          <div
            className={`wallet-bar-container ${
              isTranslated ? "translated" : "noTranslated"
            }`}
          >
            <div className="game-icon">
              <img
                src={OpenSeaIcon}
                onClick={handleOpenSeaIconClick}
                alt="icon"
                className="icon"
              />
            </div>
            <div className="game-icon">
              <img
                src={GamepadIcon}
                onClick={handleGamepadIconClick}
                alt="icon"
                className="icon"
              />
            </div>
            <div className="game-icon">
              <img
                src={ArrowIcon}
                onClick={handleArrowIconIconClick}
                alt="icon"
                className="icon"
              />
            </div>

            <div className="document-icon">
              <img
                src={DocumentIcon}
                onClick={handleDocumentIconClick}
                alt="icon"
                className="icon"
              />
            </div>
            <div className="address">
              <p className="owner">
                <span>{"Account: " + account}</span>
              </p>
            </div>
          </div>
        ) : (
          <button onClick={connectWallet}>Connect wallet</button>
        )}
      </div>
    </section>
  );
}

export default WalletBar;
