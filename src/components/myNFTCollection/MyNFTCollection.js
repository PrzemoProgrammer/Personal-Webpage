import React from "react";
import "./MyNFTCollection.css";
import MyNFTsImage from "./assets/MyNFTs.png";
import { useNavigate } from "react-router-dom";

function MyNFTCollection() {
  const navigate = useNavigate();
  const NFTsCollectionClick = () => {
    navigate("/NFT");
    window.scrollTo(0, 0);
  };

  return (
    <section className="my-nfts-collection-container">
      <div className="text-image-container">
        <div className="nfts-collection-text">
          <p className="owner">{"NFT"}</p>
        </div>
        <div className="game-image">
          <img
            src={MyNFTsImage}
            onClick={NFTsCollectionClick}
            alt="NFTS"
            className="image"
          />
        </div>

        <div className="showmore-button">
          <p className="button" onClick={NFTsCollectionClick}>
            {"Show NFT game and more"}
          </p>
        </div>
      </div>
    </section>
  );
}

export default MyNFTCollection;
