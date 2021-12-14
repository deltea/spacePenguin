// Create for Space
SpaceScene.prototype.create = function() {
  // Input
  game.cursors = this.input.keyboard.createCursorKeys();

  // Spaceship
  game.spaceship = this.physics.add.sprite(game.width / 2, game.height / 2, "spaceshipNormal").setGravityY(-config.physics.arcade.gravity.y).setScale(8).setDrag(30);
  game.spaceship.body.setMaxSpeed(500);
  game.spaceship.bullets = this.physics.add.group();

  // Camera
  this.cameras.main.setBounds(0, 0, game.width, game.height);
  this.physics.world.setBounds(0, 0, game.width, game.height);
  this.cameras.main.startFollow(game.spaceship, true, 0.1, 0.1);

  // Create asteroids
  game.asteroids = this.physics.add.group();
  for (var i = 0; i < 10; i++) {
    let asteroid = game.asteroids.create(game.spaceship.x, game.spaceship.y, "asteroid");
    asteroid.setScale(8);
    asteroid.setGravityY(-config.physics.arcade.gravity.y);
    asteroid.setVelocityX(Math.random() * 800);
    asteroid.setVelocityY(Math.random() * 800);
    asteroid.health = 3;
  }

  // Colliders
  this.physics.add.collider(game.spaceship.bullets, game.asteroids, function(bullet, asteroid) {
    bullet.destroy();
    asteroid.health--;
    if (asteroid.health < 1) {
      asteroid.destroy();
    }
  });
  this.physics.add.collider(game.spaceship, game.asteroids);
};
