function create() {
    setupAudio.call(this);
    setupLight.call(this);
    setupParticles.call(this);
    setupHeadstone.call(this);
    drawScore.call(this);
    setupCeiling.call(this);
    setupDropper.call(this);
    setupRestartButton.call(this);
    setupEvents.call(this);
  }
  
  function setupAudio() {
    this.backgroundMusic = this.sound.add('background-music', { volume: 0.75 }).play({ loop: -1 });
    this.matchSound = this.sound.add('match-sound', { volume: 1.00 });
    this.gameOverSound = this.sound.add('game-over-sound', { volume: 1.00 });
  }
  
  function setupLight() {
    this.light = this.lights
      .addLight(this.input.activePointer.x, this.input.activePointer.y, 1000, 0xa0e6ff, 0.75)
      .setScrollFactor(0);
    this.lights.enable().setAmbientColor(0xdddddd);
  }
  
  function setupParticles() {
    this.particles = this.add.particles(0, 0, objects[0].name, {
      lifespan: 1000,
      speed: { min: 200, max: 350 },
      scale: { start: 0.1, end: 0 },
      rotate: { start: 0, end: 360 },
      alpha: { start: 1, end: 0 },
      gravityY: 200,
      emitting: false
    });
  }
  
  function setupHeadstone() {
    this.add
      .nineslice(0, 0, "headstone")
      .setOrigin(0)
      .setDisplaySize(+this.game.config.width, +this.game.config.height)
      .setPipeline("Light2D")
      .setDepth(-2);
  
    this.scoreBox = this.add.renderTexture(
      +this.game.config.width / 2, 150,
      +this.game.config.width, 100
    ).setScale(0.8);
  
    this.objects = this.add.group();
  
    this.matter.world.setBounds(
      65, 0,
      +this.game.config.width - 130, +this.game.config.height - 1
    );
  }
  
  function setupCeiling() {
    this.ceiling = this.matter.add.rectangle(
      +this.game.config.width / 2, 100,
      +this.game.config.width, 200
    );
    this.ceiling.isStatic = true;
  
    const line = this.add
      .rectangle(160, 200, +this.game.config.width - 320, 2, 0xccccff)
      .setOrigin(0)
      .setAlpha(0.1)
      .setDepth(-2);
    line.postFX.addShine();
    line.postFX.addGlow();
  }
  
  function setupDropper() {
    this.dropper = this.add.image(this.input.activePointer.x, 0, objects[0].name);
    const glow = this.dropper.postFX.addGlow(0x99ddff);
    this.tweens.addCounter({
      yoyo: true, repeat: -1, from: 1, to: 3, duration: 1000,
      onUpdate: tween => glow.outerStrength = tween.getValue()
    });
    updateDropper.call(this, objects[0]);
  }
  
  function setupRestartButton() {
    const centerX = this.game.config.width / 2;
    const centerY = this.game.config.height / 2;
    const button = this.add.image(centerX, centerY, "newgame")
      .setScale(0.4)
      .setInteractive({ useHandCursor: true })
      .setVisible(false);
  
    button.postFX.addGlow(0x000000, 0.75);
  
    const tweenOptions = scale => ({ targets: button, scale, ease: "Linear", duration: 100 });
  
    button.on("pointerover", () => this.tweens.add(tweenOptions(0.5)));
    button.on("pointerout", () => this.tweens.add(tweenOptions(0.4)));
    button.on("pointerup", () => restart.call(this));
    this.restartButton = button;
  }
  
  function setupEvents() {
    this.input.on("pointermove", pointer => moveDropper.call(this, pointer));
    this.input.on("pointerdown", pointer => moveDropper.call(this, pointer));
    this.input.on("pointerup", () => nextObject.call(this));
    this.matter.world.on('collisionstart', event => handleCollisions.call(this, event));
  }