import Navbar from "../../components/navbar/Navbar";
import Games from "../../components/games/Games";

import "./Games.css";

function GamesPage() {
  return (
    <div className="games-page">
      <Navbar />
      <Games />
    </div>
  );
}

export default GamesPage;
