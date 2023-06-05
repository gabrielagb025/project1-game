const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");

const game = new Game(ctx);
game.start();

document.addEventListener('keydown', (event) => game.onKeyEvent(event));
document.addEventListener('keyup', (event) => game.onKeyEvent(event));

/*document.addEventListener("keydown", event => {
    
    if (event.code === "ArrowLeft") {
        game.onKeyEvent(event);
        game.player.speedX = -4;
    }

    if (event.code === "ArrowRight") {
        game.onKeyEvent(event);
        game.player.speedX = 4;
    }

    if (event.code === "ArrowUp") {
        game.onKeyEvent(event);
    }
})

document.addEventListener("keyup", event => {
    
    if (event.code === "ArrowLeft") {
        game.onKeyEvent(event);
        game.player.speedX = 0;     
  }
  
  if (event.code === "ArrowRight") {
        game.onKeyEvent(event);
        game.player.speedX = 0;    
  }

});*/