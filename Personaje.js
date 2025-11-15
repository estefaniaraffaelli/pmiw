class Personaje {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tam = 30;
    this.vel = 4;
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) this.x -= this.vel;
    if (keyIsDown(RIGHT_ARROW)) this.x += this.vel;
    if (keyIsDown(UP_ARROW)) this.y -= this.vel;
    if (keyIsDown(DOWN_ARROW)) this.y += this.vel;

    this.x = constrain(this.x, this.tam / 2, width - this.tam / 2);
    this.y = constrain(this.y, this.tam / 2, height - this.tam / 2);
  }

  dibujar() {
    imageMode(CENTER);
    image(imgLain, this.x, this.y, 40, 40);
  }

  colisiona(obj) {
    let d = dist(this.x, this.y, obj.x, obj.y);
    return d < (this.tam / 2 + obj.tam / 2);
  }
}
