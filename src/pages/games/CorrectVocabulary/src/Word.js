export default class Word {
  constructor(scene, x, y, sprite, text) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.sprite = sprite;
    this.text = text;

    this.background = this.scene.add.sprite(0, 0, this.sprite);

    this.displayText = this.scene.add
      .text(this.background.x, this.background.y + 15, this.text, {
        fontFamily: "LuckiestGuy",
        fontSize: "70px",
        // color: "##000000",
        stroke: "##000000",
        strokeThickness: 10,
        shadow: { blur: 0, stroke: false, fill: false },
      })
      .setOrigin(0.5, 0.5);

    this.container = this.scene.add.container(this.x, this.y, [
      this.background,
      this.displayText,
    ]);
    this.container.setSize(this.background.width, this.background.height);
    this.container.setDepth(100);
    this.container.setInteractive();
  }

  onClick(cb) {
    this.container.on("pointerdown", () => {
      cb();
    });
  }

  textInput() {
    this.scene.tweens.add({
      targets: this.container,
      y: 250,
      duration: 800,
    });
  }

  appearAnim(cb) {
    this.scene.tweens.add({
      targets: this.container,
      x: 1400,
      duration: 1250,
      onComplete: () => {
        cb();
      },
    });
  }

  move() {
    this.scene.tweens.add({
      targets: this.container,
      x: -100,
      duration: 2800,
      onComplete: () => {
        this.container.destroy();
      },
    });
  }

  dead() {
    this.displayText.setVisible(false);
    this.background.play("word-dead").once("animationcomplete", () => {
      this.container.destroy();
    });
  }
}
