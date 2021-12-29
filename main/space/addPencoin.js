// Function for adding a Pencoin
game.space.addPencoin = (phaser, asteroid) => {
  let pencoin = game.space.pencoin.create(asteroid.x, asteroid.y, "coin0").setScale(8);
}
