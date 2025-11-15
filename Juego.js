class Juego {
  constructor() {
    this.estado = "inicio";
    this.personaje = new Personaje(width / 2, height - 60);
    this.glitches = [];
    this.paquetes = [];
    this.puntaje = 0;
    this.meta = 10;
    this.crearEntidades();
    this.sonidoIniciado = false;
  }

  crearEntidades() {
    for (let i = 0; i < 10; i++) {
      this.glitches.push(new Glitch(random(width), random(height)));
    }
    for (let i = 0; i < 5; i++) {
      this.paquetes.push(new DataPacket(random(width), random(height)));
    }
  }

  ejecutar() {
    switch (this.estado) {
    case "inicio":
      this.pantallaInicio();
      break;
    case "jugando":
      this.actualizarJuego();
      this.pantallaJuego();
      break;
    case "gana":
      this.pantallaGana();
      break;
    case "pierde":
      this.pantallaPierde();
      break;
    }
  }

  actualizarJuego() {
    this.personaje.mover();

    for (let g of this.glitches) {
      g.mover();
      if (this.personaje.colisiona(g)) {
        this.estado = "pierde";
      }
    }

    for (let i = this.paquetes.length - 1; i >= 0; i--) {
      let p = this.paquetes[i];
      if (this.personaje.colisiona(p)) {
        this.paquetes.splice(i, 1);
        this.puntaje++;
        if (this.puntaje >= this.meta) {
          this.estado = "gana";
        }
      }
    }

    if (this.paquetes.length < 3) {
      this.paquetes.push(new DataPacket(random(width), random(height / 2)));
    }
  }

  pantallaInicio() {
    background(0);
    imageMode(CENTER);
    for (let i = 0; i < 5; i++) {
      image(imgLogo1, random(width), random(height / 2), 40, 40);
      image(imgLogo2, random(width), random(height / 2), 40, 40);
      image(imgLogo3, random(width), random(height / 2), 40, 40);
      image(imgLogo4, random(width), random(height / 2), 40, 40);
    }

    fill(255);
    textAlign(CENTER, TOP);
    textSize(45);
    text("SERIAL EXPERIMENTS: CONNECTED", width / 2, height / 3);

    textSize(20);
    text(
      "Entre lo real y lo digital, algo te llama.\nRecolectá los datos que flotan en la red.\nEvitá los errores... o la conexión se perderá ",
      width / 2 - 250,
      height / 2 - 20,
      500
      );

    textSize(18);
    textAlign(CENTER, BOTTOM);
    text("Hacé clic para ingresar al Wired", width / 2, height - 150);

    textSize(15);
    text("Créditos: Inspirado en Serial Experiments Lain — por Estefanía Raffaelli", width / 2, height - 30);
  }

  pantallaJuego() {
    imageMode(CORNER);
    image(imgFondo, 0, 0, width, height);
    this.personaje.dibujar();
    for (let g of this.glitches) g.dibujar();
    for (let p of this.paquetes) p.dibujar();

    fill(255);
    textSize(14);
    textAlign(LEFT);
    text("Datos: " + this.puntaje + " / " + this.meta, 10, 20);
  }

  pantallaGana() {
    imageMode(CORNER);
    image(imgFondoGana, 0, 0, width, height);
    textAlign(CENTER);
    textSize(40);
    fill(0);
    text("CONECTADA. El Wired te acepta.", width / 2, height / 2 + 140);
    textSize(18);
    text("Presioná 'R' para reiniciar.", width / 2, height / 2 + 180);
  }

  pantallaPierde() {
    imageMode(CORNER);
    image(imgFondoPierde, 0, 0, width, height);
    textAlign(CENTER);
    fill(255);
    textSize(40);
    text("DESCONECTADA. La señal se perdió.", width / 2, height / 2 + 140);
    textSize(18);
    text("Presioná 'R' para reiniciar.", width / 2, height / 2 + 180);
  }

  mousePresionado() {
    if (this.estado === "inicio") {
      this.estado = "jugando";
      if (!this.sonidoIniciado) {
        sonido.loop();
        this.sonidoIniciado = true;
      }
    }
  }

  teclaPresionada(k) {
    if ((k === 'r' || k === 'R') && (this.estado === "pierde" || this.estado === "gana")) {
      this.reiniciar();
    }
  }

  reiniciar() {
    this.estado = "inicio";
    this.puntaje = 0;
    this.glitches = [];
    this.paquetes = [];
    this.personaje = new Personaje(width / 2, height - 60);
    this.crearEntidades();
  }
}
