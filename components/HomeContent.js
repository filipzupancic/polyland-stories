import { Pie } from 'react-chartjs-2';


export const HomeContent = () => {


  const options = {
    plugins: {
      tooltip: { enabled: false },

    },
    hover: {mode: null},
  }

  const dataPresale = {

    legend:{
      display: false
    },
    datasets: [
      {
        data: [20, 80],
        backgroundColor: [
          '#3edad7',
          '#00aec9',
        ],
        borderColor: [
          '#3edad7',
          '#00aec9',
        ],
        borderWitdh: 1
      },
    ],

    
  };

  const data = {

    legend:{
      display: false
    },
    datasets: [
      {
        data: [7, 14, 25, 48, 5],
        backgroundColor: [
          '#3edad7',
          '#00aec9',
          '#0082b4',
          '#015696',
          '#132c6c',
        ],
        borderColor: [
          '#3edad7',
          '#00aec9',
          '#0082b4',
          '#015696',
          '#132c6c',
        ],
        borderWitdh: 1
      },
    ],
  };

  return (
    <>
      <div className="story" id="story">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-7 mx-auto">
              <img className="icon" src="/static/logo.png" alt="icon" />
              <h2>Story</h2>
              <p>
                Polyland is a fantasy world where the clans of titans, orcs,
                elves, dwarfs, druids, cyclops and trolls are all fighting for
                the honour and domination. The dwellers of the woods, highlands,
                deserts, caves and swaps of Polyland are waiting for a hero to
                restore balance and bring peace. Each NFT holder will own a
                character with a specific set of skills and a NFT of character
                skin. Characters will then combat for the throne in the Stories
                of Polyland game.
              </p>


              <div className="showcase">
                <img src="/static/showcase1.gif" />
                <img src="/static/showcase3.gif" />
                <img src="/static/showcase2.gif" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="sale">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-7 mx-auto">
              <img className="icon" src="/static/logo.png" alt="icon" />
              <h2>Sale Information</h2>
            </div>

            <div className="col-10 col-lg-4 offset-2">
                <h3>
                  Presale <span>(Date: 16. September 16:00 UTC)</span>
                </h3>

                <div className="big">
                  500 NFTs
                </div>

                <div className="legend">
                 
                

               
                  <div className="legend__single">
                    <span className="legend__color">
                    </span>
                    <span>
                      1 NFT = 10 MATIC
                      <br />
                      (100 NFTS)
                    </span>
                  </div>
      

               
                  <div className="legend__single">
                    <span className="legend__color">
                    </span>
                    <span>
                      1 NFT = 60 MATIC
                      <br />
                      (400 NFTS)
                    </span>
                  </div>

            </div>
            </div>
            <div className="col-10 offset-1 offset-lg-0 col-lg-4">
                <Pie data={dataPresale} options={options} />
            </div>

          <div className="chart-divider">

          </div>

            <div className="col-10 col-lg-4 offset-2">
                <h3>
                  Official Sale <span>(Date: 17. September 16:00 UTC)</span>
                </h3>

                <div className="big">
                  9400 NFTs
                </div>

                <div className="legend">
                 
                  <div className="legend__single">
                    <span className="legend__color">
                    </span>
                    <span>
                      1 NFT = 60 MATIC
                      <br />
                      (500 - 1000 NFTS)
                    </span>
                  </div>

               
                  <div className="legend__single">
                    <span className="legend__color">
                    </span>
                    <span>
                      1 NFT = 70 MATIC
                      <br />
                      (1000 - 2000 NFTS)
                    </span>
                  </div>
      

               
                  <div className="legend__single">
                    <span className="legend__color">
                    </span>
                    <span>
                      1 NFT = 80 MATIC
                      <br />
                      (2000 - 4000 NFTS)
                    </span>
                  </div>
             

           
                  <div className="legend__single">
                    <span className="legend__color">
                    </span>
                    <span>
                      1 NFT = 90 MATIC
                      <br />
                      (4000 - 8000 NFTS)
                    </span>
                  </div>
    

            
                  <div className="legend__single">
                    <span className="legend__color">
                    </span>
                    <span>
                      1 NFT = 100 MATIC
                      <br />
                      (8000 - 9900 NFTS)
                    </span>
                  </div>
   

            </div>
            </div>

            <div className="col-10 offset-1 offset-lg-0 col-lg-4">
                <Pie data={data} options={options} />
            </div>

            <div className="chart-divider">

            </div>

              <div className="col-10 col-lg-4 offset-1 offset-lg-2">
                <div className="legend__single">
                  
                    <span>
                      100 NFTs are reserved for Marketing and Giveaways.
                    </span>
                  </div>
              </div>
          </div>
        </div>
      </div>

      <div className="timeline-wrap" id="roadmap">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-md-9 col-lg-7 mx-auto">
              <img className="icon" src="/static/logo.png" alt="icon" />
              <h2>Roadmap</h2>

              <p className="timeline-wrap-text">
                The trajectory is clear and ambitious. Our aim is to
                consistently partner and collaborate with individuals and
                institutions that can leverage and utilise our unique idea.
                Partnerships will be announced throughout the year as agreements
                are finalised. The people of Polyland are counting on us.
              </p>

              <div className="timeline">
                <div className="timeline-container primary">
                  <div className="timeline-icon"></div>
                  <div className="timeline-body">
                    <h4 className="timeline-title">Special Offer</h4>
                    <p className="timeline-subtitle">16. September 2021</p>
                    <p>
                      We will enable our supporters to buy 500 Stories of
                      Polyland loots in the presale.
                    </p>
                  </div>
                </div>
                <div className="timeline-container warning">
                  <div className="timeline-icon"></div>
                  <div className="timeline-body">
                    <h4 className="timeline-title">It's Showtime!</h4>
                    <p className="timeline-subtitle">17. September 2021</p>
                    <p>Official Sale starts.</p>
                  </div>
                </div>
                <div className="timeline-container info ">
                  <div className="timeline-icon">
                    <i className="far fa-grin-tears"></i>
                  </div>
                  <div className="timeline-body">
                    <h4 className="timeline-title">A Small Thank You</h4>
                    <p className="timeline-subtitle">20% of sold loot</p>
                    <p>Special Giveaway to our supporters.</p>
                  </div>
                </div>
                <div className="timeline-container primary">
                  <div className="timeline-icon">
                    <i className="far fa-grimace"></i>
                  </div>
                  <div className="timeline-body">
                    <h4 className="timeline-title">Tell Us What You Want</h4>
                    <p className="timeline-subtitle">50% of sold loot</p>
                    <p>
                      A fund of $25.000 will be set aside for a community-voted
                      idea.
                    </p>
                  </div>
                </div>
                <div className="timeline-container warning">
                  <div className="timeline-icon"></div>
                  <div className="timeline-body">
                    <h4 className="timeline-title">The Final Reveal</h4>
                    <p className="timeline-subtitle">100% of sold loot</p>
                    <p>Stories of Polyland will be revealed.</p>
                  </div>
                </div>

                <div className="timeline-container info">
                  <div className="timeline-icon"></div>
                  <div className="timeline-body">
                    <h4 className="timeline-title">Let's Do It Together!</h4>
                    <p className="timeline-subtitle">Q4 of 2021</p>
                    <p>
                      We are working on something big. More to follow after the
                      sale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    

      <div className="roadmap">
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto">
              <img className="icon" src="/static/logo.png" alt="icon" />
              <h2>Team</h2>
            </div>

            <div className="col-12 col-xl-9 mx-auto">
              <div className="row justify-content-center">
                <div className="col-6 col-md-4">
                  <div className="member">
                    <img src="/static/member/n.svg" alt="" />

                    <span className="member__name">Lucky Orc</span>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="member">
                    <img src="/static/member/f.svg" alt="" />

                    <span className="member__name">Olaf the Dwarf</span>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="member">
                    <img src="/static/member/a.svg" alt="" />

                    <span className="member__name">Glorious Khan</span>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="member">
                    <img src="/static/member/p.svg" alt="" />

                    <span className="member__name">Aurora the Elf</span>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="member">
                    <img src="/static/member/m.svg" alt="" />

                    <span className="member__name">Virtuous Druid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
