// Create for Space
SpaceScene.prototype.create = function() {
  // Input
  game.cursors = this.input.keyboard.createCursorKeys();

  // Background: Space Tiles
  for (var x = 0; x < 110; x++) {
    for (var y = 0; y < 11; y++) {
      this.add.image(x * 8 * 8, y * 8 * 8, `spaceTile${Math.round(Math.random() * 5)}`).setScale(8);
    }
  }

  // Spaceship
  game.spaceship = this.physics.add.sprite(500, 500, "spaceshipNormal").setGravityY(-config.physics.arcade.gravity.y).setScale(8).setDrag(30);
  this.physics.world.wrap(game.spaceship, 32);
};
