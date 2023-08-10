import Phaser from "phaser";

export default class Character extends Phaser.GameObjects.Sprite {
  constructor(scene, y, sprite, config) {
    super(scene, y, sprite);
    this.scene = scene;

    this.y = y;
    this.sprite = sprite;
    this.config = config;
    this.type = this.config.type;

    this.x = this.config.x;
    if (this.type === "player") this.y = this.config.y;

    this.flipX = true;

    // this.speed = this.setSpeed("+");
    this.setSpeed("-");

    this.setDepth(101);
    scene.add.existing(this);

    this.idle();
  }

  update() {
    this.move();
  }

  walk() {
    this.play(this.sprite + "-walk");
  }

  idle() {
    this.play(this.sprite + "-idle");
  }

  move() {
    if (this.type === "player") return;
    this.x += this.speed;
  }

  correctAttack(target, cb) {
    this.setStartCoordinates();

    this.play(this.sprite + "-walk");

    this.scene.tweens.add({
      targets: this,
      x: target.container.x - 250,
      y: target.container.y - 50,
      duration: 1500,
      onComplete: () => {
        this.play(this.sprite + "-attack").once("animationcomplete", () => {
          cb();
          this.stepBack();
        });
      },
    });
  }

  missAttack(target, cb) {
    this.setStartCoordinates();

    this.play(this.sprite + "-walk");

    this.scene.tweens.add({
      targets: this,
      x: target.container.x - 250,
      y: target.container.y - 50,
      duration: 1500,
      onComplete: () => {
        this.play(this.sprite + "-attack").once("animationcomplete", () => {
          this.returnPosition(cb);
        });
      },
    });
  }

  returnPosition(cb) {
    this.flipX = false;
    this.play(this.sprite + "-walk");

    this.scene.tweens.add({
      targets: this,
      x: this.startPositionX,
      y: this.startPositionY,
      duration: 1500,
      onComplete: () => {
        cb();
        this.flipX = true;
        this.play(this.sprite + "-idle");
      },
    });
  }

  stepBack() {
    this.play(this.sprite + "-walk");
    this.scene.tweens.add({
      targets: this,
      x: this.startPositionX,
      duration: 2500,
      onComplete: () => {
        // this.banner.destroy();
      },
    });
  }

  setStartCoordinates() {
    this.startPositionX = this.x;
    this.startPositionY = this.y;
  }

  setSpeed(sign) {
    let speed = null;

    switch (sign) {
      case "+":
        speed = Phaser.Math.Between(2, 5) * 0.6;
        break;
      case "-":
        speed = Phaser.Math.Between(-1, -5) * 0.6;
        break;
      default:
    }
    this.speed = speed;
  }

  setPositionAnim(target, cb) {
    this.scene.tweens.add({
      targets: this,
      x: target.x + 400,
      duration: 1500,
      onComplete: () => {
        this.idle();
        cb();
      },
    });
  }
}
