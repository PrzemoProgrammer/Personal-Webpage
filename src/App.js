import "./App.css";
import "./fonts/fonts.css";
import Navbar from "./components/navbar/Navbar";
import HomeSection from "./components/homeSection/Section1";
import WeatherApp from "./components/weatherApp/Section3";
import Games from "./components/games/Games";
import Footer from "./components/footer/Footer";
import GamesVideo from "./components/games_video/Games_Video";
import MyNFTCollection from "./components/myNFTCollection/MyNFTCollection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <Games />
      <MyNFTCollection />
      <GamesVideo />
      <WeatherApp />
      <Footer />
    </div>
  );
}

export default App;
