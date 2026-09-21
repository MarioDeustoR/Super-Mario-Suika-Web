function setDropperX(x) {
    const padding = 65;
    const radius = this.dropper.displayWidth / 2;
    const maxWidth = this.game.config.width - radius - padding;
    x = Math.max(radius + padding, Math.min(x, maxWidth));
    this.dropper.setX(x);
  }
  
  function moveDropper(pointer) {
    setDropperX.call(this, pointer.x);
    this.light.setPosition(pointer.x, pointer.y);
  }
  
  function updateDropper(object) {
    this.dropper
      .setTexture(object.name)
      .setName(object.name)
      .setDisplaySize(object.radius * 2, object.radius * 2)
      .setY(object.radius + 205);
    setDropperX.call(this, this.input.activePointer.x);
  
    this.objects.getChildren().forEach((gameObject) => {
      if (gameObject instanceof Phaser.GameObjects.Image) {
        gameObject.postFX.clear();
  
        if (gameObject.name === object.name) gameObject.postFX.addShine();
      }
    });
  }
  
  function drawScore() {
    this.scoreBox.clear();
    const chars = this.score.toString().split("");
  
    const textWidth = chars.reduce((acc, c) => acc + this.textures.get(c).get().width, 0);
  
    let x = (this.scoreBox.width - textWidth) / 2;
  
    chars.forEach(char => {
      this.scoreBox.drawFrame(char, undefined, x, 0);
      x += this.textures.get(char).get().width;
    });
  }
  
  function addObject(x, y, object) {
    this.objects.add(this.matter.add
      .image(x, y, object.name)
      .setName(object.name)
      .setDisplaySize(object.radius * 2, object.radius * 2)
      .setCircle(object.radius)
      .setFriction(0.005)
      .setBounce(0.2)
      .setDepth(-1)
      .setOnCollideWith(this.ceiling, () => gameOver.call(this)));
  }
  
  function nextObject() {
    if (!this.dropper.visible || this.gameOver) return;
  
    this.dropper.setVisible(false);
    this.time.delayedCall(500, () => this.dropper.setVisible(!this.gameOver));
  
    addObject.call(this,
      this.dropper.x, this.dropper.y,
      objects.find(object => object.name === this.dropper.name)
    );
  
    updateDropper.call(this, objects[Math.floor(Math.random() * 5)]);
  }
  
  function handleCollisions(event) {
    for (const { bodyA, bodyB } of event.pairs) {
      if (bodyA.gameObject?.name === bodyB.gameObject?.name) {
        
        const objectIndex = objects.findIndex(object => object.name === bodyA.gameObject.name);
        if (objectIndex === -1) return;
  
        this.score += (objectIndex + 1) * 2;
        drawScore.call(this);
  
        bodyA.gameObject.destroy();
        bodyB.gameObject.destroy();
  
//        this.particles
//          .setTexture(objects[objectIndex].name)
//          .emitParticleAt(bodyB.position.x, bodyB.position.y, 10);
  
        this.matchSound.play();
        
        const newObject = objects[objectIndex + 1];
        if (!newObject) return;
  
        addObject.call(this, bodyB.position.x, bodyB.position.y, newObject);
        return;
      }
    }
  }
  
  function gameOver() {
    this.gameOver = true;
    this.restartButton.setVisible(true);
    this.dropper.setVisible(false);
    this.game.sound.stopAll();
    this.gameOverSound.play({ loop: -1 });
  }
  
  function restart() {
    this.score = 0;
    this.gameOver = false;
    this.game.sound.stopAll();
    this.scene.restart();
  }