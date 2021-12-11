// Create for Space
SpaceScene.prototype.create = function() {
  // Background: Space Tiles
  for (var x = 0; x < 110; x++) {
    for (var y = 0; y < 11; y++) {
      this.add.image(x * 8 * 8, y * 8 * 8, `spaceTile${Math.round(Math.random() * 5)}`).setScale(8);
    }
  }
};
