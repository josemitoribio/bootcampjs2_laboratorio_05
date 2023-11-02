import "./style.css";

// MÓDULO 05 - Condicionales - Laboratorio

// PARTE 1 MOSTRAR PUNTUACIÓN

let puntos : number = 0;

const muestraPuntuacion = () => {
    const puntuacionElement = document.getElementById("puntuacion");
    if (puntuacionElement){
        puntuacionElement
        .innerHTML = `Esta es tu puntuación: ${puntos}`;
    };
};

// PARTE 2 PEDIR CARTA 

const dameCarta = () : number => {
    const aleatorio : number = Math.floor(Math.random() * 11);
    return aleatorio > 7 ? aleatorio + 2 : aleatorio;
};

const puntosCarta = (carta: number) : number  => {
    return carta <= 7 ? carta : 0.5;
};

// PARTE 3 MOSTRAR CARTA

const dameUrlCarta = (carta:number) => {
    switch (carta) {
        case 1: 
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
        case 2:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
        case 3: 
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
        case 4:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
        case 5:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
        case 6:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
        case 7:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
        case 10:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
        case 11:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
        case 12:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
        default:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
        }
};

const mostrarCarta = (carta: number) => {
    const urlCarta = dameUrlCarta(carta);
    const elementoCarta = document.getElementById("carta");
    if (elementoCarta !== null && elementoCarta !== undefined && elementoCarta instanceof HTMLImageElement) {
        elementoCarta.src = urlCarta;
    } else {
        console.error(`No se ha encontrado el elemento con id carta`);
    };
};

// PARTE 4 SUMAR PUNTUACIÓN 

const sumarPuntuacion = (carta: number) => {
    puntos += puntosCarta(carta);
    muestraPuntuacion();
};

// ESTADOS

type Estado =
    | "MENOR_QUE_4"
    | "HA_SIDO_5"
    | "HA_SIDO_6_O_7"
    | "NINGUN_ESTADO";

// GAME OVER Y GANAR PARTIDA

const gameOver = () : boolean => 
    puntos > 7.5;

const ganarPartida = () : boolean =>
    puntos === 7.5;

const botonesFinalPartida = () => {

        if (botonPedirCarta !== null && botonPedirCarta !== undefined && botonPedirCarta instanceof HTMLButtonElement) {
         botonPedirCarta.disabled = true;
        } else {
         console.error(`No se ha encontrado el elemento con id pedircarta`);
        };
     
        if (botonMePlanto !== null && botonMePlanto !== undefined && botonMePlanto instanceof HTMLButtonElement) {
         botonMePlanto.disabled = true;
        } else {
         console.error(`No se ha encontrado el elemento con id mePlanto`);
        };
     
        if (botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement) {
         botonNuevaPartida.style.display = "inline";
        } else {
         console.error(`No se ha encontrado el elemento con id nuevaPartida`);
        };
     
        if (botonVerResultado !== null && botonVerResultado !== undefined && botonVerResultado instanceof HTMLButtonElement) {
         botonVerResultado.style.display = "none";
        } else {
         console.error(`No se ha encontrado el elemento con id verResultado`);
        };
     
     };

const gestionarFinalPartida = () => {
    
    let mensaje: string = "";

    if (gameOver()) {
        botonesFinalPartida();
        mensaje = `¡Game Over! Tu puntuación superó 7.5`;

    }
    if (ganarPartida()) {
        botonesFinalPartida();
        mensaje = `¡Lo has clavado! ¡Enhorabuena!`;
}
const finalPartidaElement = document.getElementById("finalPartida");
    if (finalPartidaElement !== null && finalPartidaElement !== undefined){
        finalPartidaElement.innerHTML = mensaje;
    } else {
        console.error("No se ha encontrado el elemento con id finalPartida");
    };
};

// PARTE 6 ME PLANTO

const mensajePlantarse = (estado: Estado) => {
    
    let mensaje: string = "";

    switch (estado) {
        case "MENOR_QUE_4":
        mensaje = `Has sido muy conservador`;
        break;
        case "HA_SIDO_5":
        mensaje = `Te ha entrado el canguelo`;
        break;
        case "HA_SIDO_6_O_7":
        mensaje = `Casi, casi...`;
        break;
        case "NINGUN_ESTADO":
        mensaje = ``;
        break;
    }

    const mePlantoElement = document.getElementById("mePlanto");
    if (mePlantoElement !== null && mePlantoElement !== undefined){
        mePlantoElement.innerHTML = mensaje;
    } else {
        console.error("No se ha encontrado el elemento con id mePlanto");
    };
};

