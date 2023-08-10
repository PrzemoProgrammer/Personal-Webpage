import Phaser from "phaser";

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super("MenuScene");
  }

  create() {
    this.gw = this.game.config.width;
    this.gh = this.game.config.height;

    this.audio = this.scene.get("PreloadScene");

    this.selectedSkin = null;
    this.addBackground();
    this.addCharacterThemes();
    this.addChooseFrame();
    this.addCharacters();
    this.addText();
    this.addButton();
  }

  update() {}

  addBackground() {
    this.background = this.add.image(0, 0, "menuBackground").setOrigin(0, 0);
  }

  addCharacterTheme(i) {
    let theme = this.add
      .image(384 * i, 0, "characterTheme" + i)
      .setOrigin(0, 0);
    theme.setInteractive();
    theme.on("pointerdown", () => {
      this.audio.click.play();
      this.chooseFrame.setPosition(
        theme.x + this.chooseFrame.width / 2 - 40,
        theme.y + this.chooseFrame.height / 2 - 40
      );

      this.playButton.setActive(true);
      this.playButton.setVisible(true);

      switch (i) {
        case 0:
          this.selectedSkin = "skin1";
          this.chooseFrame.setTint(0xff0000);
          break;
        case 1:
          this.selectedSkin = "skin2";
          this.chooseFrame.setTint(0x0ff00);
          break;
        case 2:
          this.selectedSkin = "skin3";
          this.chooseFrame.setTint(0xffd700);
          break;
        case 3:
          this.selectedSkin = "skin4";
          this.chooseFrame.setTint(0x0ffff);
          break;
        case 4:
          this.selectedSkin = "skin5";
          this.chooseFrame.setTint(0x020f0);
          break;
        default:
      }
    });
  }

  addCharacterThemes() {
    for (let i = 0; i <= 4; i++) {
      this.addCharacterTheme(i);
    }
  }

  addCharacter(i) {
    let skin = "skin" + i;
    let character = this.add
      .sprite(
        360 * i - 160,
        this.background.y + this.background.height - 500,
        skin
      )
      .setScale(1.5)
      .setInteractive()
      .play(skin + "-idle");

    switch (i) {
      case 1:
        break;
      case 2:
        character.x -= 10;
        character.y -= 70;
        break;
      case 3:
        character.x += 20;
        break;
      case 4:
        character.y -= 40;
        break;
      case 5:
        character.x += 50;
        break;
      default:
    }
  }

  addCharacters() {
    for (let i = 1; i <= 5; i++) {
      this.addCharacter(i);
    }
  }

  addChooseFrame() {
    this.chooseFrame = this.add.image(-250, -100, "chooseFrame");
  }

  addButton() {
    this.playButton = this.add
      .image(
        this.background.x + this.background.width / 2,
        this.background.y + this.background.height - 100,
        "button"
      )
      .setInteractive()
      .setOrigin(0.5, 1)
      .setVisible(false)
      .setActive(false);

    this.playButton.on("pointerdown", () => {
      this.audio.click.play();
      this.scene.start("PlayScene");
    });
  }

  addText() {
    const textConfig = {
      fontFamily: "LuckiestGuy",
      fontSize: "110px",
      //   color: "#FFFF00",
      stroke: "#000000",
      strokeThickness: 30,
      shadow: { blur: 0, stroke: false, fill: false },
    };

    this.text = this.add
      .text(
        this.background.x + this.background.width / 2,
        this.background.y + 100,
        "Choose Character",
        textConfig
      )
      .setOrigin(0.5)
      .setWordWrapWidth(this.gw * 0.8);
  }
}
