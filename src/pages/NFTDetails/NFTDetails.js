import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Web3Manager from "../../utils/Web3Manager";
import Navbar from "../../components/navbar/Navbar";
import WalletBar from "../../components/walletBar/WalletBar";
import SuccessMessage from "../../components/successMessage/SuccessMessage";
import MATICSymbol from "../../components/NFTsForSale/assets/MATICSymbol.png";
import "./NFTDetails.css";

const NftDetails = () => {
  const [isOwnerExpanded, setOwnerExpanded] = useState(false);
  const [isPurchaseSuccessful, setPurchaseSuccessful] = useState(false);
  const [isWeb3Connected, setWeb3Connected] = useState(false);
  const [metadata, setMetadata] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const initializeWeb3 = async () => {
      try {
        await Web3Manager.connect();
        await Web3Manager.assignUserWalletAddress();
        setWeb3Connected(true);
      } catch (error) {
        console.error("Error initializing Web3:", error);
      }
    };

    initializeWeb3();
  }, []);

  useEffect(() => {
    function getMetadata() {
      const stateData = location.hash.substr(1);
      const parsedData = JSON.parse(decodeURIComponent(stateData));
      return parsedData.metadata;
    }

    const metadata = getMetadata();
    setMetadata(metadata);
  }, [location.hash]);

  const userWalletAddress = Web3Manager.getUserWalletAddress();

  const tryToPayment = async (id) => {
    const userAddress = userWalletAddress;
    const tokenPriceInWei = metadata.price * 1e18;

    try {
      await Web3Manager.contract.methods.purchaseToken(id).send({
        from: userAddress,
        value: tokenPriceInWei,
      });
      setPurchaseSuccessful(true);
      console.log(`Successfully purchased token with ID: ${id}`);
    } catch (error) {
      console.error(
        `Error occurred while purchasing token with ID ${id}:`,
        error
      );
    }
  };

  const handleOwnerMouseEnter = () => {
    setOwnerExpanded(true);
  };

  const handleOwnerMouseLeave = () => {
    setOwnerExpanded(false);
  };

  const truncatedOwnerName = (name) => {
    return isOwnerExpanded
      ? name
      : name.length > 10
      ? name.substring(0, 10) + "..."
      : name;
  };

  return (
    <>
      {isWeb3Connected && (
        <div className="nft-details-page">
          <Navbar />
          <WalletBar />
          {isPurchaseSuccessful ? (
            <SuccessMessage />
          ) : (
            <div className="details">
              <div className="image">
                <img src={metadata.image} alt="element" className="nft-image" />
                <p
                  className="owner"
                  onMouseEnter={handleOwnerMouseEnter}
                  onMouseLeave={handleOwnerMouseLeave}
                >
                  <span>{"Owner: " + truncatedOwnerName(metadata.owner)}</span>
                </p>
              </div>
              <div className="nft-description">
                <p className="name">{metadata.name}</p>
                <p className="collection">
                  {"Collection " + metadata.collection}
                </p>
                <p className="description">{metadata.description}</p>
                <p className="exclusivity">
                  {"Exclusivity: " + metadata.exclusivity}
                </p>
                <p className="author">{"Author: " + metadata.author}</p>
                <p className="date">{"Date: " + metadata.release_date}</p>
                <div className="buy-container">
                  <div className="button">
                    <button
                      className="buy-button"
                      onClick={() => tryToPayment(metadata.id)}
                    >
                      Buy Now
                    </button>
                  </div>
                  <div className="price">
                    <p className="nft-price">{metadata.price + " MATIC"}</p>
                    <img
                      src={MATICSymbol}
                      alt="MATIC"
                      className="matic-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default NftDetails;
