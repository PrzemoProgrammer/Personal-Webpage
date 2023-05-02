import Phaser from "phaser";
export default class DeadScene extends Phaser.Scene {
  constructor() {
    super("DeadScene");
  }

  create() {
    this.gw = this.game.config.width;
    this.gh = this.game.config.height;

    this.addBackground();
    this.addText();
    this.addLogo();
    this.addButton();
  }

  update() {}

  addBackground() {
    this.cameras.main.setBackgroundColor(0xffffff);
  }

  addLogo() {
    this.add
      .image(this.gw / 2, 40, "scalabilityMountainLogo")
      .setOrigin(0.5, 0)
      .setScale(1.1);
  }

  addText() {
    this.add
      .text(
        this.gw / 2,
        this.gh / 2,
        "Oh no! The maze was a bit too tricky to navigate that time around\n" +
          "Why not try again to see if you can make it through to the end (gaining more points as you go)?",
        { align: "center", font: "50px Arial", color: "black" }
      )
      .setOrigin(0.5)
      .setWordWrapWidth(this.gw * 0.8);
  }

  addButton() {
    const playButton = this.add
      .image(this.gw / 2, this.gh - 40, "button")
      .setInteractive()
      .setOrigin(0.5, 1)
      .setScale(1.5);

    playButton.on("pointerdown", () => {
      this.scene.restart("PlayScene");
      this.scene.start("PlayScene");
    });
  }
}
