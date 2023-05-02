import Phaser from "phaser";
import HandleInputs from "../HandleImputs";
import Player from "../Player";
import Platform from "../Platforms";
import Obstacle from "../Obstacle";
import PowerUp from "../PowerUp";

function sendScore(score) {
  // ajax request
  // console.log(score);
}

export default class PlayScene extends Phaser.Scene {
  constructor() {
    super("PlayScene");
  }

  create() {
    this.gw = this.game.config.width;
    this.gh = this.game.config.height;

    this.scene.launch("HudScene");
    this.hudScene = this.scene.get("HudScene");
    this.menuScene = this.scene.get("MenuScene");

    this.backgroundParts = [];
    this.platforms = [];
    this.platformsSTartQuantity = 15;
    this.maxNumberOfPlatforms = 188;
    this.actualNumberOfPlatforms = this.platformsSTartQuantity;
    this.blockBottleCollision = false;
    this.platformOverlap = false;
    this.blockObstacles = false;

    this.selectedSkin = this.menuScene.selectedSkin;

    this.addBackground();
    this.addPlayer();
    this.addStartPlatforms();
    this.addFinishLine();
    this.setCamera();

    this.hudScene.events.on("create", () => {
      this.player.healthBar = this.hudScene.healthBar;
    });
    this.player.setCheckCollision();
    this.handleInputs = new HandleInputs(this);

    // if(game.plugins.game.input.keyboard) {

    // }

    // this.registry.destroy();
    // this.events.off();
    // this.scene.restart();

    // console.log(game);

    // console.log(game.plugins.game.input.keyboard);
    // console.log(game.plugins.game.input.keyboard);
    // // console.log();
    // console.log(game);
  }

  update() {
    this.addNextPlatforms();

    if (this.player.body.touching.down) {
      if (!this.player.canJump) {
        this.player.setIdle();
      }
      this.player.canJump = true;
      this.platformOverlap = true;
    } else {
      this.platformOverlap = false;
      this.player.canJump = false;
      // this.player.stop();
    }

    this.checkPlayerFallDown();

    this.handleInputs.handleMovement();
  }

  addBackground() {
    for (let i = 0; i <= 9; i++) {
      let bg = this.add.image(0, 3659 * i, `bg-${i}`).setOrigin(0, 0);

      this.backgroundParts.push(bg);
    }
    this.backgroundWidth = this.gw;

    this.backgroundHeight =
      this.backgroundParts[this.backgroundParts.length - 1].height;
    this.backgroundY = this.backgroundParts[this.backgroundParts.length - 1].y;
  }

  addPlayer() {
    this.player = new Player(
      this,
      this.gw / 2,
      this.backgroundY + this.backgroundHeight - 230,
      this.selectedSkin
    );
  }

  addStartPlatforms() {
    for (let i = 0; i <= this.platformsSTartQuantity; i++) {
      this.addPlatform(i);
    }
    // this.setPlatformsX(0);
    // this.setFirstPlatform();
  }

  addNextPlatforms() {
    if (this.actualNumberOfPlatforms >= this.maxNumberOfPlatforms) return;
    if (this.player.y <= this.platforms[this.platforms.length - 10].y) {
      this.addPlatform(this.actualNumberOfPlatforms + 1);
      this.actualNumberOfPlatforms += 1;
    }
  }

  setFirstPlatform() {
    let firstPlatform = this.platforms[0];
    firstPlatform.x = this.gw / 2;
    firstPlatform.y = this.backgroundY + this.backgroundHeight - 100;
  }

  getReduceX(i) {
    if (this.player.body.y <= 9150) {
      // console.log("JAJJAJAJAJAJJAJAJAJAJAJJA");
      return 300;
    } else if (this.player.body.y <= 7000) {
      this.blockObstacles = true;
      return 600;
    }
    return 0;
  }

  getOffset() {
    if (this.player.body.y <= 9150) {
      return 300;
    }
    if (this.player.body.y <= 7500) {
      return 500;
    }
    if (this.player.body.y <= 6000) {
      return 700;
    }
    if (this.player.body.y <= 5000) {
      return 900;
    }
    return 0;
  }

