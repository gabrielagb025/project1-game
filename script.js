const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");

const game = new Game(ctx);
game.start();

document.addEventListener('keydown', (event) => game.onKeyEvent(event));
document.addEventListener('keyup', (event) => game.onKeyEvent(event));
