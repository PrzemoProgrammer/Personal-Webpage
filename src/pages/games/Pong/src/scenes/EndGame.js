import Phaser from "phaser";
export default class EndScene extends Phaser.Scene {
  constructor() {
    super("EndScene");
  }

  create() {
    this.gw = this.game.config.width;
    this.gh = this.game.config.height;

    this.addBackground();
    this.addText();
    this.addLogo();
    this.addButton();
  }
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
        "Well done! You made it safety through the Complexity Jungle.\n" +
          "Track your score to discover your position on the leaderboard",
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
      // const element = document.querySelector("canvas");
      // element.remove();
      // game.destroy();
      // game = new Phaser.Game(config);
    });
  }
}
