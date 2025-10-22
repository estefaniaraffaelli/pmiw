/*COMISION 2*/
/*ZOE ORELLANO Y ESTEFANIA RAFFAELLI*/
/*DIAGRAMA*/
/*https://miro.com/welcomeonboard/RnlRak5DNzhsVFA2U3EveTZiZUJEazRYRTNJYnZXSWIyME8zeTdFYnNyMC9LUHZweWV4Uk9SakFlYUJkWXdjNngrVkFhMVVnRm1UbGI5Wm1XRFo5QXp6dDFONFJzR2lQcGdoNElRYm51Q0RQRTI3ZDJIYTBUcTU4MVZZdzAzK29NakdSWkpBejJWRjJhRnhhb1UwcS9BPT0hdjE=?share_link_id=689241050362*/
/*VIDEO*/
/* https://youtu.be/ev4GKJS25zw?si=Yt2zHxv7TMws-DNX */

let pantallaActual = 0;
let imagen = [];
let fuente;
let fuenteTitulos;
let ventanaX = 450;
let ventanaY = 60;
let ventanaW = 180;
let ventanaH = 300;
let tiempoInicio = 0;
let cantidadDeCirculos = 800;
let tiempoFinal = 0;
let tiempoIntroCreditos = 0;
let tiempoCreditosFinales = 0;
let intro;
let ruiditoz;
let cancionCreditos;


let titulos = ["Present day...     \npresent time...", "", "", "EL MENSAJE", "CARTA DIGITAL", "FORO DE RUMORES", "LA LUZ", "RASTRO DIGITAL",
    "PRIMER INGRESO \nAL WIRED", "CONTACTO SENSORIAL", "RUTA LENTA", "ENCUENTRO CON CHISA",
    "PASAJE ERRANTE", "INTERFERENCIA EN CASA", "SUEÑO LUCIDO", "FORO SECRETO \nDE LOS KNIGHTS",
    "VOCES \nCONTRADICTORIAS", "SIMBOLOS EN EL \nMUNDO REAL", "INVESTIGACION FISICA",
    "CAMINO DE EXPANSION", "NODO PROHIBIDO", "CAMINO CRITICO", "EIRI, \nEL ARQUITECTO",
    "EL DOBLE", "RETIRO INSEGURO", "FUSION", "RESISTENCIA FINAL",
    "FINAL DIVINIDAD", "FINAL HUMANO", "FINAL NADA",
    "EPILOGO \nSER TODOS", "EPILOGO \nSER ALGUIEN", "EPILOGO \nNO SER", ""];

function preload() {
    fuente = loadFont("assets/coderscrux.ttf");
    fuenteTitulos = loadFont("assets/gunship.ttf");

    intro = loadSound("assets/sonido/intro.mp3");
    ruiditoz = loadSound("assets/sonido/ruiditoz.mp3");
    cancionCreditos = loadSound("assets/sonido/megalomaniac.mp3");

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
    noSmooth();
    ruiditoz.setLoop(true);
}

function draw() {
    background(0);

    if (imagen[pantallaActual]) {
        image(imagen[pantallaActual], 0, 50, width, height);
    }

    textFont(fuente);
    textSize(16);
    fill(0);

    if (pantallaActual != 0 && pantallaActual != 1 && pantallaActual != 2 && pantallaActual != 33) {
        image(imagen[pantallaActual], 0, 0, 440, 430);
        menuBar();
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

        if (tiempoInicio == 0) {
            tiempoInicio = millis();
        }
        if (millis() - tiempoInicio > 5500) {
            pantallaActual = 1;
            tiempoInicio = 0;
        }
    }
}

