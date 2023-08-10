class HandleInputs {
  constructor(scene) {
    this.scene = scene;
    // this.cursors = scene.input.keyboard.createCursorKeys();
    this.keyESC = scene.input.keyboard.addKey("ESC");

    this.init();
  }

  init() {
    this.initAttackKeys();
  }

  initAttackKeys() {
    this.keyESC.on("down", () => {
      this.scene.fullScreenOff();
    });
  }
}
