import { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected } from "./interact.js";
import Web3 from "web3"
import {ADDRESS, ABI} from "./config.js"
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import './static.css';



const StaticMinter = (props) => {
  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [how_many_clowns, set_how_many_clowns] = useState(1)
  const [contract, setContract] = useState(null)
  const [totalSupply, setTotalSupply] = useState(0)
  const [saleStarted, setSaleStarted] = useState(false)
  const [presaleStarted, setPresaleStarted] = useState(false)
  const [price, setPrice] = useState(0)
  const [presaleMaxx, setPresaleMax] = useState(1)
  const [instantiated, setInstantiated] = useState(false)
  
  function valuetext(value) {
     if(value === 3)
     {
        value = 5
     }
     if(value === 4)
     {
        value = 10
     }
     if(value === 5)
     {
        value = 20
     }
    set_how_many_clowns(value);
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
      label: '5',
    },
    {
      value: 4,
      label: '10',
    },
    {
      value: 5,
      label: '20',
    },
  ];

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();
    setWallet(address)
    setStatus(status);
    instantiate();
    callContractData();
    addWalletListener();
  }, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => { 
    if (contract) {
       try{

        if(!presaleStarted)
        {
          alert("Sale has not started")
          return
        }
        const clownPrice = Number(price)  * how_many_clowns

        const gasAmount = await contract.methods.mintPresale(how_many_clowns).estimateGas({from: walletAddress, value: clownPrice})
        console.log("estimated gas",gasAmount)
  
        console.log({from: walletAddress, value: price})

        contract.methods
        .mintPresale(how_many_clowns)
        .send({from: walletAddress, value: clownPrice, gas: String(gasAmount)})
        .on('transactionHash', function(hash){
          console.log("transactionHash", hash)
        })
      }
      catch(err){
         alert(JSON.stringify(err))
      }
        
    } else {
        console.log("Wallet not connected")
    }

  };

  async function instantiate() {
    if (typeof window.web3 !== 'undefined') {
      // Use existing gateway
      window.web3 = new Web3(window.ethereum);
     
    } else {
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
    const clownContract = new window.web3.eth.Contract(ABI, ADDRESS)
    setContract(clownContract)

    const totalSupply = await clownContract.methods.totalSupply().call() 
    setTotalSupply(totalSupply)

    const salebool = await clownContract.methods.saleIsActive().call() 
    setSaleStarted(salebool)

    const presalebool = await clownContract.methods.presaleIsActive().call()
    setPresaleStarted(presalebool)

    const preSaleMax = await clownContract.methods.PRESALE_SUPPLY().call()
    setPresaleMax(preSaleMax)

    const clownPrice = await clownContract.methods.price().call() 
    setPrice(clownPrice)
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
   <div className="overflow minter-page">
   <header className="header">
      <div className="cont flex">

         <div className="header__logo">
            <picture>
               <source media="(min-width: 1440px)" srcset="/logo1.png" />
               <source media="(min-width: 768px)" srcset="/logo1440.png" />
               <img src="/logo768.png" alt="CryptoClowns" />
            </picture>
         </div>
         <button className="btn header__btn" onClick={connectWalletPressed}>
               {walletAddress.length > 0 ? (
                  "Connected: " +
                  String(walletAddress).substring(0, 6) +
                  "..." +
                  String(walletAddress).substring(38)
               ) : (
                  <span>Connect Metamask Wallet</span>
               )}
            </button>

      </div>
   </header>

      <section className="mint" id="mint">
         <div className="cont">

            <h2 className="slider__title">mint</h2>
            <div className="slider">
               
            <Slider
               defaultValue={1}
               getAriaValueText={valuetext}
               aria-labelledby="discrete-slider"
               valueLabelDisplay="auto"
               step={1}
               marks={sliderMarks}
               min={1}
               max={5}
            />
            </div>

            <button id="mintButton" onClick={onMintPressed} className="btn">
            {"Mint"}
            </button>
         </div>
      </section>
   
      <div className="container">
      </div>   
</div>

  )
};

export default StaticMinter;