function mostrarTitulos(pantalla) {
    let titulo = titulos[pantalla];
    fill(255);

    if (pantalla == 0) {
        fill(255);
        textAlign(CENTER, CENTER);
        textSize(20);
        text("*Play audio*", width / 2, 400);

        textSize(80);
        let count = frameCount / 10 % (titulo.length);
        let textoActual = titulo.slice(0, count);
        let leadingActual = textLeading();
        textLeading(75);
        text(textoActual, width / 2, height / 2);
        textLeading(leadingActual);

    } else {
        textFont(fuenteTitulos);
        textSize(10);
        textAlign(CENTER, CENTER);
        text(titulo, width / 2 + 220, 40);
    }
}

function introCreditos() {
    ruidoBlanco();
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);


    text("Trabajo realizado por:\n" + "Zoe Orellano y Estefania Raffaelli.\n" + "\n" + "Comision 2.\n" + "\n" + "Docente:\n" + "Matias Jauregui Lorda.\n", width / 2, height / 2);
    if (tiempoIntroCreditos == 0) {
        tiempoIntroCreditos = millis();
    }
    if (millis() - tiempoIntroCreditos > 5000) {
        pantallaActual = 2;
        tiempoIntroCreditos = 0;
    }
}

function menuBar() {
    let menuBarH = 20;

    fill(0);
    stroke(255);
    rect(0, 0, width, menuBarH);

    fill(255);
    noStroke();
    textAlign(LEFT, CENTER);
    text("File", 10, menuBarH / 2);
    text("Edit", 50, menuBarH / 2);
    text("Commands", 95, menuBarH / 2);
    text("The Wired", 160, menuBarH / 2);

    textAlign(LEFT, TOP);

    let textPanelW = 200;
    let textPanelX = width - textPanelW;
    fill(0);
    stroke(255);
    rect(textPanelX, menuBarH, textPanelW, height - menuBarH);

    fill(0);
    stroke(255);
    rect(ventanaX, ventanaY, ventanaW, ventanaH);
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
    let x = 460;
    let y = 50;
    let alturaDeLinea = 15;
    fill(255);
    noStroke();
    textAlign(LEFT, TOP);
    textSize(16);
    textLeading(alturaDeLinea);

    let padding = 20;
    if (pantallaActual == 2) {
        textAlign(CENTER, TOP);
        y = 50;
        x = width / 2;
    } else if (pantallaActual >= 3 && pantallaActual < 33) {
        let panelTextoX = 450;
        let menuBarH = 20;
        x = panelTextoX + padding;
        y = menuBarH + 70;
        textAlign(LEFT, TOP);
    }

    if (pantalla == 2) {
        let textoPantalla2 = "¡Bienvenido al Wired!\nUna red que respira detrás de la realidad.\n\n¿Te atreves a entrar?";
        text(textoPantalla2, x, y);
    }
    if (pantalla == 3) {
        let textoPantalla3 = "Nueva notificación.\nRemitente: Chisa Yomoda.\n\nMurió la semana pasada…\npero su nombre parpadea\nen mi bandeja.";
        text(textoPantalla3, x, y);
    }
    if (pantalla == 4) {
        let textoPantalla4 = "El correo se despliega:\n- No estoy muerta.\nMe mudé al Wired. Vení. -\n\nLas letras laten como\nun corazón.";
        text(textoPantalla4, x, y);
    }
    if (pantalla == 5) {
        let textoPantalla5 = "Usuarios anónimos comentan \nel suicidio de Chisa.\nUno escribe:\n- Ella sigue conectada. -";
        text(textoPantalla5, x, y);
    }
    if (pantalla == 6) {
        let textoPantalla6 = "La pantalla se ilumina\ncomo un sol artificial.\nSiento que la gravedad\nme arrastra hacia dentro.\n\n¿Estoy sola?\nNadie más parece\nsentir esto… nadie\npuede saber lo que\npasa aquí.";
        text(textoPantalla6, x, y);
    }
    if (pantalla == 7) {
        let textoPantalla7 = "El rastreo señala\nun nodo oculto\nen la red.\nCoordenadas imposibles:\nningún lugar.";
        text(textoPantalla7, x, y);
    }
    if (pantalla == 8) {
        let textoPantalla8 = "El aire es electricidad.\nUna voz familiar:\n- No tengas miedo. Vení. -";
        text(textoPantalla8, x, y);
    }
    if (pantalla == 9) {
        let textoPantalla9 = "Mi mano traspasa la luz.\nPor un instante siento\nmi cuerpo duplicado,\nmitad carne, mitad dato.";
        text(textoPantalla9, x, y);
    }
    if (pantalla == 10) {
        let textoPantalla10 = "Apago la computadora,\npero algo vibra\nen el aire.\nIncluso desconectada,\nel Wired me sigue.";
        text(textoPantalla10, x, y);
    }
    if (pantalla == 11) {
        let textoPantalla11 = "Chisa:\n- Esto es más real que\nlo que llaman realidad.\nAcá nadie muere. -";
        text(textoPantalla11, x, y);
    }
    if (pantalla == 12) {
        let textoPantalla12 = "Estoy en Cyberia,\nel club donde el Wired\nlate detrás de cada\nparlante.\nEntre luces\nestroboscópicas cruzo\npasillos de datos\nproyectados en las\nparedes. Avatares me\nmiran sin rostro.";
        text(textoPantalla12, x, y);
    }
    if (pantalla == 13) {
        let textoPantalla13 = "El cuarto parece normal,\npero las paredes respiran.\nMi teléfono vibra\nsin mensajes.";
        text(textoPantalla13, x, y);
    }
    if (pantalla == 14) {
        let textoPantalla14 = "Duermo, pero sigo\nconectada.\nCódigos flotan en mi\nmente.\n\nSi grito, ¿alguien me\nescuchará?\nO estoy atrapada en\neste mundo,\ncompletamente sola?";
        text(textoPantalla14, x, y);
    }
    if (pantalla == 15) {
        let textoPantalla15 = "En una terminal\nescondida al fondo\nde Cyberia,\nun chat cifrado se abre.\nHackers hablan de Eiri,\nun hombre que\n*se cree Dios del Wired*.";
        text(textoPantalla15, x, y);
    }
    if (pantalla == 16) {
        let textoPantalla16 = "Los avatares discuten:\nUnos prometen libertad,\notros advierten de la\npérdida del yo.";
        text(textoPantalla16, x, y);
    }
    if (pantalla == 17) {
        let textoPantalla17 = "En la escuela, una\nespiral luminosa\npalpita en el pasillo.\nNadie la ve,\nexcepto yo.";
        text(textoPantalla17, x, y);
    }
    if (pantalla == 18) {
        let textoPantalla18 = "Analizo los símbolos\nen mi cuaderno.\nCada trazo parece\nun mapa hacia\notro plano.";
        text(textoPantalla18, x, y);
    }
    if (pantalla == 19) {
        let textoPantalla19 = "Los Knights revelan\na Eiri, un hombre que\ndigitalizó su conciencia.\n- Podés ser como\nnosotros. -";
        text(textoPantalla19, x, y);
    }
    if (pantalla == 20) {
        let textoPantalla20 = "Accedo a un archivo\noculto.\nImágenes de mi propia\nhabitación, grabadas\ndesde dentro.";
        text(textoPantalla20, x, y);
    }
    if (pantalla == 21) {
        let textoPantalla21 = "Un usuario anónimo\nme envía un mensaje:\n- El Wired no es un lugar,\nes una idea. Pero toda\nidea consume. -";
        text(textoPantalla21, x, y);
    }
    if (pantalla == 22) {
        let textoPantalla22 = "Eiri aparece rodeado\nde código:\n- Tu conciencia es solo\nsoftware, Lain.\nEl cuerpo es el hardware\nque lo ejecuta,\npero no es necesario.\nSi el programa puede\ncorrer en la red,\n¿para qué aferrarse\na la carne?";
        text(textoPantalla22, x, y);
    }
    if (pantalla == 23) {
        let textoPantalla23 = "Una segunda yo\nme observa desde\nel otro lado de la\npantalla. Su sonrisa\nes idéntica a la mía.";
        text(textoPantalla23, x, y);
    }
    if (pantalla == 24) {
        let textoPantalla24 = "Intento alejarme,\npero el Wired filtra\nsusurros en cada\naparato encendido.";
        text(textoPantalla24, x, y);
    }
    if (pantalla == 25) {
        let textoPantalla25 = "El Wired late al ritmo\nde mi mente.\nLa frontera entre yo\ny el todo se disuelve.";
        text(textoPantalla25, x, y);
    }
    if (pantalla == 26) {
        let textoPantalla26 = "Siento el tirón del\ninfinito, pero recuerdo\nmi cuerpo.\nMi yo digital grita\npor existir.";
        text(textoPantalla26, x, y);
    }

    if (pantalla == 27) {
        let textoPantalla27 = "Las fronteras se\ndisuelven.\nLas voces de todos\nlos seres laten en\nmi mente hasta que\nninguna es distinta\nde la mía.\nNo hay yo, solo un\nmurmullo infinito.\nSer todos.";
        text(textoPantalla27, x, y);
    }
    if (pantalla == 28) {
        let textoPantalla28 = "Respiro el aire pesado\ndel mundo físico.\nSiento el frío, el dolor,\nla soledad… y elijo\nquedarme.\nAunque duela, elijo\nser alguien.";
        text(textoPantalla28, x, y);
    }
    if (pantalla == 29) {
        let textoPantalla29 = "Apago cada conexión,\ncada latido.\nNi carne, ni dato,\nni memoria.\nSolo la quietud\nabsoluta: no ser.";
        text(textoPantalla29, x, y);
    }
    if (pantalla == 30) {
        let textoPantalla30 = "La red respira a través\nde cada hilo de\npensamiento.\nNo hay principio ni\nfinal, solo un pulso\ncontinuo.\nEn cada risa,\nen cada llanto,\nen cada recuerdo humano,\nlate mi conciencia\ndisuelta.";
        text(textoPantalla30, x, y);
    }
    if (pantalla == 31) {
        let textoPantalla31 = "El amanecer rompe\nel cielo en fragmentos\ngrises.\nCamino entre cuerpos\nque nunca sabrán\nquién fui,\npero cada paso\nconfirma una verdad:\nexistir duele…\ny sin embargo, sigo.";
        text(textoPantalla31, x, y);
    }
    if (pantalla == 32) {
        let textoPantalla32 = "Silencio.\nNingún dato,\nningún latido.\nNi Wired ni mundo.\nSolo la calma perfecta\nde la nada,\ndonde incluso el recuerdo\nde haber elegido\nse desvanece.";
        text(textoPantalla32, x, y);
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
        fill(255);
        stroke(0);
        cursor(HAND);
        push();
        translate(x + w / 2, y + h / 2);
        rectMode(CENTER);
        rect(0, 0, w, h);
        noStroke();
        fill(0);
        textAlign(CENTER, CENTER);
        text(textos, 0, 0);
        pop();
    } else {
        fill(0);
        stroke(255);
        cursor(ARROW);
        rect(x, y, w, h);
        noStroke();
        fill(255);
        textAlign(CENTER, CENTER);
        text(textos, x + w / 2, y + h / 2);
    }

    textAlign(LEFT, CENTER);
}


