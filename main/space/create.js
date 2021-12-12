// Create for Space
SpaceScene.prototype.create = function() {
  // Input
  game.cursors = this.input.keyboard.createCursorKeys();

  // Background: Space Tiles
  for (var x = 0; x < game.width; x += 8 * 4) {
    for (var y = 0; y < game.height; y += 8 * 4) {
      this.add.image(x * 8, y * 8, `spaceTile${Math.round(Math.random() * 5)}`).setScale(8);
      console.log("Leo");
    }
  }

  // Spaceship
  game.spaceship = this.physics.add.sprite(game.width / 2, game.height / 2, "spaceshipNormal").setGravityY(-config.physics.arcade.gravity.y).setScale(8).setDrag(30);
  game.spaceship.body.setMaxSpeed(500);

  // Camera
  this.cameras.main.setBounds(0, 0, game.width, game.height);
  this.physics.world.setBounds(0, 0, game.width, game.height);
  this.cameras.main.startFollow(game.spaceship, true, 0.1, 0.1);
};
