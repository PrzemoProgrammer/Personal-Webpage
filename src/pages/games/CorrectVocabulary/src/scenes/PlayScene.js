// let score = 0;
// let bestScore = Number(localStorage.getItem("bestScore")) || 0;
import Phaser from "phaser";
import Character from "../Character";
import Word from "../Word";
import PopupWindow from "../PopupWIndow";
import Timer from "../Timer";
import enemyConfig from "../config/EnemiesConfig";
import playerConfig from "../config/PlayerConfig";

import { WORDS, CORRECT_WORDS } from "../gameConfig";

export default class PlayScene extends Phaser.Scene {
  constructor() {
    super("PlayScene");
  }

  create() {
    this.gw = this.game.config.width;
    this.gh = this.game.config.height;

    this.isGameStart = false;
    this.isBackgroundStop = false;
    this.isClickBlocked = true;
    this.playerX = null;
    this.playerFInishPlace = null;

    this.wordsContainer = WORDS;
    this.correctWords = CORRECT_WORDS;

    this.menuScene = this.scene.get("MenuScene");
    this.audio = this.scene.get("PreloadScene");
    this.selectedSkin = this.menuScene.selectedSkin;

    this.wordsContainerIndex = 0;

    this.words = [];
    this.characters = [];

    this.charactersConfig = [playerConfig, enemyConfig];

    this.addBackground();
    this.addFullScreenButton();
    this.addCharacters();
    this.addWords();
    this.startGame();
  }

  update() {
    this.fullScreenVisible();
    this.updateDepth();

    if (!this.isGameStart)
      this.countingDown.updateTimer(() => {
        this.isGameStart = true;
        this.characters.forEach((character) => character.walk());
      });

    if (this.isGameStart) {
      this.characters.forEach((character) => character.move());
      if (!this.isBackgroundStop) this.moveBackground();
    }
  }

  addFullScreenButton() {
    this.fullscreen = this.add
      .image(this.gw - 5, 5, "full-screen")
      .setOrigin(1, 0)
      .setScale(2)
      .setDepth(99999);
    this.fullscreen.setInteractive();

    this.fullscreen.on("pointerup", () => {
      this.fullscreen.setActive(false);
      this.fullscreen.setVisible(false);
      this.scale.startFullscreen();
    });
  }

  fullScreenVisible() {
    if (!this.scale.isFullscreen && !this.fullscreen.active) {
      this.fullscreen.setActive(true);
      this.fullscreen.setVisible(true);
    } else if (this.scale.isFullscreen && this.fullscreen.active) {
      this.fullscreen.setActive(false);
      this.fullscreen.setVisible(false);
    }
  }

  addBackground() {
    this.background = this.add
      .tileSprite(0, 0, 1920, 1080, "background")
      .setOrigin(0, 0);
    // .setDisplaySize(this.gw, this.gh);
  }

  moveBackground() {
    this.background.tilePositionX += 9;
  }

  addCharacter(i, characterConfig) {
    let skin = this.setSkins(i, characterConfig);

    let character = new Character(this, 220 * i + 100, skin, characterConfig);
    this.characters.push(character);
  }

  addCharacters() {
    this.charactersConfig.forEach((characterConfig) => {
      for (let i = 1; i <= characterConfig.count; i++) {
        this.addCharacter(i, characterConfig);
      }
    });
  }

  startGame() {
    this.countingDown = new Timer(this, this.gw / 2 - 50, this.gh / 2 - 50);
    this.audio.countingDown.play();
  }

  setSkins(i, characterConfig) {
    let skin = "skin1";

    switch (i) {
      case 1:
        skin = "skin2";
        break;
      case 2:
        skin = "skin3";
        break;
      case 3:
        skin = "skin4";
        break;
      case 4:
        skin = "skin5";
        break;
      default:
    }

    if (characterConfig.type === "player") {
      skin = this.selectedSkin;
    }

    return skin;
  }

  addWord(i, text) {
    let word = new Word(this, this.gw + 150, 300 * i + 200, "rock", text);
    this.words.push(word);
    this.setClickAble(word);
    word.appearAnim(() => {
      this.characters.forEach((character) => {
        character.setSpeed("+");
        if (character.config.type === "player") {
          character.idle();
          this.isClickBlocked = false;
        }
      });
      this.isBackgroundStop = true;
    });
  }

  addWords() {
    this.time.delayedCall(8000, () => {
      let wordsPull = this.wordsContainer[this.wordsContainerIndex];

      for (let i = 0; i <= wordsPull.length - 1; i++) {
        this.addWord(i, wordsPull[i]);
      }

      this.wordsContainerIndex++;
    });
  }

  setClickAble(word) {
    word.onClick(() => {
      if (this.isClickBlocked) return;
      this.isClickBlocked = true;
      if (this.correctWords.includes(word.text)) {
        this.characters.forEach((character) => {
          if (character.config.type === "player") {
            character.correctAttack(word, () => {
              this.words.forEach((word_) => word_.move());
              word.dead();
              this.characters.forEach((character) => character.setSpeed("-"));
              this.isBackgroundStop = false;
              // this.time.delayedCall(2000, () => {
              this.audio.rockSmash.play();
              // });

              if (!this.isGameFinished()) {
                this.addWords();
              } else {
                this.time.delayedCall(1800, () => {
                  this.addFinishLine();
                });
              }
            });
          }
        });
        console.log(true);
      } else {
        this.time.delayedCall(2000, () => {
          this.audio.rockHit.play();
        });

        this.characters.forEach((character) => {
          if (character.config.type === "player") {
            character.missAttack(word, () => {
              this.isClickBlocked = false;
            });
          }
        });
        console.log(false);
      }
    });
  }

  isGameFinished() {
    return this.wordsContainerIndex >= this.wordsContainer.length;
  }

  updateDepth() {
    this.characters.forEach((character) => character.setDepth(character.y));
  }

  addFinishLine() {
    console.log("finish");
    this.finishLine = this.add
      .image(this.gw + 600, 90, "finishLine")
      .setOrigin(0, 0);

    this.tweens.add({
      targets: this.finishLine,
      x: this.gw - 700,
      duration: 2500,
      onComplete: () => {
        this.isBackgroundStop = true;

        this.characters.forEach((character) => {
          character.setSpeed("+");
          if (character.config.type === "player") {
            character.setPositionAnim(this.finishLine, () => {
              this.setCharacterPlace();
              this.audio.win.play();
              this.addFinishGameScreen();
            });
          }
        });
      },
    });
  }

  setCharacterPlace() {
    let charactersX = [];

    this.characters.forEach((character) => {
      charactersX.push(character.x);
      if (character.type === "player") {
        this.playerX = character.x;
      }
    });

    let sortedCharactersX = charactersX.sort((a, b) => b - a);

    this.playerFInishPlace =
      sortedCharactersX.findIndex((characterX) => characterX === this.playerX) +
      1;
  }

  addFinishGameScreen() {
    let finishGameScreen = new PopupWindow(
      this,
      0,
      0,
      "finishGameScreen",
      this.playerFInishPlace
    );
    finishGameScreen.onClick(() => {
      console.log("restart");
      this.scene.restart();
    });
  }
}