function decisiones() {

    if (pantallaActual == 2) {
        dibujarBoton(285, 120, "Comenzar");
    }
    if (pantallaActual == 3) {/*PANTALLA 1: EL MENSAJE*/
        dibujarBoton(450, 400, "Abrir mensaje");
        dibujarBoton(450, 430, "Buscar en foros");

    }
    if (pantallaActual == 4) {/*PANTALLA 2A: CARTA DIGITAL*/
        dibujarBoton(450, 400, "¿Dónde estas?");
        dibujarBoton(450, 430, "Rastrear IP");

    }
    if (pantallaActual == 5) { /*PANTALLA 2B: FORO DE RUMORES*/
        dibujarBoton(450, 400, "Contactar al usuario");
        dibujarBoton(450, 430, "Descargar archivo");

    }
    if (pantallaActual == 6) { /*PANTALLA 3A: LA LUZ*/
        dibujarBoton(450, 400, "Dejarme absorber");
        dibujarBoton(450, 430, "Sentir la luz");

    } if (pantallaActual == 7) { /*PANTALLA 3B: RASTRO DIGITAL*/
        dibujarBoton(450, 400, "Abrir nodo");
        dibujarBoton(450, 430, "Guardar información");

    } if (pantallaActual == 8) { /*PANTALLA 4A: PRIMER INGRESO AL WIRED*/
        dibujarBoton(450, 400, "Seguir la voz de Chisa");
        dibujarBoton(450, 430, "Ir hacia una luz distante");

    } if (pantallaActual == 9) { /*PANTALLA 4B: CONTACTO SENSORIAL*/
        dibujarBoton(450, 400, "Entrar completamente");
        dibujarBoton(450, 430, "Retirar la mano");

    } if (pantallaActual == 10) { /*PANTALLA 4C: RUTA LENTA*/
        dibujarBoton(450, 400, "Anotar el nodo");
        dibujarBoton(450, 430, "Que invada en sueños");

    } if (pantallaActual == 11) { /*PANTALLA 5A: ENCUENTRO CON CHISA*/
        dibujarBoton(450, 400, "Creerle y avanzar");
        dibujarBoton(450, 430, "Pedir pruebas");

    } if (pantallaActual == 12) { /*PANTALLA 5B: PASAJE ERRANTE*/
        dibujarBoton(450, 400, "Seguir a un avatar");
        dibujarBoton(450, 430, "Buscar una salida");

    } if (pantallaActual == 13) { /*PANTALLA 5C: INTERFERENCIA EN CASA*/
        dibujarBoton(450, 400, "Revisar el teléfono");
        dibujarBoton(450, 430, "Anotar los símbolos");

    } if (pantallaActual == 14) { /*PANTALLA 5D: SUEÑO LÚCIDO*/
        dibujarBoton(450, 400, "Seguir los códigos");
        dibujarBoton(450, 430, "Romper el sueño");

    } if (pantallaActual == 15) { /*PANTALLA 6A: FORO SECRETO DE LOS KNIGHTS*/
        dibujarBoton(450, 400, "Preguntar por Eiri");
        dibujarBoton(450, 430, "Acceder a servidor oculto");

    } if (pantallaActual == 16) { /*PANTALLA 6B: VOCES CONTRADICTORIAS*/
        dibujarBoton(450, 400, "Libertad");
        dibujarBoton(450, 430, "Peligro");

    } if (pantallaActual == 17) { /*PANTALLA 6C: SÍMBOLOS EN EL MUNDO REAL*/
        dibujarBoton(450, 400, "Tocarla");
        dibujarBoton(450, 430, "Investigarla después");

    } if (pantallaActual == 18) { /*PANTALLA 6D: INVESTIGACIÓN FÍSICA*/
        dibujarBoton(450, 400, "Reconstruir el patrón");
        dibujarBoton(450, 430, "Romper el cuaderno");

    } if (pantallaActual == 19) { /*PANTALLA 7A: CAMINO DE EXPANSIÓN*/
        dibujarBoton(450, 400, "Aceptar la invitación");
        dibujarBoton(450, 430, "Exigir saber el precio");

    } if (pantallaActual == 20) { /*PANTALLA 7B: NODO PROHIBIDO*/
        dibujarBoton(450, 400, "Investigar la cámara");
        dibujarBoton(450, 430, "Cerrar todo y respirar");

    } if (pantallaActual == 21) { /*PANTALLA 7C: CAMINO CRÍTICO*/
        dibujarBoton(450, 400, "Responderle");
        dibujarBoton(450, 430, "Silenciarlo y buscar pruebas");

    } if (pantallaActual == 22) { /*PANTALLA 8A: EIRI, EL ARQUITECTO*/
        dibujarBoton(450, 400, "Aceptar su visión");
        dibujarBoton(450, 430, "Desafiarlo");

    } if (pantallaActual == 23) { /*PANTALLA 8B: EL DOBLE*/
        dibujarBoton(450, 400, "Aceptar que soy yo");
        dibujarBoton(450, 430, "Negarla con fuerza");

    } if (pantallaActual == 24) { /*PANTALLA 8C: RETIRO INSEGURO*/
        dibujarBoton(450, 400, "Desconectar dispositivos");
        dibujarBoton(450, 430, "Seguir las voces");

    } if (pantallaActual == 25) { /*PANTALLA 9A: FUSIÓN*/
        dibujarBoton(450, 390, "Fundirme con todos");
        dibujarBoton(450, 415, "Elijo el mundo que duele");
        dibujarBoton(450, 440, "Borrarme para siempre");

    } if (pantallaActual == 26) { /*PANTALLA 9B: RESISTENCIA FINAL*/
        dibujarBoton(450, 390, "Ser todos");
        dibujarBoton(450, 415, "Ser alguien");
        dibujarBoton(450, 440, "No ser");

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
        dibujarBoton(450, 400, "Ver Creditos");

    }
    if (pantallaActual == 31) { /*PANTALLA 11B: EPÍLOGO SER ALGUIEN*/
        dibujarBoton(450, 400, "Ver Creditos");


    }
    if (pantallaActual == 32) { /*PANTALLA 10C: EPÍLOGO NO SER*/
        dibujarBoton(450, 400, "Ver Creditos");
    }
}

