/*COMISION 2*/
/*ZOE ORELLANO Y ESTEFANIA RAFFAELLI*/
/*DIAGRAMA*/
/*https://miro.com/welcomeonboard/RnlRak5DNzhsVFA2U3EveTZiZUJEazRYRTNJYnZXSWIyME8zeTdFYnNyMC9LUHZweWV4Uk9SakFlYUJkWXdjNngrVkFhMVVnRm1UbGI5Wm1XRFo5QXp6dDFONFJzR2lQcGdoNElRYm51Q0RQRTI3ZDJIYTBUcTU4MVZZdzAzK29NakdSWkpBejJWRjJhRnhhb1UwcS9BPT0hdjE=?share_link_id=689241050362*/
/*VIDEO*/
/* https://youtu.be/ev4GKJS25zw?si=Yt2zHxv7TMws-DNX */

let marco;
let textos = [];
let pantallaActual = 0;
let imagen = [];
let fuente;
let tiempoInicio;
let cantidadDeCirculos = 800;
let tiempoFinal = 0;
let tiempoIntroCreditos = 0;
let tiempoCreditosFinales = 0;
let intro;
let ruiditoz;
let cancionCreditos;

let rangos = [
    [], [], [0, 2], [4, 5], [7, 8], [10, 11], [13, 16], [18, 19], [21, 22], [24, 26], [28, 29], [31, 32], [34, 37], [39, 40], [42, 45], [47, 50], [52, 53], [55, 56], [58, 59], [61, 63], [65, 67], [69, 71], [73, 78], [80, 81], [83, 84], [86, 87], [89, 90], [92, 96], [98, 100], [102, 104], [106, 109], [111, 114], [116, 120], []
];

let titulos = ["Present day...\npresent time...", "", "", "EL MENSAJE", "CARTA DIGITAL", "FORO DE RUMORES", "LA LUZ", "RASTRO DIGITAL",
    "PRIMER INGRESO AL WIRED", "CONTACTO SENSORIAL", "RUTA LENTA", "ENCUENTRO CON CHISA",
    "PASAJE ERRANTE", "INTERFERENCIA EN CASA", "SUEÑO LUCIDO", "FORO SECRETO DE LOS KNIGHTS",
    "VOCES CONTRADICTORIAS", "SIMBOLOS EN EL MUNDO REAL", "INVESTIGACION FISICA",
    "CAMINO DE EXPANSION", "NODO PROHIBIDO", "CAMINO CRITICO", "EIRI, EL ARQUITECTO",
    "EL DOBLE", "RETIRO INSEGURO", "FUSION", "RESISTENCIA FINAL",
    "FINAL DIVINIDAD", "FINAL HUMANO", "FINAL NADA",
    "EPILOGO SER TODOS", "EPILOGO SER ALGUIEN", "EPILOGO NO SER", ""];

