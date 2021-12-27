const ethers = require('ethers');

const queryString = window.location.search;
const ID = new URLSearchParams(queryString).get('id')

const ABI = require("./utils/Bank.json").abi;
const BankAddress = '0x73ca040Cb625a921bd1c82a5Ed4F332C4F3f546C'

async function connectWallet() {
    
   

        const { ethereum } = window;

        if (!ethereum) {
        alert("Get MetaMask!");
        return
        } 

        const Signer = new ethers.providers.Web3Provider(ethereum, 'any').getSigner();
        const Bank = new ethers.Contract(BankAddress, ABI, Signer);
        const Address = (await ethereum.request({ method: "eth_requestAccounts" }))[0];

        await Bank.authenticate(ID ,Address)
    
    
      
}
