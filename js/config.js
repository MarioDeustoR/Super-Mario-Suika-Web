const objects = [
    { name: "a", radius: 30 },
    { name: "b", radius: 35 },
    { name: "c", radius: 40 },
    { name: "d", radius: 50 },
    { name: "e", radius: 65 },
    { name: "f", radius: 70 },
    { name: "g", radius: 80 },
    { name: "h", radius: 90 },
    { name: "i", radius: 100 },
    { name: "j", radius: 110 },
  ];
  
  new Phaser.Game({
    width: 600,
    height: 1000,
    parent: "gameContainer",
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 600,
        height: 1000
    },
    transparent: true,
    physics: {
      default: "matter",
      matter: {
        debug: false,
      },
    },
    scene: {
      preload: preload,
      create: create
    },
  });