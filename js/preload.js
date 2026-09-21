function preload() {
    this.score = 0;
    this.gameOver = false;
  
    this.load.image("headstone", "assets/headstone.png");
    this.load.image("newgame", "assets/new-game.png");
  
    for (let i = 0; i <= 9; i++) {
      this.load.image(`${i}`, `assets/numbers/${i}.png`);
    }
  
    for (const object of objects) {
      this.load.image(`${object.name}`, `assets/objects/${object.name}.png`);
    }
  
    this.load.audio("background-music", "assets/background-music.mp3");
    this.load.audio("match-sound", "assets/match-sound.mp3");
    this.load.audio("game-over-sound", "assets/game-over-sound.mp3");
  }