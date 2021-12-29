// Phaser config
const config = {
  // Type
  type: Phaser.AUTO,

  // Scaling
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
    mode: Phaser.Scale.RESIZE
  },

  // Rendering options
  render: {
    pixelArt: true
  },

  // Space
  backgroundColor: 0x000000,

  // Physics
  physics: {
    // Default
    default: "arcade",

    // Arcade
    arcade: {
      // Gravity
      gravity: {
        y: 1500
      },

      // Options
      enableBody: true,
      debug: true
    }
  },

  // Scenes
  scene: [SpaceScene]
};
