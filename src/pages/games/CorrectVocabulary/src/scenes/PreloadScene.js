import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    const imagePath = "./images/CorrectVocabulary/";

    this.load.setPath(imagePath);
    this.load.image("background", "background.png");
    this.load.image("menuBackground", "menuBackground.png");
    this.load.image("button", "button.png");
    this.load.image("chooseFrame", "chooseFrame.png");
    this.load.image("full-screen", "full-screen.png");
    this.load.image("finishLine", "finishLine.png");
    this.load.image("restartButton", "restartButton.png");
    this.load.image("finishGameScreen", "finishGameScreen.png");

    this.load.image("rock", "rock.png");

    this.load.image("characterTheme0", "characterTheme1.png");
    this.load.image("characterTheme1", "characterTheme2.png");
    this.load.image("characterTheme2", "characterTheme3.png");
    this.load.image("characterTheme3", "characterTheme4.png");
    this.load.image("characterTheme4", "characterTheme5.png");

    this.load.image("textTheme", "textTheme.png");

    this.load.spritesheet("skin1Idle", "skin1Idle.png", {
      frameWidth: 8338 / 20,
      frameHeight: 304,
    });

    this.load.spritesheet("skin1Walk", "skin1Walk.png", {
      frameWidth: 8338 / 20,
      frameHeight: 304,
    });

    this.load.spritesheet("skin1Attack", "skin1Attack.png", {
      frameWidth: 10422 / 25,
      frameHeight: 304,
    });

    this.load.spritesheet("skin2Idle", "skin2Idle.png", {
      frameWidth: 11473 / 20,
      frameHeight: 419,
    });

    this.load.spritesheet("skin2Walk", "skin2Walk.png", {
      frameWidth: 11473 / 20,
      frameHeight: 419,
    });

    this.load.spritesheet("skin2Attack", "skin2Attack.png", {
      frameWidth: 9752 / 17,
      frameHeight: 419,
    });

    this.load.spritesheet("skin3Idle", "skin3Idle.png", {
      frameWidth: 6878 / 20,
      frameHeight: 251,
    });

    this.load.spritesheet("skin3Walk", "skin3Walk.png", {
      frameWidth: 6878 / 20,
      frameHeight: 251,
    });

    this.load.spritesheet("skin3Attack", "skin3Attack.png", {
      frameWidth: 5158 / 15,
      frameHeight: 251,
    });

    this.load.spritesheet("skin4Idle", "skin4Idle.png", {
      frameWidth: 10715 / 20,
      frameHeight: 391,
    });

    this.load.spritesheet("skin4Walk", "skin4Walk.png", {
      frameWidth: 10715 / 20,
      frameHeight: 391,
    });

    this.load.spritesheet("skin4Attack", "skin4Attack.png", {
      frameWidth: 9644 / 18,
      frameHeight: 391,
    });

    this.load.spritesheet("skin5Idle", "skin5Idle.png", {
      frameWidth: 5755 / 14,
      frameHeight: 300,
    });

    this.load.spritesheet("skin5Walk", "skin5Walk.png", {
      frameWidth: 8222 / 20,
      frameHeight: 300,
    });

    this.load.spritesheet("skin5Attack", "skin5Attack.png", {
      frameWidth: 7400 / 18,
      frameHeight: 300,
    });

    this.load.spritesheet("wordDead", "wordDead.png", {
      frameWidth: 8980 / 20,
      frameHeight: 376,
    });

    this.load.audio("click", "audio/click.mp3");
    this.load.audio("countingDown", "audio/countingDown.mp3");
    this.load.audio("rockHit", "audio/rockHit.mp3");
    this.load.audio("rockSmash", "audio/rockSmash.mp3");
    this.load.audio("win", "audio/win.mp3");
  }

  create() {
    this.addAnims();
    this.addSounds();
    this.startMenuScene();
  }

  addAnims() {
    for (let i = 1; i <= 5; i++) {
      this.anims.create({
        key: `skin${i}-idle`,
        frames: `skin${i}Idle`,
        frameRate: 15,
        repeat: -1,
      });

      this.anims.create({
        key: `skin${i}-walk`,
        frames: `skin${i}Walk`,
        frameRate: 25,
        repeat: -1,
      });

      this.anims.create({
        key: `skin${i}-attack`,
        frames: `skin${i}Attack`,
        frameRate: 25,
        repeat: 0,
      });
    }

    this.anims.create({
      key: `word-dead`,
      frames: `wordDead`,
      frameRate: 15,
      repeat: 0,
    });
  }

  addSounds() {
    this.click = this.sound.add("click", { volume: 0.3 });
    // this.click.volume = 0.3;

    this.countingDown = this.sound.add("countingDown", { volume: 0.2 });
    // this.countingDown.volume = 0.2;

    this.rockHit = this.sound.add("rockHit");
    // this.rockHitAUdio.volume = 0.3;

    this.rockSmash = this.sound.add("rockSmash", { volume: 0.3 });
    this.rockSmash.volume = 0.3;

    this.win = this.sound.add("win", { volume: 0.3 });
    this.win.volume = 0.3;
  }

  startMenuScene() {
    this.scene.start("MenuScene");
  }
}
