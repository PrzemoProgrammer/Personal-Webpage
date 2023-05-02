import Phaser from "phaser";

export default class Platform extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y);
    this.scene = scene;
    this.maxX = x;
    this.maxY = y;

    this.skin = this.randomSkin();
    this.setTexture(this.skin);
    this.type = this.getType();
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this);

    this.body.allowGravity = false;
    this.body.immovable = true;

    this.setBodySize();
    // this.refreshBody();
  }

  randomSkin() {
    let randomNumber = Math.floor(Phaser.Math.Between(0, 3));

    let skin = null;
    switch (randomNumber) {
      case 0:
        skin = "rock1";
        break;
      case 1:
        skin = "rock2";
        break;
      case 2:
        skin = "rock1Crushed";
        break;
      case 3:
        skin = "rock2Crushed";
        break;
    }
    return skin;
  }

  getType() {
    let type = null;

    switch (this.skin) {
      case "rock1":
        type = "big";
        break;
      case "rock2":
        type = "small";
        break;
      case "rock1Crushed":
        type = "big";
        break;
      case "rock2Crushed":
        type = "small";
        break;
    }
    return type;
  }

  setBodySize() {
    if (this.type === "big") {
      this.body.width = 210;
      this.body.height = 60;
      this.body.offset.x = 100;
      this.body.offset.y = 190;
    } else if (this.type === "small") {
      this.body.width = 130;
      this.body.height = 50;
      this.body.offset.x = 60;
      this.body.offset.y = 60;
    }
  }
}
