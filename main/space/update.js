// Update for Space
SpaceScene.prototype.update = function() {
  // Controls
  if (game.cursors.up.isDown) {
    this.physics.velocityFromAngle(game.spaceship.angle - 90, 200, game.spaceship.body.acceleration);
  } else {
    game.spaceship.setAcceleration(0);
  }
  if (game.cursors.right.isDown) {
    game.spaceship.body.setAngularVelocity(200);
  } else if (game.cursors.left.isDown) {
    game.spaceship.body.setAngularVelocity(-200);
  } else {
    game.spaceship.body.setAngularVelocity(0);
  }

  // Shooting
  const spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  if /*game.cursors.space.isDown*/(Phaser.Input.Keyboard.JustDown(spacebar)) {
    let texture = "";
    let x = 0;
    if (game.mode === "normal") {
      game.sfx.normalLaser.play();
      texture = "bullet";
      x = game.spaceship.x - 4;
    } else if (game.mode === "cannon") {
      game.sfx.cannonLaser.play();
      texture = "cannonBullet";
      x = game.spaceship.x - 4;
    } else if (game.mode === "double") {
      game.sfx.doubleLaser.play();
      texture = "bullet";
      x = game.spaceship.x - 35;
    } else {
      game.sfx.doubleLaser.play();
      game.sfx.cannonLaser.play();
      texture = "cannonBullet";
      x = game.spaceship.x - 4;
    }
    let bullet = game.spaceship.bullets.create(x, game.spaceship.y, texture).setScale(8);
    bullet.setGravityY(-config.physics.arcade.gravity.y);
    this.physics.velocityFromAngle(game.spaceship.angle - 90, 1000, bullet.body.velocity);
    if (game.mode === "double" || game.mode === "both") {
      let bullet = game.spaceship.bullets.create(game.spaceship.x + 30, game.spaceship.y, "bullet").setScale(8);
      bullet.setGravityY(-config.physics.arcade.gravity.y);
      this.physics.velocityFromAngle(game.spaceship.angle - 90, 1000, bullet.body.velocity);
    }
    if (game.mode === "both") {
      let bullet = game.spaceship.bullets.create(game.spaceship.x - 35, game.spaceship.y, "bullet").setScale(8);
      bullet.setGravityY(-config.physics.arcade.gravity.y);
      this.physics.velocityFromAngle(game.spaceship.angle - 90, 1000, bullet.body.velocity);
    }
  }

  // World wraps
  this.physics.world.wrap(game.spaceship);
  this.physics.world.wrap(game.asteroids);

  // Add ship upgrades
  if (game.mode === "normal") {
    game.spaceship.setTexture("spaceshipNormal");
  } else if (game.mode === "cannon") {
    game.spaceship.setTexture("spaceshipCannon");
  } else if (game.mode === "double") {
    game.spaceship.setTexture("spaceshipDouble");
  } else {
    game.spaceship.setTexture("spaceshipBoth");
  }
};
