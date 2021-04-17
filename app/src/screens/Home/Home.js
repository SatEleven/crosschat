import "./Home-style.css";
import "./Home-script.js";
import mapPic from "./world-map.png";
const Home = () => {
  return (
    <div>
      <h1 class="header-text2">Connect. Exchange. Learn.</h1>
      <div class="header-text3">
        Connect with people from different background
        <br />
        Share your culture
        <br />
        Learn new languages
      </div>

      <button class="start-button" data-modal-target="#modal">
        Get started
      </button>
      <div class="modal" id="modal">
        <img class="world-map" src={mapPic} />
        {/* <div class="modal-header">
                    <div class="title">Example Modal</div>
                    <button data-close-button class="close-button">&times;</button>
                </div>
                <div class="modal-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod alias ut illo doloremque eum ipsum obcaecati distinctio debitis reiciendis quae quia soluta totam doloribus quos nesciunt necessitatibus, consectetur quisquam accusamus ex, dolorum, dicta vel? Nostrum voluptatem totam, molestiae rem at ad autem dolor ex aperiam. Amet assumenda eos architecto, dolor placeat deserunt voluptatibus tenetur sint officiis perferendis atque! Voluptatem maxime eius eum dolorem dolor exercitationem quis iusto totam! Repudiandae nobis nesciunt sequi iure! Eligendi, eius libero. Ex, repellat sapiente!
                </div> */}
      </div>
      <div id="overlay"></div>
    </div>
  );
};

export default Home;