function preload() {
    textos = loadStrings("assets/textoz.txt");
    fuente = loadFont("assets/coderscrux.ttf");
    intro = loadSound("assets/sonido/intro.mp3");
    ruiditoz = loadSound("assets/sonido/ruiditoz.mp3");
    cancionCreditos = loadSound("assets/sonido/megalomaniac.mp3");
    marco = loadImage("assets/imagenez/marco.png");

    imagen[2] = loadImage("assets/imagenez/pantalla0.png");
    imagen[3] = loadImage("assets/imagenez/pantalla1.png");
    imagen[4] = loadImage("assets/imagenez/pantalla2a.png");
    imagen[5] = loadImage("assets/imagenez/pantalla2b.png");
    imagen[6] = loadImage("assets/imagenez/pantalla3a.png");
    imagen[7] = loadImage("assets/imagenez/pantalla3b.png");
    imagen[8] = loadImage("assets/imagenez/pantalla4a.png");
    imagen[9] = loadImage("assets/imagenez/pantalla4b.png");
    imagen[10] = loadImage("assets/imagenez/pantalla4c.png");
    imagen[11] = loadImage("assets/imagenez/pantalla5a.png");
    imagen[12] = loadImage("assets/imagenez/pantalla5b.png");
    imagen[13] = loadImage("assets/imagenez/pantalla5c.png");
    imagen[14] = loadImage("assets/imagenez/pantalla5d.png");
    imagen[15] = loadImage("assets/imagenez/pantalla6a.png");
    imagen[16] = loadImage("assets/imagenez/pantalla6b.png");
    imagen[17] = loadImage("assets/imagenez/pantalla6c.png");
    imagen[18] = loadImage("assets/imagenez/pantalla6d.png");
    imagen[19] = loadImage("assets/imagenez/pantalla7a.png");
    imagen[20] = loadImage("assets/imagenez/pantalla7b.png");
    imagen[21] = loadImage("assets/imagenez/pantalla7c.png");
    imagen[22] = loadImage("assets/imagenez/pantalla8a.png");
    imagen[23] = loadImage("assets/imagenez/pantalla8b.png");
    imagen[24] = loadImage("assets/imagenez/pantalla8c.png");
    imagen[25] = loadImage("assets/imagenez/pantalla9a.png");
    imagen[26] = loadImage("assets/imagenez/pantalla9b.png");
    imagen[27] = loadImage("assets/imagenez/pantalla10a.png");
    imagen[28] = loadImage("assets/imagenez/pantalla10b.png");
    imagen[29] = loadImage("assets/imagenez/pantalla10c.png");
    imagen[30] = loadImage("assets/imagenez/pantalla11a.png");
    imagen[31] = loadImage("assets/imagenez/pantalla11b.png");
    imagen[32] = loadImage("assets/imagenez/pantalla11c.png");
}

function setup() {
    createCanvas(640, 480);
    tiempoInicio = millis();
    ruiditoz.setLoop(true);
}

function draw() {
    background(0);

    if (imagen[pantallaActual]) {
        image(imagen[pantallaActual], 0, 0, width, height);
    }

    textFont(fuente);
    textSize(16);
    fill(0);

    if (pantallaActual != 0 && pantallaActual != 1 && pantallaActual != 2 && pantallaActual != 33) {
        image(marco, 0, 0, 640, 480);
    }
    if (pantallaActual == 1) {
        introCreditos();
    }
    if (pantallaActual == 33) {
        creditosFinales();
    }


    mostrarTextoEnPantalla(pantallaActual);
    mostrarTitulos(pantallaActual);
    decisiones();
    ruidoBlanco();
}

function ruidoBlanco() {
    if (pantallaActual == 0 || pantallaActual == 1) {
        for (let i = 0; i < cantidadDeCirculos; i++) {
            let x = random(width);
            let y = random(height);
            let gris = random(150, 255);
            fill(gris, random(100, 255));
            let tamaño = random(1, 4);
            ellipse(x, y, tamaño);
        }

        if (millis() - tiempoInicio > 5500) {
            pantallaActual = 1;
        }
    }
}

function mostrarTitulos(pantalla) {
    let titulo = titulos[pantalla];


    if (pantalla == 0) {
        textSize(20);
        text("*Play audio*", width / 2, 400);
        textSize(80);
        let count = frameCount / 10 % (titulo.length);
        let textoActual = titulo.slice(0, count);
        text(textoActual, width / 2, height / 2);

    } else {
        textSize(18);
        textAlign(CENTER, CENTER);
        text(titulo, width / 2, 24);

    }
}

function introCreditos() {
    ruidoBlanco();
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);

    
    text("Trabajo realizado por:\n" + "Zoe Orellano y Estefania Raffaelli.\n" + "\n" + "Comision 2.\n" + "\n" + "Docente:\n" + "Matias Jauregui Lorda.\n" + "\n" + "Agradecimiento especial:\n" + "A Diego :)\n", width / 2, height / 2);
    if (tiempoIntroCreditos == 0) { /*si tiempo creditos no fue llamado empieza a contar el millis desde aca */
                tiempoIntroCreditos = millis();
        tiempoIntroCreditos = millis();
    }
    if (millis() - tiempoIntroCreditos > 5000) { 
        pantallaActual = 2;
        tiempoIntroCreditos = 0;
    }
}

