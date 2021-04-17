import "./Home-style.css";
import "./Home-script.js";
import mapPic from "./world-map.png";
import globe from "./globe.png";
import cloud1 from "./cloud1.png";
import cloud2 from "./cloud2.png";
import cloud3 from "./cloud3.png";
const Home = () => {
  return (
    <div class = "flexContainer">
      <div class="flex1">
      <h1 class="header-text2">Connect. Exchange. Learn.</h1>
        <span class="header-text3">
          Connect with people from different background
          <br />
          Share your culture
          <br />
          Learn new languages
        </span> 
      </div>
      <div class = "flex2">
        <div class = "parent">
          <img class="globe" src={globe} alt="globe"/>
            <div class="marquee1">
                <img class="cloud1" src={cloud1} alt="cloud1"/>
            </div>
            <div class="marquee2">
                <img class="cloud2" src={cloud2} alt="cloud2"/>
            </div>
            <div class="marquee3">
                <img class="cloud3" src={cloud3} alt="cloud3"/>
            </div>
        </div>
      </div>


        
        <button class="start-button" data-modal-target="#modal">
          Get started
        </button>

        



        <div class="modal" id="modal">
          <img class="world-map" src={mapPic} />
        </div>
        {/* <div id="overlay"></div> */}
        
    </div>
  );
};

export default Home;
