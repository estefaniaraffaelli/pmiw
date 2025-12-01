//video https://youtu.be/IS2L-R9Bx8Q //

let imgLain, imgGlitch, imgData, imgFondo;
let imgLogo1, imgLogo2, imgLogo3, imgLogo4; 
let imgFondoGana, imgFondoPierde;  
let fuente, sonido;
let juego;

function preload() {
  fuente = loadFont('assets/CodersCrux.ttf');
  imgLogo1 = loadImage('assets/logo1.png');
  imgLogo2 = loadImage('assets/logo2.png');
  imgLogo3 = loadImage('assets/logo3.png');
  imgLogo4 = loadImage('assets/logo4.png');
  imgLain = loadImage('assets/Lain.png');
  imgGlitch = loadImage('assets/glitch.png');
  imgData = loadImage('assets/data.png');
  imgFondo = loadImage('assets/fondo.png');
  imgFondoGana = loadImage('assets/fondoGana.png');
  imgFondoPierde = loadImage('assets/fondoPierde.png');
  sonido = loadSound('assets/sonido.mp3');
}

function setup() {
  createCanvas(640, 480);
  textFont(fuente);
  juego = new Juego();
}

function draw() {
  juego.ejecutar(); 
}

function mousePressed() {
  juego.mousePresionado(); 
}

function keyPressed() {
  juego.teclaPresionada(key);
}
