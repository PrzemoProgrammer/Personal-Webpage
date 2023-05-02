import Phaser from "phaser";
import React, { useEffect, useMemo } from "react";
import PreloadScene from "./scenes/PreloadScene.js";
import MenuScene from "./scenes/MenuScene.js";
import PlayScene from "./scenes/PlayScene.js";
import HudScene from "./scenes/HudScene.js";
import DeadScene from "./scenes/DeadScene.js";
import EndScene from "./scenes/EndGame.js";

function Game() {
  const game = useMemo(() => {
    const config = {
      type: Phaser.AUTO,
      parent: "game-container",
      physics: {
        default: "arcade",
        arcade: {
          debug: false,
          gravity: { y: 2000 },
        },
      },

      scale: {
        mode: Phaser.Scale.FIT,
        width: 1920,
        height: 1080,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      scene: [
        PreloadScene,
        MenuScene,
        PlayScene,
        HudScene,
        DeadScene,
        EndScene,
      ],
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

  return (
    <div className="pong-game">
      <div id="game-container"></div>
    </div>
  );
}

export default Game;
