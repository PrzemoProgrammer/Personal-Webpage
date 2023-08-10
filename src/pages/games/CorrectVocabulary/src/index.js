import Phaser from "phaser";
import { useEffect, useMemo } from "react";
// import React from "react";
import PreloadScene from "./scenes/PreloadScene.js";
import MenuScene from "./scenes/MenuScene.js";
import PlayScene from "./scenes/PlayScene.js";

function Game() {
  const game = useMemo(() => {
    const config = {
      type: Phaser.AUTO,
      physics: {
        default: "arcade",
        arcade: {
          debug: false,
          gravity: { y: 0.1 },
        },
      },

      scale: {
        mode: Phaser.Scale.FIT,
        width: 1920,
        height: 1080,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      scene: [PreloadScene, MenuScene, PlayScene],
    };

    return new Phaser.Game(config);
  }, []);

  useEffect(() => {
    return () => {
      game.destroy(true);
    };
  }, [game]);

  useEffect(() => {
    const handlePopstate = () => {
      window.location.reload();
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [game]);

  // return (
  //   <div className="correct-vocabulary-game">
  //     <div id="game-container"></div>
  //   </div>
  // );
}
export default Game;
