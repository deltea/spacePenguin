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

  // Create a group of asteroids
  game.asteroids = this.physics.add.group();
};
