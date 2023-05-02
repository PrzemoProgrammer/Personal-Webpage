import Phaser from "phaser";
// import button from "../assets/button.png";

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    this.load.on("complete", () => {
      this.startMenuScene();
    });
    this.load.setPath("./src/assets");

    this.menuSceneAssets();

    this.load.image("bottle", "bottle.png");
    this.load.image("life", "life.png");

    this.load.image("goat", "goat.png");

    for (let i = 0; i <= 9; i++) {
      this.load.image(`bg-${i}`, `bg-${i}.png`);
    }

    for (let i = 1; i <= 2; i++) {
      this.load.image(`rock${i}`, `rock${i}.png`);
      this.load.image(`rock${i}Crushed`, `rock${i}Crushed.png`);
      this.load.image(`tree${i}`, `tree${i}.png`);
    }

    this.load.spritesheet("Character 1", "Character 1.png", {
      frameWidth: 1260 / 6,
      frameHeight: 310,
    });

    this.load.spritesheet("Character 2", "Character 2.png", {
      frameWidth: 1320 / 6,
      frameHeight: 330,
    });

    this.load.spritesheet("Character 3", "Character 3.png", {
      frameWidth: 1260 / 6,
      frameHeight: 310,
    });

    this.load.spritesheet("Character 4", "Character 4.png", {
      frameWidth: 1260 / 6,
      frameHeight: 310,
    });

    this.load.spritesheet("Character 1Jump", "Character 1Jump.png", {
      frameWidth: 520 / 2,
      frameHeight: 310,
    });

    this.load.spritesheet("Character 1Jump", "Character 1Jump.png", {
      frameWidth: 520 / 2,
      frameHeight: 310,
    });

    this.load.spritesheet("Character 2Jump", "Character 2Jump.png", {
      frameWidth: 520 / 2,
      frameHeight: 330,
    });

    this.load.spritesheet("Character 3Jump", "Character 3Jump.png", {
      frameWidth: 520 / 2,
      frameHeight: 310,
    });

    this.load.spritesheet("Character 4Jump", "Character 4Jump.png", {
      frameWidth: 520 / 2,
      frameHeight: 310,
    });
  }

  create() {
    this.addAnims();
  }

  menuSceneAssets() {
    this.load.image("menuBackgorund", "menuBackgorund.png");
    this.load.image("scalabilityMountainLogo", "scalabilityMountainLogo.png");
    this.load.image("button", "button.png");
    this.load.image("whiteBackground", "whiteBackground.png");
  }

  addAnims() {
    for (let i = 1; i <= 4; i++) {
      this.anims.create({
        key: `Character ${i}-walk`,
        frames: `Character ${i}`,
        frameRate: 10,
        repeat: -1,
      });

      this.anims.create({
        key: `Character ${i}-jump`,
        frames: `Character ${i}Jump`,
        frameRate: 3,
        repeat: 0,
      });
    }
  }

  startMenuScene() {
    this.scene.start("MenuScene");
  }
}
