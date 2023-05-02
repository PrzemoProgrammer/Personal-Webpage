import Phaser from "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, sprite) {
    super(scene, x, y, sprite);
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.sprite = sprite;

    this.canJump = false;
    this.canWalk = true;
    this.isImmortal = false;
    this.restartPositionX = null;
    this.restartPositionY = null;

    this.setScale(0.8);

    this.scene.add.existing(this);
    // this.scene.physics.arcade.enable(this);
    this.scene.physics.world.enableBody(this);

    this.setDepth(100);

    this.healthBar = {};
    this.speed = 600;
    this.canJump = false;
    this.jumpHeight = -1400;

    this.body.width = 110;
    this.body.offset.x = 40;

    // this.body.mass = 100;
    // this.body.setMass(100);
  }

  jump() {
    if (this.canJump) {
      this.body.setVelocityY(this.jumpHeight);
      this.play(this.sprite + "-jump", true);
    }
  }

  onMove() {
    if (this.canJump) {
      this.play(this.sprite + "-walk", true);
    }
  }

  stopWalk() {
    this.anims.stop();
  }

  isFellDown(gameHeight) {
    return this.y >= gameHeight + 1000;
  }

  setIdle() {
    this.setVelocityX(0);
    this.play(this.sprite + "-walk", true);
    this.stop();
  }

  moveLeft() {
    this.setFlipX(true);
    this.setVelocityX(-this.speed);
    this.onMove();
  }

  moveRight() {
    this.setFlipX(false);
    // this.character.flipX = false
    this.setVelocityX(this.speed);
    this.onMove();
  }

  flick() {
    this.scene.tweens.add({
      targets: this,
      alpha: 0.3,
      duration: 400,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        this.clearTint();
        this.isImmortal = false;
        // cb();
      },
    });
  }

  setRedColor() {
    this.setTint(0xff0000);
  }

  getHurt() {
    this.isImmortal = true;
    // this.healthBar.getDamage();
    this.setRedColor();
    this.flick();
  }

  moveLeft() {
    this.setFlipX(true);
    this.setVelocityX(-this.speed);
    this.onMove();
    // this.character.play(this.state.walkRight, true)
  }

  moveRight() {
    this.setFlipX(false);
    // this.character.flipX = false
    this.setVelocityX(this.speed);
    this.onMove();
    // this.character.play(this.state.walkRight, true);
  }

  setCheckCollision() {
    this.body.checkCollision.up = false;
    this.body.checkCollision.left = false;
    this.body.checkCollision.right = false;
  }

  isDead() {
    return this.healthBar.isDead();
  }

  isFellDown(gameHeight) {
    return this.y >= gameHeight + 1000;
  }

  stopp() {
    this.setVelocity(0);
  }

  fall() {
    this.body.setVelocityY(2000);
  }

  restartPosition() {
    this.setVelocity(0);
    this.body.x = this.restartPositionX;
    this.body.y = this.restartPositionY - this.body.height;
  }
}
