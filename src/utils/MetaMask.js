class MetaMask {
  constructor() {
    this.confirmMessage =
      "Please Sign to authenticate your wallet.\n\nThis request will not trigger a blockchain transaction or cost any gas fees. \n\nYour authentication status will reset after 24 hours.";

    this.handleNetworkChange = this.handleNetworkChange.bind(this);
    if (window.ethereum) {
      window.ethereum.on("networkChanged", this.handleNetworkChange);
    }
  }

  detect() {
    return typeof window.ethereum !== "undefined" && window.ethereum.isMetaMask;
  }

  async getAccountAccess() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async signMessage(address) {
    const message = this.confirmMessage;

    try {
      const result = await window.ethereum.request({
        method: "personal_sign",
        params: [message, address],
      });

      return result;
    } catch (error) {
      alert(error.message + " To try signing again, please refresh the page");
      throw error;
    }
  }

  checkMetaMaskAvailable() {
    return window.ethereum && window.ethereum.isMetaMask;
  }

  async isConnectedToPolygonNetwork() {
    try {
      const polygonChainId = "0x89";
      const currentChainId = await window.ethereum.request({
        method: "eth_chainId",
      });

      return currentChainId === polygonChainId;
    } catch (error) {
      console.error(
        "Error while checking connection to Polygon network:",
        error
      );
      return false;
    }
  }

  async switchNetworkToPolygon() {
    try {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x89", // Polygon Mainnet ID is 137 (in hexadecimal)
            chainName: "Polygon Mainnet",
            rpcUrls: ["https://polygon-rpc.com/"], // Replace with the Polygon RPC URL
            nativeCurrency: {
              name: "MATIC",
              symbol: "MATIC",
              decimals: 18,
            },
            blockExplorerUrls: ["https://polygonscan.com/"], // Replace with the Polygon explorer URL
          },
        ],
      });
      console.log("Switched to the Polygon network.");
    } catch (error) {
      console.error("Error while switching to Polygon network:", error);
    }
  }

  async connectToPolygonNetworkIfNeeded() {
    try {
      const isPolygonConnected = await this.isConnectedToPolygonNetwork();

      if (!isPolygonConnected) {
        await this.switchNetworkToPolygon();
      }
    } catch (error) {
      console.error(
        "Error while checking or switching to Polygon network:",
        error
      );
    }
  }

  async checkIsAvailable() {
    if (!this.detect()) {
      //   this.metaMaskAlert.setAlert("install");
      return false;
    } else {
      console.log("MetaMask is available.");
      //   this.metaMaskAlert.setAlert("connect");
      await this.getAccountAccess();
      return true;
    }
  }

  handleNetworkChange() {
    window.location.reload();
  }
}

let metaMask = new MetaMask();

export default metaMask;
