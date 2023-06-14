// LETRAS TECLADO
const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_UP = 38;

// IMÁGENES DE LOS HUEVOS
const TYPES = {
    blue: "./images/huevos/azul.PNG",
    green: "./images/huevos/verde.PNG",
    orange: "./images/huevos/naranja.PNG",
    pink: "./images/huevos/rosa.PNG",
    red: "./images/huevos/rojo.PNG",
    yellow: "./images/huevos/amarillo.PNG",
}

const ALL_EGGS = ["blue", "green", "orange", "pink", "red", "yellow"];


const LEVEL_1 = {
    background: "./images/fondos con nubes aparte/NIVEL-1/FONDO.PNG",

    leftCloud: "./images/fondos con nubes aparte/NIVEL-1/NUBES IZQ.PNG",

    rightCloud: "./images/fondos con nubes aparte/NIVEL-1/NUBES DCHA.png",

    scores: {
        yellow: 1,
    },

    numCounter: 80,

    speedY: 4

};

const LEVEL_2 = {

    background: "./images/fondos con nubes aparte/NIVEL-2/FONDO.PNG",

    leftCloud: "./images/fondos con nubes aparte/NIVEL-2/NUBES IZQ.PNG",

    rightCloud: "./images/fondos con nubes aparte/NIVEL-2/NUBES DCHA.PNG",

    scores: {
        pink: 1
        /*pink: 3,
        yellow: 5,
        orange: 3,
        green: 4*/
    },

    numCounter: 80,

    speedY: 5

};

const LEVEL_3 = {

    background: "./images/fondos con nubes aparte/NIVEL-3/FONDO.PNG",

    leftCloud: "./images/fondos con nubes aparte/NIVEL-3/NUBES IZQ.PNG",

    rightCloud: "./images/fondos con nubes aparte/NIVEL-3/NUBES DCHA.PNG",

    scores: {
        blue: 1
        /*red: 5,
        yellow: 3,
        blue: 5,
        green: 4,
        pink: 2*/
    },

    numCounter: 70,

    speedY: 5

};

const LEVELS = [LEVEL_1, LEVEL_2, LEVEL_3];
