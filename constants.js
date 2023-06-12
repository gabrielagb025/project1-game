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
    scores: {
        yellow: 1,
    },

    numCounter: 80,

    speedY: 4

};

const LEVEL_2 = {
    scores: {
        pink: 3,
        yellow: 5,
        orange: 3,
        green: 4
    },

    numCounter: 90,

    speedY: 6

};

const LEVEL_3 = {
    scores: {
        red: 5,
        yellow: 3,
        blue: 5,
        green: 4,
        pink: 2
    },

    numCounter: 70,

    speedY: 7

};

const LEVELS = [LEVEL_1, LEVEL_2, LEVEL_3];
