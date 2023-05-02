export default class HandleInputs {
  constructor(scene) {
    this.scene = scene;
    this.cursors = scene.input.keyboard.createCursorKeys();
    this.keySPACE = scene.input.keyboard.addKey("SPACE");
    this.keyA = scene.input.keyboard.addKey("A");
    this.keyS = scene.input.keyboard.addKey("S");
    this.initKey();
    this.init();
  }

  init() {
    this.handleKeyUp();
  }

  initKey() {
    this.keySPACE.on("down", () => {
      this.scene.player.jump();
    });

    // this.keyA.on("down", () => {
    //   this.scene.player.stopp();
    // });

    // this.keyS.on("down", () => {
    //   this.scene.player.fall();
    // });
  }

  handleMovement() {
    if (this.cursors.right.isDown) {
      this.scene.player.moveRight();
    }

    if (this.cursors.left.isDown) {
      this.scene.player.moveLeft();
    }
  }

  handleKeyUp() {
    this.scene.input.keyboard.on("keyup-RIGHT", () => {
      this.onKeyUp("RIGHT");
    });

    this.scene.input.keyboard.on("keyup-LEFT", () => {
      this.onKeyUp("LEFT");
    });

    this.scene.input.keyboard.on("keyup-SPACE", () => {
      this.onKeyUp("SPACE");
    });
  }

  onKeyUp(key) {
    if (!this.scene.player.canJump) {
      this.scene.player.setVelocityX(0);
      return;
    }
    if (this.scene.player.canJump) {
      this.scene.player.setIdle();
    }
  }
}