function botonClick(x, y, texto) {

    let paddingX = 10;
    let paddingY = 5;
    textFont(fuente);
    textSize(16);
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
        if (botonClick(285, 120, "Comenzar")) { // "Comenzar" -> EL MENSAJE
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
        if (botonClick(450, 400, "Abrir mensaje")) { // "Abrir mensaje" -> 2A
            pantallaActual = 4;
            return;
        }
        if (botonClick(450, 430, "Buscar en foros")) { // "Buscar en foros" -> 2B
            pantallaActual = 5;
            return;
        }
    }

    // PANTALLA 2A: CARTA DIGITAL (4)
    if (pantallaActual == 4) {
        if (botonClick(450, 400, "¿Dónde estás?")) { // "¿Dónde estás?" -> 3A (La Luz)
            pantallaActual = 6;
            return;
        }
        if (botonClick(450, 430, "Rastrear IP")) { // "Rastrear IP" -> 3B (Rastro Digital)
            pantallaActual = 7;
            return;
        }
    }

    // PANTALLA 2B: FORO DE RUMORES (5)
    if (pantallaActual == 5) {
        if (botonClick(450, 400, "Contactar al usuario")) { // "Contactar al usuario" -> 3B
            pantallaActual = 7;
            return;
        }
        if (botonClick(450, 430, "Descargar archivo")) { // "Descargar archivo" -> 3A
            pantallaActual = 6;
            return;
        }
    }

    // PANTALLA 3A: LA LUZ (6)
    if (pantallaActual == 6) {
        if (botonClick(450, 400, "Dejarme absorber")) { // "Dejarme absorber" -> 4A
            pantallaActual = 8;
            return;
        }
        if (botonClick(450, 430, "Sentir la luz")) { //  -> 4B
            pantallaActual = 9;
            return;
        }
    }

    // PANTALLA 3B: RASTRO DIGITAL (7)
    if (pantallaActual == 7) {
        if (botonClick(450, 400, "Abrir nodo")) { // "Abrir nodo" -> 4A
            pantallaActual = 8;
            return;
        }
        if (botonClick(450, 430, "Guardar información")) { // "Guardar información" -> 4C
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
        if (botonClick(450, 430, "Ir hacia una luz distante")) { // "Caminar hacia una luz distante" -> 5B
            pantallaActual = 12;
            return;
        }
    }

    // PANTALLA 4B: CONTACTO SENSORIAL (9)
    if (pantallaActual == 9) {
        if (botonClick(450, 400, "Entrar completamente")) { // "Entrar completamente" -> 5A
            pantallaActual = 11;
            return;
        }
        if (botonClick(450, 430, "Retirar la mano")) { // "Retirar la mano..." -> 5C
            pantallaActual = 13;
            return;
        }
    }

    // PANTALLA 4C: RUTA LENTA (10)
    if (pantallaActual == 10) {
        if (botonClick(450, 400, "Anotar el nodo")) { // "Anotar el nodo..." -> 5C
            pantallaActual = 13;
            return;
        }
        if (botonClick(450, 430, "Que me invada en sueños")) { // "Dormir..." -> 5D
            pantallaActual = 14;
            return;
        }
    }

    // PANTALLA 5A: ENCUENTRO CON CHISA (11)
    if (pantallaActual == 11) {
        if (botonClick(450, 400, "Creerle y avanzar")) { // "Creerle y avanzar" -> 6A
            pantallaActual = 15;
            return;
        }
        if (botonClick(450, 430, "Pedir pruebas")) { // "Pedir pruebas..." -> 6B
            pantallaActual = 16;
            return;
        }
    }

    // PANTALLA 5B: PASAJE ERRANTE (12)
    if (pantallaActual == 12) {
        if (botonClick(450, 400, "Seguir a un avatar")) { // "Seguir a un avatar brillante" -> 6B
            pantallaActual = 16;
            return;
        }
        if (botonClick(450, 430, "Buscar una salida")) { // "Buscar una salida" -> 6C
            pantallaActual = 17;
            return;
        }
    }

    // PANTALLA 5C: INTERFERENCIA EN CASA (13)
    if (pantallaActual == 13) {
        if (botonClick(450, 400, "Revisar el teléfono")) { // "Revisar el teléfono" -> 6C
            pantallaActual = 17;
            return;
        }
        if (botonClick(450, 430, "Anotar los símbolos")) { // "Anotar los símbolos..." -> 6D
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
        if (botonClick(450, 430, "Romper el sueño")) { // "Romper el sueño" -> 6C
            pantallaActual = 17;
            return;
        }
    }

    // PANTALLA 6A: FORO SECRETO DE LOS KNIGHTS (15)
    if (pantallaActual == 15) {
        if (botonClick(450, 400, "Preguntar por Eiri")) { // "Preguntar por Eiri" -> 7A
            pantallaActual = 19;
            return;
        }
        if (botonClick(450, 430, "Acceder a  servidor oculto")) { // "Solicitar acceso..." -> 7B
            pantallaActual = 20;
            return;
        }
    }

    // PANTALLA 6B: VOCES CONTRADICTORIAS (16)
    if (pantallaActual == 16) {
        if (botonClick(450, 400, "Libertad")) { // "Seguir a los que prometen libertad" -> 7A
            pantallaActual = 19;
            return;
        }
        if (botonClick(450, 430, "Peligro")) { // "Seguir a los que advierten peligro" -> 7C
            pantallaActual = 21;
            return;
        }
    }

    // PANTALLA 6C: SÍMBOLOS EN EL MUNDO REAL (17)
    if (pantallaActual == 17) {
        if (botonClick(450, 400, "Tocarla")) { // "Tocarla" -> 7B
            pantallaActual = 20;
            return;
        }
        if (botonClick(450, 430, "Investigarla después")) { // "Dibujarla..." -> 7C
            pantallaActual = 21;
            return;
        }
    }

    // PANTALLA 6D: INVESTIGACIÓN FÍSICA (18)
    if (pantallaActual == 18) {
        if (botonClick(450, 400, "Reconstruir el patrón")) { // "Reconstruir el patrón" -> 7C
            pantallaActual = 21;
            return;
        }
        if (botonClick(450, 430, "Romper el cuaderno")) { // "Intentar romper el cuaderno" -> 7B
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
        if (botonClick(450, 430, "Exigir saber el precio")) { // "Exigir saber el precio" -> 8B
            pantallaActual = 23;
            return;
        }
    }

    // PANTALLA 7B: NODO PROHIBIDO (20)
    if (pantallaActual == 20) {
        if (botonClick(450, 400, "Investigar la cámara")) { // "Investigar la cámara invisible" -> 8B
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
        if (botonClick(450, 400, "Responderle")) { // "Responderle" -> 8B
            pantallaActual = 23;
            return;
        }
        if (botonClick(450, 430, "Buscar pruebas")) { // "Silenciarlo..." -> 8C
            pantallaActual = 24;
            return;
        }
    }

    // PANTALLA 8A: EIRI, EL ARQUITECTO (22)
    if (pantallaActual == 22) {
        if (botonClick(450, 400, "Aceptar su visión")) { // "Aceptar su visión" -> 9A
            pantallaActual = 25;
            return;
        }
        if (botonClick(450, 430, "Desafiarlo")) { // "Desafiarlo" -> 9B
            pantallaActual = 26;
            return;
        }
    }

    // PANTALLA 8B: EL DOBLE (23)
    if (pantallaActual == 23) {
        if (botonClick(450, 400, "Aceptar que soy yo")) { // "Aceptar que ella soy yo" -> 9A
            pantallaActual = 25;
            return;
        }
        if (botonClick(450, 430, "Negarla con fuerza")) { // "Negarla con fuerza" -> 9B
            pantallaActual = 26;
            return;
        }
    }

    // PANTALLA 8C: RETIRO INSEGURO (24)
    if (pantallaActual == 24) {
        if (botonClick(450, 400, "Desconectar dispositivos")) { // "Desconectar todos los dispositivos" -> 9B
            pantallaActual = 26;
            return;
        }
        if (botonClick(450, 430, "Seguir las voces")) { // "Seguir las voces una última vez" -> 9A
            pantallaActual = 25;
            return;
        }
    }

    // PANTALLA 9A: FUSIÓN (25)
    if (pantallaActual == 25) {
        if (botonClick(450, 390, "Fundirme con todos")) { // "Fundirme con todas las voces" -> Final Divinidad
            pantallaActual = 27;
            return;
        }
        if (botonClick(450, 415, "Elijo el mundo que duele")) { // "Quedarme en el mundo que duele" -> Final Humano
            pantallaActual = 28;
            return;
        }
        if (botonClick(450, 440, "Borrarme para siempre")) { // "Borrarme para siempre" -> Final Nada
            pantallaActual = 29;
            return;
        }
    }

    // PANTALLA 26: RESISTENCIA FINAL
    if (pantallaActual == 26) {
        if (botonClick(450, 390, "Ser todos")) { // "Ser todos" -> Final Divinidad
            pantallaActual = 27;
            return;
        }
        if (botonClick(450, 415, "Ser alguien")) { // "Ser alguien" -> Final Humano
            pantallaActual = 28;
            return;
        }
        if (botonClick(450, 440, "No ser")) { // "No ser" -> Final Nada
            pantallaActual = 29;
            return;
        }
    }
    if (pantallaActual == 30) {
        if (botonClick(450, 400, "Ver Creditos")) { // "Ver Creditos"
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
        if (botonClick(450, 400, "Ver Creditos")) { // "Creditos"
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
        if (botonClick(450, 400, "Ver Creditos")) { // "Creditos"
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
