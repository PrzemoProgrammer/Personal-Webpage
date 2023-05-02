import Phaser from "phaser";

export default class PowerUp extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, sprite) {
    super(scene, x, y, sprite);
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.sprite = sprite;

    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this);
    this.setOrigin(0.5, 0);
    this.setDepth(99);
    this.setScale(1.5);

    this.body.allowGravity = false;
    this.body.immovable = true;

    // this.body.width = 140;
    // this.body.offset.x = 70;

    // this.body.height = 200;
    // this.body.offset.y = 90;
  }

  setBodyPosition(x, y) {
    this.body.x = x;
    this.body.y = y;
  }
}
