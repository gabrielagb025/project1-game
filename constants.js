// LETRAS TECLADO
const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_UP = 38;

// IMÁGENES DE LOS HUEVOS
const types = {
    blue: "./images/circulos/blue.png",
    green: "./images/circulos/green.png",
    orange: "./images/circulos/orange.png",
    pink: "./images/circulos/pink.png",
    red: "./images/circulos/rojo.png",
    yellow: "./images/circulos/yellow.png"
}

const allEggs = ["blue", "green", "orange", "pink", "red", "yellow"];

function getRandomImageSrc() {
    const randomIndex = Math.floor(Math.random() * allEggs.length);
    const imageName = allEggs[randomIndex];
    return types[imageName];
}

const LEVEL_1 = {
    catch: ["blue", "orange", "yellow"],
    noCatch: ["green", "pink", "red"]
}
