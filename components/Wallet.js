import { ellipseAddress } from "../services/helpers"


const Wallet = ({address, connect, disconnect}) => {


  return (
    <div className="wallet-wrap">
    
    <div className="wallet-wrap__address">
      {address && (
        <>
          <div className="d-flex align-items-center">
            <span className="status status--green"></span>
            <span title={address}>{ellipseAddress(address)}</span>
          </div>
       </>

       
      )}
    </div>

    <div className="wallet-wrap__button">
     
      {address ? (
        <>
        </>
      ) : (
        <button className="button" type="button" onClick={connect}>
          Connect
        </button>
      )}
    </div>

  </div>
  )
}

export default Wallet
