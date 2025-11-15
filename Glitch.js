class Glitch {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tam = random(20, 40);
    this.velx = random(-2, 2);
    this.vely = random(-2, 2);
  }

  mover() {
    this.x += this.velx;
    this.y += this.vely;

    if (this.x < 0 || this.x > width) this.velx *= -1;
    if (this.y < 0 || this.y > height / 2) this.vely *= -1;
  }

  dibujar() {
    imageMode(CENTER);
    image(imgGlitch, this.x, this.y, this.tam, this.tam);
  }
}