  addPlatform(i) {
    let x = null;
    let y = null;

    if (i === 0) {
      x = this.gw / 2;
      y = this.backgroundY + this.backgroundHeight - 150;
    } else {
      let randomNumber = Math.floor(Phaser.Math.Between(1, 2));

      let sign = null;

      switch (randomNumber) {
        case 1:
          sign = "+";
          break;
        case 2:
          sign = "-";
          break;
      }

      let reduceX = this.getReduceX(i);
      let offset = this.getOffset();

      let number = 2;
      if (this.player.body.y <= 6000) {
        number = 1;
      }

      // console.log(number);

      // let reduceX = 0;
      // let offset = 0;

      // console.log(reduceX);

      let randomX = Math.floor(Phaser.Math.Between(400, 500));

      if (sign === "+") {
        x = this.platforms[i - 1].x + randomX - reduceX;
      }
      if (sign === "-") {
        x = this.platforms[i - 1].x - randomX + reduceX;
      }

      if (x >= this.gw - 100 - offset) {
        x = this.platforms[i - 1].x - number * randomX + reduceX;
      }

      if (x <= 100 + offset) {
        x = this.platforms[i - 1].x + number * randomX - reduceX;
      }

      // if (sign === "-") {
      //   x = this.platforms[i - 1].x - randomX;
      //   if (x >= this.gw - 100) {
      //     x = this.platforms[i - 1].x + 2 * randomX;
      //   }
      // }

      // if (sign === "+") {
      // x = this.platforms[i - 1].x + randomX - reduceX;
      // if (x >= this.gw - 100) {
      //   x = this.platforms[i - 1].x - randomX + 200 - reduceX;
      //   }
      // }

      // if (sign === "-") {
      //   x = this.platforms[i - 1].x - randomX - reduceX;
      //   if (x <= 100) {
      //     x = this.platforms[i - 1].x + randomX + 200 - reduceX;
      //   }
      // }
    }

    const platform = new Platform(
      this,
      x,
      this.backgroundY + this.backgroundHeight - 170 * i
      // this.backgroundY + this.backgroundHeight - (100 + 0.3 * i) * i - 100
    );

    if (!this.blockObstacles) {
      this.addTrees(i, platform);
      this.addBottles(i, platform);
      this.addGoats(i, platform);
    }

    this.platforms.push(platform);
    this.physics.add.collider(this.player, platform, null, () => {
      if (!this.platformOverlap) return;
      this.player.restartPositionX = platform.body.x;
      this.player.restartPositionY = platform.body.y;
    });
  }

  setCamera() {
    this.cameras.main.setBounds(
      0,
      0,
      this.gw,
      this.backgroundY + this.backgroundHeight
    );
    this.cameras.main.startFollow(this.player);
  }

  checkPlayerFallDown() {
    if (this.player.isFellDown(this.backgroundY + this.backgroundHeight)) {
      this.hudScene.stopScore = true;
      sendScore(0);
      this.scene.stop();
      this.hudScene.stopScene();
      this.scene.start("DeadScene");
      return;
    }
  }

  addGoat(platform) {
    let goat = new Obstacle(
      this,
      platform.body.x + platform.body.width / 2,
      platform.body.y,
      "goat"
    );

    if (platform.type === "big") {
      goat.x += 100;
      goat.y += 170;
    }
    if (platform.type === "small") {
      goat.x += 50;
      goat.y += 50;
    }

    if (goat.body.x <= this.gw / 2) {
      goat.flipX();
      goat.x += 50;
      goat.body.offset.x += 170;
    }

    this.physics.add.overlap(
      this.player,
      goat,
      () => {
        if (this.player.isImmortal) return;
        // console.log("goat collision");
        if (this.player.isDead()) {
          sendScore(0);
          this.scene.stop();
          this.scene.start("DeadScene");
          return;
        }
        this.player.getHurt();
        this.player.healthBar.getDamage(() => {
          // console.log("lost");
        });
      },
      undefined,
      this
    );
  }

  addGoats(i, platform) {
    if (i === 0) return;
    if (i % 15 === 0) {
      this.addGoat(platform);
    }
  }

  addBottle(i, platform) {
    let bottle = new PowerUp(
      this,
      platform.body.x + platform.body.width / 2,
      platform.body.y,
      "bottle"
    );

    if (platform.type === "big") {
      bottle.x += 130;
      bottle.y += 50;
    }
    if (platform.type === "small") {
      bottle.x += 70;
      bottle.y -= 70;
    }

    this.physics.add.overlap(
      this.player,
      bottle,
      () => {
        // console.log("bottle collision");
        bottle.destroy();
        this.hudScene.timer.addTime(5);
        // this.player.healthBar.heal();
      },
      undefined,
      this
    );
  }

  addBottles(i, platform) {
    if (i <= 10) return;

    let randomNumber = Math.floor(Phaser.Math.Between(1, 100));

    if (randomNumber <= 10) {
      this.addBottle(i, platform);
    }
  }

  addFinishLine() {
    this.finishLine = this.add.rectangle(0, 4100, this.gw, 148, 0xff6699);
    this.finishLine.setOrigin(0, 0);
    this.finishLine.setVisible(false);

    this.physics.world.enableBody(this.finishLine);
    this.finishLine.body.allowGravity = false;
    this.finishLine.body.immovable = true;

    this.physics.add.overlap(
      this.player,
      this.finishLine,
      () => {
        // console.log("win");
        sendScore(this.hudScene.score);

        // game.plugins.game.input.keyboard.destroy();
        this.scene.stop();
        this.hudScene.stopScene();
        this.scene.start("EndScene");
      },
      undefined,
      this
    );
  }

  addTree(i, platform) {
    let randomNumber = Math.floor(Phaser.Math.Between(1, 2));

    let randomNumber2 = Math.floor(Phaser.Math.Between(1, 2));
    let addX = null;
    if (randomNumber2 === 1) {
      addX = 200;
    } else {
      addX = -200;
    }

    let tree = this.add.image(
      platform.body.x + platform.body.width / 2 + addX,
      platform.body.y,
      `tree${randomNumber}`
    );
    tree.setScale(0.2);
  }

  addTrees(i, platform) {
    let randomNumber = Math.floor(Phaser.Math.Between(0, 5));
    if (randomNumber === 1) {
      this.addTree(i, platform);
    }
  }
}
