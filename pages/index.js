import { ethers } from "ethers";
import Head from "next/head";
import { useEffect, useState } from "react";
import abi from "../abi";
import Footer from "../components/Footer";
import HomeContent from "../components/HomeContent";
import Navigation from "../components/Navigation";
import Web3Modal from "web3modal"
import Particles from "react-tsparticles";
import particles from "../services/particles";

const CONTRACT_ADDRESS = "0xEd4127Be90C3b99d2EcA24Bfa5c703423d9200d3";
const PRESALE_LIMIT = 9500;

const allowConnection = new Date(1631719934000);
const presaleDateTime = new Date(1631808000 * 1000);
const mainsaleDateTime = new Date(1631894400 * 1000);

export const Home = () => {
  const [contract, setContract] = useState({});
  const [provider, setProvider] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [tx, setTx] = useState("");
  const [checker, setChecker] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [currentSupply, setCurrentSupply] = useState(-1);

  const currentDate = new Date();

  const refreshStatus = () => {
    setChecker(!checker);
  };

  const isMainSale = () => {

    if (provider && currentSupply > "0" && mainsaleDateTime.getTime() < currentDate.getTime()){
      return true;
    }
    return false;
  }

  const isPresale = () => {

    if (currentSupply > PRESALE_LIMIT && mainsaleDateTime.getTime() > currentDate.getTime() && presaleDateTime.getTime() < currentDate.getTime()){
      return true;
    }
    return false;
  }

  const presaleHasEnded = () => {

    if (isMaticNetwork() && mainsaleDateTime.getTime() > currentDate.getTime() && currentSupply != -1 && currentSupply <= PRESALE_LIMIT) {
      return true;
    }
    return false;
  }
  const saleHasEnded = () => {

    if (isMaticNetwork()  && mainsaleDateTime.getTime() > currentDate.getTime() && currentSupply == "0"){
      return true;
    }
    return false;
  }

  const isMaticNetwork = () => {
    if (chainId && chainId.chainId == 137){
      return true;
    }
    return false;
  }

  const comingSoon = () => {
    if ( mainsaleDateTime.getTime() > currentDate.getTime() && presaleDateTime.getTime() > currentDate.getTime()){
      return true;
    }
    return false;
  }

  
  useEffect(() => {
    const init = async () => {
      if (
        typeof window !== "undefined" &&
        window.ethereum &&
        provider === null &&
        allowConnection.getTime() < currentDate.getTime()
      ) {
        //await window.ethereum.request({ method: "eth_requestAccounts" });

        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect({
        })
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        setProvider(provider);
        const chainId = await provider.getNetwork()
        setChainId(chainId);

        const con = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
     
       
        if (con.address) {
          setContract(con);
          //HERE
         const currentSupply = await con.currentSupply();
         setCurrentSupply(currentSupply.toString());
        }
      }
    };
    init();
  }, [checker]);

  const quantify = (value) => {
    if (value < 0 && quantity > 1) setQuantity(quantity - 1);
    else if (value > 0 && quantity < 20) setQuantity(quantity + 1);
  };

  const mint = async () => {
  
    const total = await contract.getCurrentPrice(quantity);

    await contract
      .mint(quantity, { value: total })
      .then((res) => {
        if (res.hash) {
          setTx(res.hash);
        }
      })
      .catch((error) => {
        if (typeof error == "object") {
          if (error.data){
            alert(error.data.message);
          }else{
            alert(error.message);
          }
        } else{
          alert(error);
        } 
      });
};


  return (
    <div>
      <Head>
        <title>Stories of Polyland</title>
      </Head>

      <Navigation check={() => refreshStatus()} />

      <div className="intro">
      <Particles
        id="fireParticles"
        options={particles}
      />
        <div className="intro__inner container">
          
            <img className="intro__logo" src="/static/logos.png" alt=""/>

              {
                !isMaticNetwork() && 
                <span className="notification">
                  To start minting make sure you are connected with your wallet using Polygon Mainnet!
                </span>
              }

              {
                comingSoon() &&
                  <span className="notification">
                   Presale is starting on 16th September 16:00 UTC on Polygon network!
                  </span>
              }

              {
                 provider &&
                isMainSale() &&
                  <span className="notification">
                    Main Sale is now live!
                  </span>
              }

              {
                provider &&
                isPresale() &&
                  <span className="notification">
                    Presale is now live!
                  </span>
              }

              {
                provider &&
                presaleHasEnded()  &&
                  <span className="notification">
                    Presale has been sold out!
                  </span>
              }

              {
                 provider &&
                saleHasEnded()  &&
                  <span className="notification">
                    Stories of Polyland have been sold out!
                  </span>
              }
              {tx && (
                <span className="notification">
                  Your transaction is progress. You can find your transaction
                  status {" "}
                  <a
                    className="underlined"
                    rel="noreferrer"
                    target="_blank"
                    href={"https://polygonscan.com/tx/" + tx}
                  >
                    here
                  </a>.
                </span>
              )}
              { !tx && 
              (
                isMainSale()
              ||
                isPresale()
              )
              && (
                <>
                  <button
                    className="button button--mint"
                    onClick={() => mint()}
                  >
                    Mint
                  </button>

                  <div className="quantity-input">
                    <button
                      className="quantity-input__modifier quantity-input__modifier--left"
                      onClick={() => quantify(-1)}
                    >
                      &mdash;
                    </button>
                    <input
                      className="quantity-input__screen"
                      type="text"
                      value={quantity}
                      readOnly
                    />
                    <button
                      className="quantity-input__modifier quantity-input__modifier--right"
                      onClick={() => quantify(1)}
                    >
                      &#xff0b;
                    </button>
                  </div>

                  <div className="total-supply">
                    {currentSupply > -1 && (
                      <div>
                        {currentSupply - 500}
                        <span>/</span>10000 Stories left
                      </div>
                    )}
                  </div>
                </>
              )}

              {
                currentSupply == "500" &&
                <>
                <span className="notification">
                 The sale has ended.
                </span>
                 <div className="total-supply">
                 {currentSupply > -1 && (
                   <div>
                     0
                     <span>/</span>10000 Stories left
                   </div>
                 )}
               </div>
               </>
              }
           
        </div>
      </div>
      <HomeContent />

      <Footer />
    </div>
  );
};

export default Home;
