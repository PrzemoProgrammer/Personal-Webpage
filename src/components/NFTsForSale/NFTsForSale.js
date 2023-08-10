import React, { useState, useEffect } from "react";
import "./NFTsForSale.css";
import Web3Manager from "../../utils/Web3Manager";
import IPFSDecoder from "../../utils/IPFSDecoder";
import Loading from "../../components/loading/Loading";
import MATICSymbol from "./assets/MATICSymbol.png";

function NFTsForSale() {
  const [tokensMetadataForSale, setTokensMetadataForSale] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNFTsForSale = async () => {
    const metadataForSale = [];

    for (let i = 0; i <= 20; i++) {
      try {
        const tokenMetadata = await Web3Manager.contract.methods
          .getTokenURIForSale(i)
          .call();

        let decodedMetadata = await IPFSDecoder.getContentFromIPFS(
          tokenMetadata
        );

        const decodedImage = await IPFSDecoder.decodeImage(
          decodedMetadata.content.image
        );

        const price = await Web3Manager.contract.methods
          .getTokenPrice(decodedMetadata.content.id)
          .call();

        const owner = await Web3Manager.contract.methods
          .ownerOf(decodedMetadata.content.id)
          .call();

        const convertedPrice = Web3Manager.web3.utils.fromWei(price, "ether");

        decodedMetadata.content.image = decodedImage;
        decodedMetadata.content.price = convertedPrice;
        decodedMetadata.content.owner = owner.toLowerCase();

        decodedMetadata.success
          ? metadataForSale.push(decodedMetadata.content)
          : console.log(decodedMetadata.error);
      } catch (error) {
        // console.error("Error fetching token URI for sale:", error);
      }
    }
    return metadataForSale;
  };

  useEffect(() => {
    const fetchData = async () => {
      const metadataForSale = await getNFTsForSale();
      setTokensMetadataForSale(metadataForSale);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleClick = (metadata) => {
    const url = "/NFTDetails";

    const stateData = encodeURIComponent(JSON.stringify({ metadata }));
    const urlWithState = `${url}#${stateData}`;

    window.open(urlWithState, "_blank");
  };

  return (
    <section className="nfts-container">
      {loading && <Loading />}{" "}
      {!loading && (
        <div className="title">
          <p className="title-text">{"Collection of GoobyFaces"}</p>
        </div>
      )}
      <div className="nfts-for-sale">
        {tokensMetadataForSale.map((metadata, index) => (
          <div
            key={index}
            className="nft-item"
            onClick={() => handleClick(metadata)}
          >
            <img src={metadata.image} alt="element" className="nft-image" />
            <p className="nft-name">{metadata.name}</p>
            <div className="price">
              <p className="nft-price">{metadata.price + " MATIC"}</p>
              <img src={MATICSymbol} alt="MATIC" className="matic-image" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NFTsForSale;
