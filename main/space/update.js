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
  if (Phaser.Input.Keyboard.JustDown(spacebar)) {
    let texture = "";
    let x = 0;
    if (game.mode === "normal") {
      texture = "bullet";
      x = game.spaceship.x - 4;
    } else if (game.mode === "cannon") {
      texture = "cannonBullet";
      x = game.spaceship.x - 4;
    } else if (game.mode === "double") {
      texture = "bullet";
      x = game.spaceship.x - 35;
    } else {
      texture = "cannonBullet";
      x = game.spaceship.x - 4;
    }
    let bullet = game.spaceship.bullets.create(x, game.spaceship.y, texture).setScale(8);
    bullet.setGravityY(-config.physics.arcade.gravity.y);
    this.physics.velocityFromAngle(game.spaceship.angle - 90, 500, bullet.body.velocity);
    if (game.mode === "double" || game.mode === "both") {
      let bullet = game.spaceship.bullets.create(game.spaceship.x + 30, game.spaceship.y, "bullet").setScale(8);
      bullet.setGravityY(-config.physics.arcade.gravity.y);
      this.physics.velocityFromAngle(game.spaceship.angle - 90, 500, bullet.body.velocity);
    }
    if (game.mode === "both") {
      let bullet = game.spaceship.bullets.create(game.spaceship.x - 35, game.spaceship.y, "bullet").setScale(8);
      bullet.setGravityY(-config.physics.arcade.gravity.y);
      this.physics.velocityFromAngle(game.spaceship.angle - 90, 500, bullet.body.velocity);
    }
  }
  
  // World wrap
  this.physics.world.wrap(game.spaceship);

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
