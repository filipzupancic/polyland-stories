
import WalletConnector from "./WalletConnector"

export const Navigation = ({check}) => {

  return (
    <div className="navigation">
       
        <div className="navigation__container container">
            <div className="navigation__logo-wrap">
              <img src="/static/logo.png" alt="logo" />
              <span></span>
            </div>

            <div className="navigation__nav">
              <div className="navigation__menu">
                  <ul>
                    <li className="d-none d-sm-block">
                      <a href="#story">
                      Story
                      </a>
                    </li>
                    <li className="d-none d-sm-block">
                      <a href="#roadmap">
                        Roadmap
                      </a>
                    </li>
                  </ul>
              </div>
              <div className="navigation__wallet-wrap">
                <WalletConnector check={check}/>
              </div>

              <div className="navigation__social">
                  <ul>
                    <li>
                      <a rel="noreferrer" target="_blank" href="https://discord.gg/Z5G9ZbnxPz">
                      <img src="/static/discord.svg" alt="" />
                      </a>
                    </li>
                    <li>
                    <a rel="noreferrer" target="_blank" href="https://twitter.com/polylandstories">
                      <img src="/static/twitter.svg" alt="" />
                      </a>
                    </li>
                    <li>
                    <a rel="noreferrer" target="_blank" href="https://medium.com/@polystories.land">
                      <img src="/static/medium.svg" alt="" />
                      </a>
                    </li>

                    <li>
                    <a rel="noreferrer" target="_blank" href="https://opensea.io/collection/stories-of-polyland">
                      <img src="/static/opensea.svg" alt="" />
                      </a>
                    </li>
                  </ul>

              </div>
            </div>
           
         
        </div>
    </div>
  )
}

export default Navigation