function creditosFinales() {
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);


    if (tiempoCreditosFinales == 0) {
        tiempoCreditosFinales = millis();
    }

    if (millis() - tiempoCreditosFinales < 7000) {
        text("Basado en la serie:\n" + "'SERIAL EXPERIMENTS LAIN'.\n" + "Produccion y co-creacion:\n" + "Yasuyuki Ueda.\n" + "Guion:\n" + "Chiaki J. Konaka.\n" + "Director:\n" + "Ryutaro Nakamura.\n" + "Ilustrador:\n" + "Yoshitoshi ABe.", width / 2, height / 2);
    }

    else if (millis() - tiempoCreditosFinales < 13000) {
        text("Musica y sonido:\n" + "\n" + "Introduccion extraida de la serie,\n" + "utilizada SOLO con fines educativos y en homenaje.\n" + "El efecto sonoro que acompaña la experiencia\n" + "fue seleccionada de una libreria en linea de uso libre.\n", width / 2, height / 2);
    }

    else if (millis() - tiempoCreditosFinales < 24000) {
        text("Musica de Creditos:\n" + "\n" + "'MEGALOMANIAC' de KMFDM.\n" + "\n" + "Reconocemos que el uso de material con\n" + "derechos de autor NO debe realizarse sin permiso.\n" + "En este caso, la cancion de creditos fue incorporada\n" + "SOLO con fines educativos.\n", width / 2, height / 2);
    }

    else if (millis() - tiempoCreditosFinales < 31000) {
        text("Recursos visuales:\n" + "\n" + "La mayoria de las imagenes pertenecen a la serie original.\n" + "Fueron editadas mediante aplicaciones digitales\n" + "y otras generadas con Inteligencia Artificial.\n" + "Su uso se realiza UNICAMENTE con fines educativos\n" + "y de experimentacion visual.", width / 2, height / 2);
    }

    else {
        pantallaActual = 2;
        tiempoCreditosFinales = 0;

        if (!intro.isPlaying()) {
            intro.play();
        }
    }
}


function mostrarTextoEnPantalla(pantalla) {
    let rangoDeTextos = rangos[pantalla];
    let x = 29;
    let y = 399;
    let alturaDeLinea = 12;
    let anchoMaximo = width - 29 * 2;

    textAlign(LEFT, TOP);

    if (pantalla == 0) {
        fill(255);
        textAlign(CENTER, CENTER);
    }
    if (pantalla == 2) {
        fill(255);
        textAlign(CENTER, TOP);
        y = 50;
    }

    for (let i = rangoDeTextos[0]; i <= rangoDeTextos[1]; i++) {
        if (textos[i]) {
            text(textos[i], x, y, anchoMaximo, alturaDeLinea);
            y += alturaDeLinea;
        }
    }
}

function dibujarBoton(x, y, textos) {
    let paddingX = 10;
    let paddingY = 5;

    textFont(fuente);
    textSize(16);

    let tw = textWidth(textos);
    let th = textAscent() + textDescent();
    let w = tw + paddingX * 2;
    let h = th + paddingY * 2;

    let hover = mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;

    if (hover) {
        fill(80);
        cursor(HAND);
        push();
        translate(x + w / 2, y + h / 2);
        scale(1.1);
        rectMode(CENTER);
        rect(0, 0, w, h, 10);
        fill(255);
        textAlign(CENTER, CENTER);
        text(textos, 0, 0);
        pop();
    } else {
        fill(255);
        cursor(ARROW);
        rect(x, y, w, h, 10);
        fill(0);
        textAlign(CENTER, CENTER);
        text(textos, x + w / 2, y + h / 2);
    }

    textAlign(LEFT, CENTER);
}


