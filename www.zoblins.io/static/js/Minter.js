import { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected } from "./interact.js";
import Web3 from "web3"
import {ADDRESS, ABI} from "./config.js"
import './static.css';
import Slider from '@material-ui/core/Slider';

const Static = (props) => {
  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [contract, setContract] = useState(null)
  const [totalSupply, setTotalSupply] = useState(0)
  const [saleStarted, setSaleStarted] = useState(false)
  const [price, setPrice] = useState(0)
  const [instantiated, setInstantiated] = useState(false)
  const [tokenId, setTokenId] = useState(0)
  const [how_many, set_how_many] = useState(1)
  const [claimStarted, setClaimStarted] = useState(false)

  function valuetext(value) {
   set_how_many(value);
 }
 const sliderMarks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
 ];

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();
    setWallet(address)
    setStatus(status);
    instantiate();
    callContractData();
    addWalletListener();
    setTokenId();
  }, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onOpenseaPressed = async () =>
  {
    window.open("https://opensea.io/collection/zoblins")
  }

  const onMintPressed = async () => { 
    if (contract) {

      if(!saleStarted)
      {
        alert("Public mint period not active")
        return
      }
 
      const owlPrice = Number(price) * how_many

      let gasAmount = 0
      try
      {
        gasAmount = await contract.methods.mint(how_many).estimateGas({from: walletAddress, value: owlPrice})
      }
      catch (error)
      {
        alert(error)
        return
      }
      console.log("estimated gas",gasAmount)

      console.log({from: walletAddress, value: price})

      contract.methods
            .mint(how_many)
            .send({from: walletAddress, value: owlPrice, gas: String(gasAmount)})
            .on('transactionHash', function(hash){
              console.log("transactionHash", hash)
            })
          
    } else {
        console.log("Wallet not connected")
    }

  };

  async function instantiate() {
    if (typeof window.web3 !== 'undefined') {
      // Use existing gateway
      window.web3 = new Web3(window.ethereum);
     
    } 

    window.ethereum.enable()
      .then(function (accounts) {
        window.web3.eth.net.getNetworkType()
        // checks if connected network is mainnet
        .then((network) => {console.log(network);if(network != "main"){alert("You are on " + network+ " network. Change network to mainnet or you won't be able to do anything here")} });  
        let wallet = accounts[0]
        setWallet(wallet)
        setInstantiated(true)
        callContractData(wallet)

  })
  .catch(function (error) {
  // Handle error. Likely the user rejected the login
  console.error(error)
  })
  }

  async function callContractData() {
    const owlContract = new window.web3.eth.Contract(ABI, ADDRESS)
    setContract(owlContract)

    const salebool = await owlContract.methods.saleIsActive().call() 
    setSaleStarted(salebool)

    const sqPrice = await owlContract.methods.mintRate().call()
    setPrice(sqPrice)
  }

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("");
        } else {
          setWallet("");
          setStatus("Connect your Metamask wallet to mint 🦊");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }
  return (
    <div className="overflow">


    <section className="mint" id="mint">
         <div className="cont">
         <picture>
                <source media="(min-width: 1440px)" srcset="/zoblin.jpg" />
                <source media="(min-width: 768px)" srcset="/zoblin.jpg" />
                <img src="/zoblin.jpg" alt="Zoblins" />
             </picture>
         <h1>Sold Out!</h1>
            
            <button id="mintButton" onClick={onOpenseaPressed} className="btn">
            {"View On Opensea"}
            </button>
         </div>
      </section>
    
       <div className="container">
       </div>   
 </div>
 
   )
 };
 
 export default Static;