const comprobarMePlanto = (puntos: number) : Estado => {
        if (puntos < 4) {
            return "MENOR_QUE_4";
        }
        if (puntos === 5 ) {
            return "HA_SIDO_5";
        }
        if (puntos >= 6 && puntos <= 7) {
            return "HA_SIDO_6_O_7";
        }
        return "NINGUN_ESTADO";
};

// BOTÓN ME PLANTO 

const botonesMePlanto = () => {
    if (botonPedirCarta !== null && botonPedirCarta !== undefined && botonPedirCarta instanceof HTMLButtonElement) {
        botonPedirCarta.disabled = true;
        } else {
        console.error(`No se ha encontrado el elemento con id pedircarta`);
        };

    if (botonVerResultado !== null && botonVerResultado !== undefined && botonVerResultado instanceof HTMLButtonElement) {
        botonVerResultado.style.display = "inline";
        } else {
        console.error(`No se ha encontrado el elemento con id verResultado`);
        };
    
    if (botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement) {
        botonNuevaPartida.style.display = "inline";
        } else {
        console.error(`No se ha encontrado el elemento con id nuevaPartida`);
        };
};

const handleMePlanto = () => {
    const estado: Estado = comprobarMePlanto(puntos);
    mensajePlantarse(estado);
    botonesMePlanto();
};
    
const botonMePlanto = document.getElementById("plantarse");
botonMePlanto?.addEventListener("click", handleMePlanto);

// BOTÓN PEDIR CARTA

const botonesPedirCarta = () => {
    if (botonVerResultado !== null && botonVerResultado !== undefined && botonVerResultado instanceof HTMLButtonElement) {
        botonVerResultado.style.display = "none";
       } else {
        console.error(`No se ha encontrado el elemento con id verResultado`);
       };    
};

const handlePedirCarta = () => {
    const carta = dameCarta();
    mostrarCarta(carta);
    sumarPuntuacion(carta);
    muestraPuntuacion();
    gestionarFinalPartida();
    botonesPedirCarta();
};

const botonPedirCarta = document.getElementById("pedirCarta");
botonPedirCarta?.addEventListener("click", handlePedirCarta);

// BOTÓN NUEVA PARTIDA

const botonesNuevaPartida = () => {
    if (botonPedirCarta !== null && botonPedirCarta !== undefined && botonPedirCarta instanceof HTMLButtonElement) {
        botonPedirCarta.disabled = false;
       } else {
        console.error(`No se ha encontrado el elemento con id pedircarta`);
       };
    
    if (botonMePlanto !== null && botonMePlanto !== undefined && botonMePlanto instanceof HTMLButtonElement) {
        botonMePlanto.disabled = false;
       } else {
        console.error(`No se ha encontrado el elemento con id mePlanto`);
       };
    
    if (botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement) {
        botonNuevaPartida.style.display = "none";
       } else {
        console.error(`No se ha encontrado el elemento con id nuevaPartida`);
       };
    
       if (botonVerResultado !== null && botonVerResultado !== undefined && botonVerResultado instanceof HTMLButtonElement) {
       botonVerResultado.style.display = "none";
       } else {
        console.error(`No se ha encontrado el elemento con id verResultado`);
       };
};

const handleNuevaPartida = () => {
    puntos = 0;
    mostrarCarta(0);
    sumarPuntuacion(0);
    muestraPuntuacion();
    gestionarFinalPartida();
    mensajePlantarse("NINGUN_ESTADO");
    botonesNuevaPartida();
};

const botonNuevaPartida = document.getElementById("nuevaPartida");
botonNuevaPartida?.addEventListener("click", (handleNuevaPartida));

// BOTONES DESACTIVADOS


// BOTÓN VER RESULTADO

const handleVerResultado = () => {
    while (true) {
        const carta = dameCarta();
        mostrarCarta(carta);
        sumarPuntuacion(carta);
        if (gameOver() || ganarPartida()) {
            break;
        }
}
};

const botonVerResultado = document.getElementById("verResultado");
botonVerResultado?.addEventListener("click", handleVerResultado);
