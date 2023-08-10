import React, { useState, useEffect } from "react";
import Web3Manager from "../../utils/Web3Manager";
import IPFSDecoder from "../../utils/IPFSDecoder";
import Loading from "../../components/loading/Loading";
import "./UserNFTsSale.css";

function UserNFTsSale() {
  const [ownerTokensMetadata, setOwnerTokensMetadata] = useState([]);
  const [loading, setLoading] = useState(true);
  const userWalletAddress = Web3Manager.getUserWalletAddress();

  useEffect(() => {
    const fetchOwnerTokensMetadata = async () => {
      try {
        const NFTCount = await Web3Manager.contract.methods
          .balanceOf(userWalletAddress)
          .call();

        if (parseInt(NFTCount) === 0) {
          setLoading(false);
          return;
        }

        const ownerNFTsMetadata = await getOwnerNFTsMetadata(userWalletAddress);
        setOwnerTokensMetadata(ownerNFTsMetadata);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching owner tokens:", error);
      }
    };

    const getOwnerNFTsMetadata = async (ownerAddress) => {
      const ownedTokensMetadata = [];

      try {
        for (let tokenId = 0; tokenId <= 20; tokenId++) {
          const tokenOwner = await Web3Manager.contract.methods
            .ownerOf(tokenId)
            .call();

          if (tokenOwner.toLowerCase() === ownerAddress.toLowerCase()) {
            const ownerNFTMetadata = await getOwnerNFTMetadata(tokenId);
            ownedTokensMetadata.push(ownerNFTMetadata);
          }
        }
      } catch (error) {
        console.error("Error getting owner tokens:", error);
      }

      return ownedTokensMetadata;
    };

    const getOwnerNFTMetadata = async (tokenId) => {
      const tokenMetadata = await Web3Manager.contract.methods
        .tokenURI(tokenId)
        .call();

      const decodedMetadata = await IPFSDecoder.getContentFromIPFS(
        tokenMetadata
      );

      const decodedImage = await IPFSDecoder.decodeImage(
        decodedMetadata.content.image
      );

      decodedMetadata.content.image = decodedImage;

      return decodedMetadata.content;
    };

    fetchOwnerTokensMetadata();
  }, [userWalletAddress]);

  const handleClick = (metadata) => {
    const url = "/SellNFT";
    const stateData = encodeURIComponent(JSON.stringify({ metadata }));
    const urlWithState = `${url}#${stateData}`;

    window.open(urlWithState, "_blank");
  };

  return (
    <section className="user-nfts-sale-container">
      <div className="nft-name-container">
        <p className="nft-title">My NFT</p>
      </div>
      {loading && <Loading />}
      <div className="nft-container">
        {ownerTokensMetadata.length === 0 ? (
          <div className="no-nfts-message">You don't have any NFTs :C</div>
        ) : (
          <div className="nfts-for-sale">
            {ownerTokensMetadata.map((metadata) => (
              <div
                key={metadata.id}
                className="nft-item"
                onClick={() => handleClick(metadata)}
              >
                <div className="nft-item-content">
                  <img
                    src={metadata.image}
                    alt={metadata.name}
                    className="nft-image"
                  />
                </div>
                <div className="nft-title-text">
                  <p className="nft-name">{metadata.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default UserNFTsSale;
