import Phaser from "phaser";

export default class Obstacle extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, sprite) {
    super(scene, x, y);
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.sprite = sprite;

    this.setTexture(this.sprite);

    this.setDepth(100);
    // this.setScale(0.6);
    this.setOrigin(0.5, 1);

    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this);

    this.body.allowGravity = false;
    this.body.immovable = true;

    //   this.body.width = 140;
    //   this.body.offset.x = 70;

    //   this.body.height = 200;
    //   this.body.offset.y = 90;
  }

  flipX() {
    this.scaleX = -1;
  }
}