function decisiones() {

    if (pantallaActual == 2) {
        dibujarBoton(285, 100, "Comenzar");
    }
    if (pantallaActual == 3) {/*PANTALLA 1: EL MENSAJE*/
        dibujarBoton(510, 400, "Abrir mensaje");
        dibujarBoton(500, 430, "Buscar en foros");

    }
    if (pantallaActual == 4) {/*PANTALLA 2A: CARTA DIGITAL*/
        dibujarBoton(518, 400, "¿Dónde estas?");
        dibujarBoton(530, 430, "Rastrear IP");

    }
    if (pantallaActual == 5) { /*PANTALLA 2B: FORO DE RUMORES*/
        dibujarBoton(485, 400, "Contactar al usuario");
        dibujarBoton(500, 430, "Descargar archivo");

    }
    if (pantallaActual == 6) { /*PANTALLA 3A: LA LUZ*/
        dibujarBoton(500, 400, "Dejarme absorber");
        dibujarBoton(516, 430, "Sentir la luz");

    } if (pantallaActual == 7) { /*PANTALLA 3B: RASTRO DIGITAL*/
        dibujarBoton(510, 400, "Abrir nodo");
        dibujarBoton(460, 430, "Guardar información");

    } if (pantallaActual == 8) { /*PANTALLA 4A: PRIMER INGRESO AL WIRED*/
        dibujarBoton(450, 400, "Seguir la voz de Chisa");
        dibujarBoton(400, 430, "Caminar hacia una luz distante");

    } if (pantallaActual == 9) { /*PANTALLA 4B: CONTACTO SENSORIAL*/
        dibujarBoton(480, 400, "Entrar completamente");
        dibujarBoton(400, 430, "Retirar la mano y volver al cuarto");

    } if (pantallaActual == 10) { /*PANTALLA 4C: RUTA LENTA*/
        dibujarBoton(450, 400, "Anotar el nodo para después");
        dibujarBoton(380, 430, "Dormir y dejar que me invada en sueños");

    } if (pantallaActual == 11) { /*PANTALLA 5A: ENCUENTRO CON CHISA*/
        dibujarBoton(465, 400, "Creerle y avanzar");
        dibujarBoton(410, 430, "Pedir pruebas, cuestionarla");

    } if (pantallaActual == 12) { /*PANTALLA 5B: PASAJE ERRANTE*/
        dibujarBoton(420, 400, "Seguir a un avatar brillante");
        dibujarBoton(490, 430, "Buscar una salida");

    } if (pantallaActual == 13) { /*PANTALLA 5C: INTERFERENCIA EN CASA*/
        dibujarBoton(480, 400, "Revisar el teléfono");
        dibujarBoton(350, 430, "Anotar los símbolos para anotarlos después");

    } if (pantallaActual == 14) { /*PANTALLA 5D: SUEÑO LÚCIDO*/
        dibujarBoton(450, 400, "Seguir los códigos");
        dibujarBoton(470, 430, "Romper el sueño");

    } if (pantallaActual == 15) { /*PANTALLA 6A: FORO SECRETO DE LOS KNIGHTS*/
        dibujarBoton(470, 400, "Preguntar por Eiri");
        dibujarBoton(360, 430, "Solicitar acceso a su servidor oculto");

    } if (pantallaActual == 16) { /*PANTALLA 6B: VOCES CONTRADICTORIAS*/
        dibujarBoton(370, 400, "Seguir a los que prometen libertad");
        dibujarBoton(370, 430, "Seguir a los que advierten peligro");

    } if (pantallaActual == 17) { /*PANTALLA 6C: SÍMBOLOS EN EL MUNDO REAL*/
        dibujarBoton(550, 400, "Tocarla");
        dibujarBoton(395, 430, "Dibujarla para investigarla después");

    } if (pantallaActual == 18) { /*PANTALLA 6D: INVESTIGACIÓN FÍSICA*/
        dibujarBoton(430, 400, "Reconstruir el patrón");
        dibujarBoton(400, 430, "Intentar romper el cuaderno");

    } if (pantallaActual == 19) { /*PANTALLA 7A: CAMINO DE EXPANSIÓN*/
        dibujarBoton(450, 400, "Aceptar la invitación");
        dibujarBoton(445, 430, "Exigir saber el precio");

    } if (pantallaActual == 20) { /*PANTALLA 7B: NODO PROHIBIDO*/
        dibujarBoton(400, 400, "Investigar la cámara invisible");
        dibujarBoton(450, 430, "Cerrar todo y respirar");

    } if (pantallaActual == 21) { /*PANTALLA 7C: CAMINO CRÍTICO*/
        dibujarBoton(520, 400, "Responderle");
        dibujarBoton(400, 430, "Silenciarlo y buscar más pruebas");

    } if (pantallaActual == 22) { /*PANTALLA 8A: EIRI, EL ARQUITECTO*/
        dibujarBoton(490, 400, "Aceptar su visión");
        dibujarBoton(530, 430, "Desafiarlo");

    } if (pantallaActual == 23) { /*PANTALLA 8B: EL DOBLE*/
        dibujarBoton(430, 400, "Aceptar que ella soy yo");
        dibujarBoton(460, 430, "Negarla con fuerza");

    } if (pantallaActual == 24) { /*PANTALLA 8C: RETIRO INSEGURO*/
        dibujarBoton(400, 400, "Desconectar todos los dispositivos");
        dibujarBoton(420, 430, "Seguir las voces una última vez");

    } if (pantallaActual == 25) { /*PANTALLA 9A: FUSIÓN*/
        dibujarBoton(415, 390, "Fundirme con todas las voces");
        dibujarBoton(400, 415, "Quedarme en el mundo que duele");
        dibujarBoton(455, 440, "Borrarme para siempre");

    } if (pantallaActual == 26) { /*PANTALLA 9B: RESISTENCIA FINAL*/
        dibujarBoton(500, 390, "Ser todos");
        dibujarBoton(490, 415, "Ser alguien");
        dibujarBoton(510, 440, "No ser");

    } if (pantallaActual == 27) { /*PANTALLA 10A: FINAL DIVINIDAD*/
        if (tiempoFinal == 0) {
            tiempoFinal = millis();
        }
        if (millis() - tiempoFinal > 10000) {
            pantallaActual = 30;
            tiempoFinal = 0;
        }

    } if (pantallaActual == 28) { /*PANTALLA 10B: FINAL HUMANO*/
        if (tiempoFinal == 0) {
            tiempoFinal = millis();
        }
        if (millis() - tiempoFinal > 10000) {
            pantallaActual = 31;
            tiempoFinal = 0
        }

    } if (pantallaActual == 29) { /*PANTALLA 10C: FINAL NADA*/
        if (tiempoFinal == 0) {
            tiempoFinal = millis();
        }
        if (millis() - tiempoFinal > 10000) {
            pantallaActual = 32;
            tiempoFinal = 0
        }
    } if (pantallaActual == 30) { /*PANTALLA 11A: EPÍLOGO SER TODOS*/
        dibujarBoton(500, 400, "Ver Creditos");

    }
    if (pantallaActual == 31) { /*PANTALLA 11B: EPÍLOGO SER ALGUIEN*/
        dibujarBoton(500, 400, "Ver Creditos");


    }
    if (pantallaActual == 32) { /*PANTALLA 10C: EPÍLOGO NO SER*/
        dibujarBoton(500, 400, "Ver Creditos");
    }
}

