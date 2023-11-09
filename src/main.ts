// MÓDULO 05 - Condicionales - Laboratorio

let puntos : number = 0;

type Estado =
    | "MENOR_QUE_4"
    | "HA_SIDO_5"
    | "HA_SIDO_6_O_7"
    | "GANADO"
    | "PERDIDO"
    | "NINGUN_ESTADO";

const muestraPuntuacion = () => {
    const puntuacionElement = document.getElementById("puntuacion");
    if (puntuacionElement){
        puntuacionElement.innerHTML = `Esta es tu puntuación: ${puntos}`;
    };
};

const numeroAleatorio = () : number =>  Math.floor(Math.random() * 10) + 1;

const numeroCarta = (carta: number) : number => carta > 7 ? carta + 2 : carta;

const puntosCarta = (carta: number) : number  => carta <= 7 ? carta : 0.5;    

const dameUrlCarta = (carta: number) => {
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
    }
};

const sumarPuntuacion = (carta: number) => puntos += carta;

const pintarMensajes = (mensaje: string) => {
    const mePlantoElement = document.getElementById("mePlanto");
    if (mePlantoElement !== null && mePlantoElement !== undefined){
        mePlantoElement.innerHTML = mensaje;
    } else {
        console.error("No se ha encontrado el elemento con id mePlanto");
    };
};

const mensajesPuntuacion = (estado: Estado) => {
     let mensaje: string ="";

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
        case "GANADO":
        mensaje = `¡Lo has clavado! ¡Enhorabuena!`;
        break;
        case "PERDIDO":
        mensaje = `¡Game Over! Tu puntuación superó 7.5`;
        break;
        case "NINGUN_ESTADO":
        mensaje = ``;
        break;
    };
    pintarMensajes(mensaje);
};

const comprobarEstadoPartida = (puntos: number) : Estado => {
        if (puntos < 4) {
            return "MENOR_QUE_4";
        }
        if (puntos === 5 ) {
            return "HA_SIDO_5";
        }
        if (puntos >= 6 && puntos <= 7) {
            return "HA_SIDO_6_O_7";
        }
        if (puntos === 7.5) {
            return "GANADO";
        }
        if (puntos > 7.5) {
            return "PERDIDO";
        }
        return "NINGUN_ESTADO";
};

const botonesPedirCarta = () => {
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

    if (botonQueHabriaPasado !== null && botonQueHabriaPasado !== undefined && botonQueHabriaPasado instanceof HTMLButtonElement) {
    botonQueHabriaPasado.style.display = "none";
    } else {
    console.error(`No se ha encontrado el elemento con id verResultado`);
    };
    
    if (botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement) {
    botonNuevaPartida.style.display = "inline";
    } else {
    console.error(`No se ha encontrado el elemento con id nuevaPartida`);
    };
};

const ganarOPerder = () => {
    const estado = comprobarEstadoPartida(puntos);
    if (estado === "GANADO" || estado === "PERDIDO") {
        mensajesPuntuacion(estado);
        botonesPedirCarta();
    }
};

const handlePedirCarta = () : void => {
    const valorAleatorio = numeroAleatorio();
    const carta = numeroCarta(valorAleatorio);
    const puntos = puntosCarta (carta);
    mostrarCarta(carta);
    sumarPuntuacion(puntos);
    muestraPuntuacion();
    ganarOPerder();
};

const botonesMePlanto = () => {
    if (botonPedirCarta !== null && botonPedirCarta !== undefined && botonPedirCarta instanceof HTMLButtonElement) {
        botonPedirCarta.disabled = true;
        } else {
        console.error(`No se ha encontrado el elemento con id pedircarta`);
        };

    if (botonQueHabriaPasado !== null && botonQueHabriaPasado !== undefined && botonQueHabriaPasado instanceof HTMLButtonElement) {
        botonQueHabriaPasado.style.display = "inline";
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
    const estado: Estado = comprobarEstadoPartida(puntos);
    mensajesPuntuacion(estado);
    botonesMePlanto();
};

const botonesNuevaPartida = () => {
    if (botonPedirCarta !== null && botonPedirCarta !== undefined && botonPedirCarta instanceof HTMLButtonElement) {
        botonPedirCarta.disabled = false;
       } else {
        console.error(`No se ha encontrado el elemento con id pedirCarta`);
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
    
    if (botonQueHabriaPasado !== null && botonQueHabriaPasado !== undefined && botonQueHabriaPasado instanceof HTMLButtonElement) {
        botonQueHabriaPasado.style.display = "none";
       } else {
        console.error(`No se ha encontrado el elemento con id verResultado`);
       };
};

const handleNuevaPartida = () => {
    puntos = 0;
    mostrarCarta(0);
    sumarPuntuacion(0);
    muestraPuntuacion();
    botonesNuevaPartida();
    mensajesPuntuacion("NINGUN_ESTADO");
};

const handleQueHabriaPasado = () => {
    const valorAleatorio = numeroAleatorio();
    const carta = numeroCarta(valorAleatorio);
    const puntos = puntosCarta (carta);
        mostrarCarta(carta);
        sumarPuntuacion(puntos);
        muestraPuntuacion();
        mensajesPuntuacion("NINGUN_ESTADO");
};

const botonMePlanto = document.getElementById("plantarse");
const botonPedirCarta = document.getElementById("pedirCarta");
const botonNuevaPartida = document.getElementById("nuevaPartida");
const botonQueHabriaPasado = document.getElementById("queHabriaPasado");

const eventos = () => {
    mostrarCarta(0);
    muestraPuntuacion();
    if (botonPedirCarta !== null && botonPedirCarta !== undefined && botonPedirCarta instanceof HTMLButtonElement) {
        botonPedirCarta.addEventListener("click", handlePedirCarta);
       } else {
        console.error(`No se ha encontrado el elemento con id pedirCarta`);
       };
    
    if (botonMePlanto !== null && botonMePlanto !== undefined && botonMePlanto instanceof HTMLButtonElement) {
        botonMePlanto.addEventListener("click", handleMePlanto);
       } else {
        console.error(`No se ha encontrado el elemento con id mePlanto`);
       };
    
    if (botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement) {
        botonNuevaPartida.addEventListener("click", handleNuevaPartida);
       } else {
        console.error(`No se ha encontrado el elemento con id nuevaPartida`);
       };
    
    if (botonQueHabriaPasado !== null && botonQueHabriaPasado !== undefined && botonQueHabriaPasado instanceof HTMLButtonElement) {
        botonQueHabriaPasado.addEventListener("click", handleQueHabriaPasado);
       } else {
      console.error(`No se ha encontrado el elemento con id verResultado`);
      };
};

document.addEventListener("DOMContentLoaded", eventos);

