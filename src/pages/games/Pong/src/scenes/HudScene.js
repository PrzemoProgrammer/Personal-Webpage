import Phaser from "phaser";
import HealthBar from "../HealthBar";
import Timer from "../Timer";

export default class HudScene extends Phaser.Scene {
  constructor() {
    super("HudScene");
  }

  create() {
    this.stopScore = false;
    this.playScene = this.scene.get("PlayScene");
    this.healthBar = new HealthBar(this, 40, 30, "life");
    this.score = 0;
    this.timer = new Timer(this, 40, 100);

    this.blockSceneUpdate = false;
  }

  update() {
    this.score = this.getScore();
    this.timer.updateTimer(() => {
      if (this.blockSceneUpdate) return;
      // AJAX REQUEST HERE
      // this.score
      // sendScore(this.score);
      this.blockSceneUpdate = true;
      // console.log(1);
      this.scene.stop();
      this.playScene.scene.stop();
      this.scene.start("DeadScene");
    });
  }

  subtractPoints(points) {
    this.score -= points;
    this.updatePoints();
  }

  getScore() {
    if (this.stopScore) return;
    let score = this.score;
    switch (this.timer.onlySeconds) {
      case 85:
        score = 50;
        break;
      case 60:
        score = 40;
        break;
      case 50:
        score = 35;
        break;
      case 40:
        score = 30;
        break;
      case 30:
        score = 25;
        break;
      case 20:
        score = 20;
        break;
      case 10:
        score = 10;
        break;
      case 0:
        score = 0;
        break;
    }
    return score;
  }

  stopScene() {
    this.scene.stop();
  }
}
