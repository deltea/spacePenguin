// Update for Space
SpaceScene.prototype.update = function() {
  // Controls
  if (game.space.cursors.up.isDown) {
    this.physics.velocityFromAngle(game.space.spaceship.angle - 90, 200, game.space.spaceship.body.acceleration);
  } else {
    game.space.spaceship.setAcceleration(0);
  }
  if (game.space.cursors.right.isDown) {
    game.space.spaceship.body.setAngularVelocity(200);
  } else if (game.space.cursors.left.isDown) {
    game.space.spaceship.body.setAngularVelocity(-200);
  } else {
    game.space.spaceship.body.setAngularVelocity(0);
  }

  // Shooting
  const spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  if /*game.space.cursors.space.isDown*/(Phaser.Input.Keyboard.JustDown(spacebar)) {
    let texture = "";
    let x = 0;
    if (game.space.mode === "normal") {
      game.space.sfx.normalLaser.play();
      texture = "bullet";
      x = game.space.spaceship.x - 4;
    } else if (game.space.mode === "cannon") {
      game.space.sfx.cannonLaser.play();
      texture = "cannonBullet";
      x = game.space.spaceship.x - 4;
    } else if (game.space.mode === "double") {
      game.space.sfx.doubleLaser.play();
      texture = "bullet";
      x = game.space.spaceship.x - 35;
    } else {
      game.space.sfx.doubleLaser.play();
      game.space.sfx.cannonLaser.play();
      texture = "cannonBullet";
      x = game.space.spaceship.x - 4;
    }
    game.space.addBullet(this, x, game.space.spaceship.y, texture);
    if (game.space.mode === "double" || game.space.mode === "both") {
      game.space.addBullet(this, game.space.spaceship.x + 30, game.space.spaceship.y, "bullet");
    }
    if (game.space.mode === "both") {
      game.space.addBullet(this, game.space.spaceship.x - 35, game.space.spaceship.y, "bullet");
    }
  }

  // World wraps
  this.physics.world.wrap(game.space.spaceship);
  this.physics.world.wrap(game.space.asteroids);

  // Add ship upgrades
  if (game.space.mode === "normal") {
    game.space.spaceship.setTexture("spaceshipNormal");
  } else if (game.space.mode === "cannon") {
    game.space.spaceship.setTexture("spaceshipCannon");
  } else if (game.space.mode === "double") {
    game.space.spaceship.setTexture("spaceshipDouble");
  } else {
    game.space.spaceship.setTexture("spaceshipBoth");
  }
};
