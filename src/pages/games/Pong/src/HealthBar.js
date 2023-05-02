export default class HealthBar {
  constructor(scene, x, y) {
    this.scene = scene;
    this.x = x;
    this.y = y;

    // this.hits = 0;
    this.life = this.addLife();
    this.lifeCount = this.life.length;

    this.text = this.scene.add.text(this.x, this.y, "ENERGY", {
      fontFamily: "ESCAPE",
      fontSize: "70px",
      color: "#FFFFFF",
      stroke: "#000000",
      strokeThickness: 5,
      shadow: { blur: 0, stroke: false, fill: false },
    });

    // this.energyBar = this.scene.add
    //   .sprite(
    //     this.text.x + this.text.displayWidth + 30,
    //     this.text.y + this.text.displayHeight / 2 - 7,
    //     this.sprite
    //   )
    //   .setOrigin(0, 0.5)
    //   .setScale(1.2);
  }

  addLife() {
    const life = [];

    for (let i = -1; i < 5 - 1; i++) {
      const lifeImg = this.scene.add
        .sprite(100 * i + 400, 70, "life")
        .setScale(1.3)
        .setDepth(2);

      this.scene.tweens.add({
        targets: lifeImg,
        scale: 1.1,
        yoyo: true,
        repeat: -1,
        duration: 1000,
      });
      life.push(lifeImg);
    }
    return life;
  }

  getDamage(cb) {
    if (this.isDead()) {
      cb();
      return;
    }
    this.life[this.lifeCount - 1].setAlpha(0.2);
    this.lifeCount--;
  }

  heal() {
    if (this.lifeCount === this.life.length) return;
    this.lifeCount++;
    this.life[this.lifeCount - 1].setAlpha(1);
  }

  isDead() {
    return this.lifeCount - 1 === 0;
  }

  // getDamage() {
  //   this.hits++;
  //   this.updateTexture();
  // }

  // updateTexture() {
  //   let texture = null;
  //   switch (this.hits) {
  //     case 0:
  //       texture = "energyBar1";
  //       break;
  //     case 1:
  //       texture = "energyBar2";
  //       break;
  //     case 2:
  //       texture = "energyBar3";
  //       break;
  //   }
  //   this.energyBar.setTexture(texture);
  // }

  // energyUP() {
  //   this.hits--;
  //   this.updateTexture();
  // }

  // isDead() {
  //   return this.hits === 3;
  // }

  // isFull() {
  //   return this.hits === 0;
  // }
}
