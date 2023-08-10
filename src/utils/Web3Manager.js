import Web3 from "web3";
import abi from "../contract/ContractABI";

class Web3Manager {
  constructor() {
    this.accounts = null;
    this.userWalletAddress = null;
    this.contractAddress = "0xEFf9E7DDe4E791Fc124c53848c855a4FB9E17652";
    this.contractABI = abi;
  }

  async connect() {
    const contractAddress = this.contractAddress;
    const contractABI = this.contractABI;

    this.web3 = new Web3(window.ethereum);
    this.contract = new this.web3.eth.Contract(contractABI, contractAddress);
  }

  async assignUserWalletAddress() {
    this.accounts = await this.web3.eth.getAccounts();
    this.userWalletAddress = this.accounts[0];
  }

  getUserWalletAddress() {
    return this.userWalletAddress;
  }

  async getNetworkId() {
    return await this.web3.eth.net.getId();
  }
}

let web3Manager = new Web3Manager();

export default web3Manager;
