import Phaser from "phaser";
export default class MenuScene extends Phaser.Scene {
  constructor() {
    super("MenuScene");
  }

  create() {
    const charID =
      new URLSearchParams(window.location.search).get("charid") || "1";

    this.gw = this.game.config.width;
    this.gh = this.game.config.height;

    // this.selectedSkin = `Character 3`;
    this.selectedSkin = `Character ${charID}`;
    this.addBackground();
    this.addText();
    this.addLogo();
    this.addPlayButton();
    this.addCharacter();
  }

  update() {
    this.moveBackground();
  }

  addLogo() {
    this.add
      .image(this.gw / 2, 55, "scalabilityMountainLogo")
      .setOrigin(0.5, 0)
      .setScale(1.1);
  }

  addBackground() {
    this.background = this.add
      .tileSprite(0, 0, 1920, 1080, "menuBackgorund")
      .setOrigin(0, 0);
  }

  moveBackground() {
    this.background.tilePositionX += 5;
  }

  addText() {
    this.addTextBackground();
    this.add
      .text(
        this.gw / 2,
        this.gh / 2,

        "USE YOUR ARROW KEYS TO NAVIGATE YOUR WAY OUT OF THE DENSE" +
          "TRIANGLE OF THE COMPLEXITY JUNGLE. " +
          "AVOID THOSE PESKY BUGS BUT KEEP AN" +
          "EYE OUT FOR SPOT POWERUPS" +
          "IT'S A RACE AGAINST THE CLOCK",
        { align: "center", font: "40px Arial", color: "black" }
      )
      .setOrigin(0.5)
      .setWordWrapWidth(this.gw * 0.6);
  }

  addPlayButton() {
    const playButton = this.add
      .image(this.gw / 2, this.gh - 200, "button")
      .setInteractive()
      .setOrigin(0.5, 1)
      .setScale(1.5);

    playButton.on("pointerdown", () => {
      this.scene.start("PlayScene");
    });
  }

  addTextBackground() {
    this.textBackground = this.add.sprite(
      this.gw / 2,
      this.gh / 2,
      "whiteBackground"
    );
  }

  addCharacter() {
    this.character = this.add
      .sprite(50, this.gh - 540, this.selectedSkin)
      .setOrigin(0, 0)
      .setScale(1.5);
    this.character.play(this.character.texture.key + "-walk");
  }
}
