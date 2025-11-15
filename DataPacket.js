class DataPacket {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tam = 15;
  }

  dibujar() {
    imageMode(CENTER);
    image(imgData, this.x, this.y, this.tam * 2, this.tam * 2);
  }
}
