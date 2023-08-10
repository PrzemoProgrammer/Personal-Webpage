import Navbar from "../../../components/navbar/Navbar";
import PhaserGame from "./src/index";
import "./CorrectVocabulary.css";

function CorrectVocabulary() {
  return (
    <div className="correct-vocabulary-game-site">
      <Navbar />
      <PhaserGame />
    </div>
  );
}

export default CorrectVocabulary;
