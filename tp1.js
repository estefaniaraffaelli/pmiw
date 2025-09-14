
/*PMIW - COMISION 2*/

let img;
let cantidadAnillos = 14;
let radioMaximo = 200;
let ejeX = 600;
let ejeY = 200;
let escala = 1.0;
let cambiarColores = false;

function preload() {
    img = loadImage("assets/obra.jpg")
}

function setup() {
    createCanvas(800, 400);
    colorMode(HSB, 360, 100, 100);
}

function draw() {
    background(0);
    dibujarCirculos(cantidadAnillos, radioMaximo, escala);
    image(img, 0, 0, 400, 400);
}

function dibujarCirculos(cantidadAnillos, radioMaximo, escala) {
    let repeticiones = 1;

    for (let orden = 0; orden < repeticiones; orden++) {
        for (let anillos = 0; anillos < cantidadAnillos; anillos++) {

            fill(colores(anillos));
            noStroke();
            let relleno = radioMaximo * 2 - anillos * (radioMaximo * 2 / cantidadAnillos);
            ellipse(ejeX, ejeY, relleno * escala, relleno * escala);
        }
    }
}

function colores(anillos) {
    if (cambiarColores) {
        let tono = random(100, 360);
        let saturacion = random(100, 120);
        let brillo = random(0, 360);
        return color(tono, saturacion, brillo, 1);
    }

    let tono;
    let saturacion;
    let brillo;

    if (anillos == 0) {
        tono = 171;
        saturacion = 53;
        brillo = 31;
    } else if (anillos == 1) {
        tono = 214;
        saturacion = 48;
        brillo = 25;
    } else if (anillos == 2) {
        tono = 248;
        saturacion = 50;
        brillo = 24;
    } else if (anillos == 3) {
        tono = 266;
        saturacion = 50;
        brillo = 24;
    } else if (anillos == 4) {
        tono = 329;
        saturacion = 45;
        brillo = 24;
    } else if (anillos == 5) {
        tono = 358;
        saturacion = 73;
        brillo = 39;
    } else if (anillos == 6) {
        tono = 10;
        saturacion = 100;
        brillo = 58;
    } else if (anillos == 7) {
        tono = 10;
        saturacion = 100;
        brillo = 69;
    } else if (anillos == 8) {
        tono = 24;
        saturacion = 100;
        brillo = 82;
    } else if (anillos == 9) {
        tono = 42;
        saturacion = 100;
        brillo = 87;
    } else if (anillos == 10) {
        tono = 54;
        saturacion = 100;
        brillo = 86;
    } else if (anillos == 11) {
        tono = 75;
        saturacion = 100;
        brillo = 71;
    } else if (anillos == 12) {
        tono = 108;
        saturacion = 58;
        brillo = 54;
    } else if (anillos == 13) {
        tono = 157;
        saturacion = 55;
        brillo = 42;
    } else {
        tono = 80;
        saturacion = 50;
        brillo = 40;
    }
    return color(tono, saturacion, brillo, 10);
}

function mouseClicked() {
    if (mouseX >= 400 && mouseX <= 600) {
        if (escala < 1.5) {
            escala += 0.2;
        } else {
            escala = 0.5;
        }
    }
}

function keyPressed() {
    if (key == ' ') {
        cambiarColores = !cambiarColores;
    }
    if (key == 'r' || key == 'R') {
        reiniciar();
    }
}

function reiniciar() {
    cantidadAnillos = 14;
    radioMaximo = 200;
    ejeX = 600;
    ejeY = 200;
    escala = 1.0;
    cambiarColores = false;
}