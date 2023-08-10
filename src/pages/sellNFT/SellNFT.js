import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Web3Manager from "../../utils/Web3Manager";
import SuccessMessage from "../../components/successMessage/SuccessMessage";
import Navbar from "../../components/navbar/Navbar";
import WalletBar from "../../components/walletBar/WalletBar";
import informationImage from "./assets/informationIcon.png";
import "./SellNFT.css";

const WEI_TO_MATIC = 1e18;

function SellNFT() {
  const [isOwnerExpanded, setOwnerExpanded] = useState(false);
  const [isPurchaseSuccessful, setPurchaseSuccessful] = useState(false);
  const [isInformationVisible, setInformationVisible] = useState(false);
  const [textInputValue, setTextInputValue] = useState("");
  const [metadata, setMetadata] = useState(null);
  const [isWeb3Connected, setWeb3Connected] = useState(false);

  const location = useLocation();
  const userWalletAddress = Web3Manager.getUserWalletAddress();

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
    metadata.owner = metadata.owner.toLowerCase();
    setMetadata(metadata);
  }, [location.hash]);

  const listForSale = async (id) => {
    const userAddress = userWalletAddress;
    const price = textInputValue * WEI_TO_MATIC;

    try {
      const tokenId = parseInt(id);
      const tokenPrice = price.toString();

      await Web3Manager.contract.methods
        .listTokenForSale(tokenId, tokenPrice)
        .send({
          from: userAddress,
        })
        .on("transactionHash", (hash) => {
          console.log("Transaction Hash:", hash);
        })
        .on("confirmation", (confirmationNumber, receipt) => {
          console.log("Confirmation:", confirmationNumber);
        })
        .on("error", (error) => {
          console.error("Error:", error);
        });

      setPurchaseSuccessful(true);
      console.log(`Successfully listed for sale token with ID: ${id}`);
    } catch (error) {
      console.error(
        `Error occurred while listed for sale token with ID ${id}:`,
        error
      );
    }
  };

  const handleTextInputChange = (event) => {
    setTextInputValue(event.target.value);
  };

  const handleOwnerMouseEnter = () => {
    setOwnerExpanded(true);
  };

  const handleOwnerMouseLeave = () => {
    setOwnerExpanded(false);
  };

  const handleInformationMouseEnter = () => {
    setInformationVisible(true);
  };

  const handleInformationMouseLeave = () => {
    setInformationVisible(false);
  };

  return (
    <>
      {isWeb3Connected && (
        <div className="sell-nft-details-page">
          <Navbar />
          <WalletBar />
          {isPurchaseSuccessful ? (
            <SuccessMessage />
          ) : (
            <div className="details">
              <div className="image">
                <img
                  src={metadata?.image}
                  alt="element"
                  className="nft-image"
                />
                <p
                  className="owner"
                  onMouseEnter={handleOwnerMouseEnter}
                  onMouseLeave={handleOwnerMouseLeave}
                >
                  <span>
                    {`Owner: ${
                      isOwnerExpanded
                        ? metadata?.owner
                        : metadata?.owner.length > 10
                        ? `${metadata?.owner.substring(0, 10)}...`
                        : metadata?.owner
                    }`}
                  </span>
                </p>
              </div>
              <div className="nft-description">
                <p className="name">{metadata?.name}</p>
                <p className="collection">{`Collection ${metadata?.collection}`}</p>
                <p className="description">{metadata?.description}</p>
                <p className="exclusivity">{`Exclusivity: ${metadata?.exclusivity}`}</p>
                <p className="author">{`Author: ${metadata?.author}`}</p>
                <p className="date">{`Date: ${metadata?.release_date}`}</p>

                <div className="buy-container">
                  <div className="button">
                    <button
                      className="buy-button"
                      onClick={() => listForSale(metadata?.id)}
                    >
                      List For Sale
                    </button>
                  </div>
                  <div className="price">
                    <div className="text-input-container">
                      <input
                        type="text"
                        onChange={handleTextInputChange}
                        value={textInputValue}
                        placeholder="Enter price"
                      />
                    </div>
                    <div className="price-currency">
                      <p className="currency">MATIC</p>
                    </div>
                    <div className="price-currency">
                      <img
                        src={informationImage}
                        alt="MATIC"
                        className="currency-icon"
                        onMouseEnter={handleInformationMouseEnter}
                        onMouseLeave={handleInformationMouseLeave}
                      />
                    </div>
                  </div>
                </div>

                <div className="information-container">
                  <p
                    style={{ opacity: isInformationVisible ? 1 : 0 }}
                    className="information"
                  >
                    Add a price in the MATIC currency. If you click the Sale For
                    List button, your NFT token will be put up for sale. You
                    will be able to see it here in the store.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default SellNFT;