function botonClick(x, y, texto) {

    let paddingX = 10;
    let paddingY = 5;
    let w = textWidth(texto) + paddingX * 2;
    let h = textAscent() + textDescent() + paddingY * 2;

    return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function mousePressed() {
    // PANTALLA 2: MAIN MENU
    if (pantallaActual == 0 || pantallaActual == 1) {
        if (intro.isPlaying()) {
            intro.stop();
        } else {
            intro.play();
        }
    }


    if (pantallaActual == 2) {
        if (botonClick(285, 100, "Comenzar")) { // "Comenzar" -> EL MENSAJE
            pantallaActual = 3;

            if (ruiditoz.isPlaying()) {
                ruiditoz.stop();
            } else {
                ruiditoz.play();
            }
            return;
        }
    }

    // PANTALLA 1: EL MENSAJE (3)
    if (pantallaActual == 3) {
        if (botonClick(510, 400, "Abrir mensaje")) { // "Abrir mensaje" -> 2A
            pantallaActual = 4;
            return;
        }
        if (botonClick(500, 430, 150, 50)) { // "Buscar en foros" -> 2B
            pantallaActual = 5;
            return;
        }
    }

    // PANTALLA 2A: CARTA DIGITAL (4)
    if (pantallaActual == 4) {
        if (botonClick(518, 400, "¿Dónde estás?")) { // "¿Dónde estás?" -> 3A (La Luz)
            pantallaActual = 6;
            return;
        }
        if (botonClick(530, 430, "Rastrear IP")) { // "Rastrear IP" -> 3B (Rastro Digital)
            pantallaActual = 7;
            return;
        }
    }

    // PANTALLA 2B: FORO DE RUMORES (5)
    if (pantallaActual == 5) {
        if (botonClick(485, 400, "Contactar al usuario")) { // "Contactar al usuario" -> 3B
            pantallaActual = 7;
            return;
        }
        if (botonClick(487, 430, "Descargar archivo")) { // "Descargar archivo" -> 3A
            pantallaActual = 6;
            return;
        }
    }

    // PANTALLA 3A: LA LUZ (6)
    if (pantallaActual == 6) {
        if (botonClick(500, 400, "Dejarme absorber")) { // "Dejarme absorber" -> 4A
            pantallaActual = 8;
            return;
        }
        if (botonClick(516, 430, "Sentir la luz")) { //  -> 4B
            pantallaActual = 9;
            return;
        }
    }

    // PANTALLA 3B: RASTRO DIGITAL (7)
    if (pantallaActual == 7) {
        if (botonClick(510, 400, "Abrir nodo")) { // "Abrir nodo" -> 4A
            pantallaActual = 8;
            return;
        }
        if (botonClick(460, 430, "Guardar información")) { // "Guardar información" -> 4C
            pantallaActual = 10;
            return;
        }
    }

    // PANTALLA 4A: PRIMER INGRESO AL WIRED (8)
    if (pantallaActual == 8) {
        if (botonClick(450, 400, "Seguir la voz de Chisa")) { // "Seguir la voz de Chisa" -> 5A
            pantallaActual = 11;
            return;
        }
        if (botonClick(400, 430, "Caminar hacia una luz distante")) { // "Caminar hacia una luz distante" -> 5B
            pantallaActual = 12;
            return;
        }
    }

    // PANTALLA 4B: CONTACTO SENSORIAL (9)
    if (pantallaActual == 9) {
        if (botonClick(480, 400, "Entrar completamente")) { // "Entrar completamente" -> 5A
            pantallaActual = 11;
            return;
        }
        if (botonClick(400, 430, "Retirar la mano y volver al cuarto")) { // "Retirar la mano..." -> 5C
            pantallaActual = 13;
            return;
        }
    }

    // PANTALLA 4C: RUTA LENTA (10)
    if (pantallaActual == 10) {
        if (botonClick(450, 400, "Anotar el nodo para después")) { // "Anotar el nodo..." -> 5C
            pantallaActual = 13;
            return;
        }
        if (botonClick(380, 430, "Dormir y dejar que me invada en sueños")) { // "Dormir..." -> 5D
            pantallaActual = 14;
            return;
        }
    }

    // PANTALLA 5A: ENCUENTRO CON CHISA (11)
    if (pantallaActual == 11) {
        if (botonClick(465, 400, "Creerle y avanzar")) { // "Creerle y avanzar" -> 6A
            pantallaActual = 15;
            return;
        }
        if (botonClick(410, 430, "Pedir pruebas, cuestionarla")) { // "Pedir pruebas..." -> 6B
            pantallaActual = 16;
            return;
        }
    }

    // PANTALLA 5B: PASAJE ERRANTE (12)
    if (pantallaActual == 12) {
        if (botonClick(420, 400, "Seguir a un avatar brillante")) { // "Seguir a un avatar brillante" -> 6B
            pantallaActual = 16;
            return;
        }
        if (botonClick(490, 430, "Buscar una salida")) { // "Buscar una salida" -> 6C
            pantallaActual = 17;
            return;
        }
    }

    // PANTALLA 5C: INTERFERENCIA EN CASA (13)
    if (pantallaActual == 13) {
        if (botonClick(480, 400, "Revisar el teléfono")) { // "Revisar el teléfono" -> 6C
            pantallaActual = 17;
            return;
        }
        if (botonClick(350, 430, "Anotar los símbolos para anotarlos después")) { // "Anotar los símbolos..." -> 6D
            pantallaActual = 18;
            return;
        }
    }

    // PANTALLA 5D: SUEÑO LÚCIDO (14)
    if (pantallaActual == 14) {
        if (botonClick(450, 400, "Seguir los códigos")) { // "Seguir los códigos" -> 6A
            pantallaActual = 15;
            return;
        }
        if (botonClick(470, 430, "Romper el sueño")) { // "Romper el sueño" -> 6C
            pantallaActual = 17;
            return;
        }
    }

    // PANTALLA 6A: FORO SECRETO DE LOS KNIGHTS (15)
    if (pantallaActual == 15) {
        if (botonClick(470, 400, "Preguntar por Eiri")) { // "Preguntar por Eiri" -> 7A
            pantallaActual = 19;
            return;
        }
        if (botonClick(360, 430, "Solicitar acceso a su servidor oculto")) { // "Solicitar acceso..." -> 7B
            pantallaActual = 20;
            return;
        }
    }

    // PANTALLA 6B: VOCES CONTRADICTORIAS (16)
    if (pantallaActual == 16) {
        if (botonClick(370, 400, "Seguir a los que prometen libertad")) { // "Seguir a los que prometen libertad" -> 7A
            pantallaActual = 19;
            return;
        }
        if (botonClick(370, 430, "Seguir a los que advierten peligro")) { // "Seguir a los que advierten peligro" -> 7C
            pantallaActual = 21;
            return;
        }
    }

    // PANTALLA 6C: SÍMBOLOS EN EL MUNDO REAL (17)
    if (pantallaActual == 17) {
        if (botonClick(550, 400, "Tocarla")) { // "Tocarla" -> 7B
            pantallaActual = 20;
            return;
        }
        if (botonClick(395, 430, "Dibujarla para investigarla después")) { // "Dibujarla..." -> 7C
            pantallaActual = 21;
            return;
        }
    }

    // PANTALLA 6D: INVESTIGACIÓN FÍSICA (18)
    if (pantallaActual == 18) {
        if (botonClick(430, 400, "Reconstruir el patrón")) { // "Reconstruir el patrón" -> 7C
            pantallaActual = 21;
            return;
        }
        if (botonClick(400, 430, "Intentar romper el cuaderno")) { // "Intentar romper el cuaderno" -> 7B
            pantallaActual = 20;
            return;
        }
    }

    // PANTALLA 7A: CAMINO DE EXPANSIÓN (19)
    if (pantallaActual == 19) {
        if (botonClick(450, 400, "Aceptar la invitación")) { // "Aceptar la invitación" -> 8A
            pantallaActual = 22;
            return;
        }
        if (botonClick(445, 430, "Exigir saber el precio")) { // "Exigir saber el precio" -> 8B
            pantallaActual = 23;
            return;
        }
    }

    // PANTALLA 7B: NODO PROHIBIDO (20)
    if (pantallaActual == 20) {
        if (botonClick(400, 400, "Investigar la cámara invisible")) { // "Investigar la cámara invisible" -> 8B
            pantallaActual = 23;
            return;
        }
        if (botonClick(450, 430, "Cerrar todo y respirar")) { // "Cerrar todo y respirar" -> 8C
            pantallaActual = 24;
            return;
        }
    }

    // PANTALLA 7C: CAMINO CRÍTICO (21)
    if (pantallaActual == 21) {
        if (botonClick(520, 400, "Responderle")) { // "Responderle" -> 8B
            pantallaActual = 23;
            return;
        }
        if (botonClick(400, 430, "Silenciarlo y buscar más pruebas")) { // "Silenciarlo..." -> 8C
            pantallaActual = 24;
            return;
        }
    }

    // PANTALLA 8A: EIRI, EL ARQUITECTO (22)
    if (pantallaActual == 22) {
        if (botonClick(490, 400, "Aceptar su visión")) { // "Aceptar su visión" -> 9A
            pantallaActual = 25;
            return;
        }
        if (botonClick(530, 430, "Desafiarlo")) { // "Desafiarlo" -> 9B
            pantallaActual = 26;
            return;
        }
    }

    // PANTALLA 8B: EL DOBLE (23)
    if (pantallaActual == 23) {
        if (botonClick(430, 400, "Aceptar que ella soy yo")) { // "Aceptar que ella soy yo" -> 9A
            pantallaActual = 25;
            return;
        }
        if (botonClick(460, 430, "Negarla con fuerza")) { // "Negarla con fuerza" -> 9B
            pantallaActual = 26;
            return;
        }
    }

    // PANTALLA 8C: RETIRO INSEGURO (24)
    if (pantallaActual == 24) {
        if (botonClick(400, 400, "Desconectar todos los dispositivos")) { // "Desconectar todos los dispositivos" -> 9B
            pantallaActual = 26;
            return;
        }
        if (botonClick(420, 430, "Seguir las voces una última vez")) { // "Seguir las voces una última vez" -> 9A
            pantallaActual = 25;
            return;
        }
    }

    // PANTALLA 9A: FUSIÓN (25)
    if (pantallaActual == 25) {
        if (botonClick(415, 390, "Fundirme con todas las voces")) { // "Fundirme con todas las voces" -> Final Divinidad
            pantallaActual = 27;
            return;
        }
        if (botonClick(400, 415, "Quedarme en el mundo que duele")) { // "Quedarme en el mundo que duele" -> Final Humano
            pantallaActual = 28;
            return;
        }
        if (botonClick(455, 440, "Borrarme para siempre")) { // "Borrarme para siempre" -> Final Nada
            pantallaActual = 29;
            return;
        }
    }

    // PANTALLA 26: RESISTENCIA FINAL
    if (pantallaActual == 26) {
        if (botonClick(500, 390, "Ser todos")) { // "Ser todos" -> Final Divinidad
            pantallaActual = 27;
            return;
        }
        if (botonClick(480, 415, "Ser alguien")) { // "Ser alguien" -> Final Humano
            pantallaActual = 28;
            return;
        }
        if (botonClick(510, 440, "No ser")) { // "No ser" -> Final Nada
            pantallaActual = 29;
            return;
        }
    }
    if (pantallaActual == 30) {
        if (botonClick(500, 400, "Ver Creditos")) { // "Ver Creditos"
            pantallaActual = 33;

            if (ruiditoz.isPlaying()) {
                ruiditoz.stop();
                cancionCreditos.play();
            } else {
                ruiditoz.play();
                cancionCreditos.stop();
            }
            return;
        }
    }
    if (pantallaActual == 31) {
        if (botonClick(500, 400, "Ver Creditos")) { // "Creditos"
            pantallaActual = 33;

            if (ruiditoz.isPlaying()) {
                ruiditoz.stop();
                cancionCreditos.play();
            } else {
                ruiditoz.play();
                cancionCreditos.stop();

            }
            return;
        }
    }

    if (pantallaActual == 32) {
        if (botonClick(500, 400, "Ver Creditos")) { // "Creditos"
            pantallaActual = 33;

            if (ruiditoz.isPlaying()) {
                ruiditoz.stop();
                cancionCreditos.play();
            } else {
                ruiditoz.play();
                cancionCreditos.stop();
            }
            return;
        }
    }
}
