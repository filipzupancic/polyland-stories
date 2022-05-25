import { ethers } from "ethers";
import { Component, useState } from "react";
import Wallet from "./Wallet";
import Web3Modal from "web3modal"

const allowConnection = new Date(1631719934000);
class WalletConnector extends Component {

    state = {
        provider: null,
        address: "",
        currentDate: new Date()
    }

    componentDidMount(){
      if (this.state.currentDate.getTime() > allowConnection.getTime())
        this.connect();
    }
  
    connect = async () => {

        if (typeof window !== 'undefined') {
          if (!window.ethereum){
              console.log("No MetaMask detected.")
            return;
          }

            const web3Modal = new Web3Modal()
            const connection = await web3Modal.connect({
            })
            const providerTmp = new ethers.providers.Web3Provider(connection)
            const signer = providerTmp.getSigner()
          
            const address = await signer.getAddress();
     
            this.setState( {
                    provider: providerTmp,
                    address: address
                }
            )
            this.props.check();
      }
    }

    render(){
        return (
            <>
            {
              allowConnection.getTime() < this.state.currentDate.getTime()  &&
              <Wallet 
              address={this.state.address} 
              connect={() => this.connect()}
              />
            }
               
            </>
          )
    }
  }
  
export default WalletConnector