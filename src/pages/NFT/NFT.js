import Navbar from "../../components/navbar/Navbar";
import NFTsForSale from "../../components/NFTsForSale/NFTsForSale";
import WalletBar from "../../components/walletBar/WalletBar";
import UserNFTsSale from "../../components/userNFTsSale/UserNFTsSale";
import Loading from "../../components/loading/Loading";
import InstallMetaMaskNotification from "../../components/installMetaMask/InstallMetaMask";
import YoutubeVideo from "../../components/youtue_video/YoutubeVideo";
import Web3Manager from "../../utils/Web3Manager";
import MetaMask from "../../utils/MetaMask";
import React, { useEffect, useState } from "react";
import "./NFT.css";

function NFTsPage() {
  const [isWalletConnected, setWalletConnected] = useState(false);
  const [isMetaMaskInstalled, setMetaMaskInstalled] = useState(false);

  const checkIsWalletConnected = async () => {
    try {
      if (MetaMask.checkIsAvailable()) {
        console.log("Metamask installed");
        setMetaMaskInstalled(true);
        await MetaMask.connectToPolygonNetworkIfNeeded();
        await Web3Manager.connect();
        await Web3Manager.assignUserWalletAddress();
        setWalletConnected(true);
      } else {
        console.log("Metamask not installed");
        setWalletConnected(false);
        setMetaMaskInstalled(false);
      }
    } catch (error) {
      console.error("Error while checking wallet connection:", error.message);
      setWalletConnected(false);
      setMetaMaskInstalled(false);
    }
  };

  useEffect(() => {
    checkIsWalletConnected();
  }, []);

  return (
    <div className="nfts-page">
      <Navbar />
      {!isMetaMaskInstalled && <InstallMetaMaskNotification />}
      {isWalletConnected ? (
        <>
          <WalletBar />
          <NFTsForSale />
          <UserNFTsSale />
          <YoutubeVideo />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default NFTsPage;
