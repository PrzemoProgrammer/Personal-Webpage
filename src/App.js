import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomeSection from "./components/homeSection/Section1";
// import Video from "./components/youtube_video/Section2";
import WeatherApp from "./components/weatherApp/Section3";
import Games from "./components/games/Games";
import Footer from "./components/footer/Footer";
import GamesVideo from "./components/games_video/Games_Video";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      {/* <Video /> */}
      <Games />
      <GamesVideo />
      <WeatherApp />
      <Footer />
    </div>
  );
}

export default App;
