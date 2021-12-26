// Preload for Space
SpaceScene.prototype.preload = function() {
  // Load images
  this.load.image("spaceshipNormal", "main/space/assets/spaceshipNormal.png");
  this.load.image("spaceshipCannon", "main/space/assets/spaceshipCannon.png");
  this.load.image("spaceshipDouble", "main/space/assets/spaceshipDouble.png");
  this.load.image("spaceshipBoth", "main/space/assets/spaceshipBoth.png");
  this.load.image("bullet", "main/space/assets/bullet.png");
  this.load.image("cannonBullet", "main/space/assets/cannonBullet.png");
  this.load.image("asteroid", "main/space/assets/asteroid.png");
  this.load.image("spaceTile", "main/space/assets/spaceTile.png");
  this.load.image("coin0", "main/space/assets/coin0.png");
  this.load.image("coi1n", "main/space/assets/coin1.png");

  // Load sounds
  this.load.audio("normalLaser", "main/space/assets/sfx/normalLaser.wav");
  this.load.audio("cannonLaser", "main/space/assets/sfx/cannonLaser.wav");
  this.load.audio("doubleLaser", "main/space/assets/sfx/doubleLaser.wav");
  this.load.audio("explosion", "main/space/assets/sfx/explosion.wav");
  this.load.audio("hurt", "main/space/assets/sfx/hurt.wav");
  this.load.audio("teleport", "main/space/assets/sfx/teleport.wav");
  this.load.audio("bigExplosion", "main/space/assets/sfx/bigExplosion.wav");
  this.load.audio("music", "main/space/assets/sfx/music.mp3");
};
