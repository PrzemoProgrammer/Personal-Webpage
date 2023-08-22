import "./App.css";
import "./fonts/fonts.css";
import Navbar from "./components/navbar/Navbar";
import HomeSection from "./components/homeSection/Section1";
import Apps from "./components/apps/Apps";
import Games from "./components/games/Games";
import Footer from "./components/footer/Footer";
import GamesVideo from "./components/games_video/Games_Video";
import MyNFTCollection from "./components/myNFTCollection/MyNFTCollection";
import Socials from "./components/socials/Socials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <Games />
      <MyNFTCollection />
      <Apps />
      <GamesVideo />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
