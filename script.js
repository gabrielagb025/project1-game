const homeScreen = document.querySelector(".home-screen");
const instructionsScreen = document.querySelector(".instructions-screen");
const gameOverScreen = document.querySelector(".game-over-screen");
const winScreen = document.querySelector(".win-screen");

const startButton = document.querySelector("#start-button");
const instructionsButton = document.querySelector("#instructions-button");
const backButton = document.querySelector("#back-button");
const restartButton1 = document.querySelector("#restart-button1");
const restartButton2 = document.querySelector("#restart-button2");
const goHomeScreenButton = document.querySelector("#go-home-screen-button");
const musicButton = document.querySelector("#music-button");

const containerGame = document.querySelector(".container-game");
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");

const game = new Game(ctx);

document.addEventListener("keydown", (event) => game.onKeyEvent(event));
document.addEventListener("keyup", (event) => game.onKeyEvent(event));

function startGame() {
    homeScreen.classList.add('hidden');
    containerGame.classList.remove('hidden');
    game.start();
}

function restartGame() {
    document.location.reload();
}

function showInstructions() {
    homeScreen.classList.add('hidden');
    instructionsScreen.classList.remove('hidden');
}

function goBackToHomeScreen() {
    instructionsScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
}

function showGameOverScreen() {
    containerGame.classList.add('hidden');
    gameOverScreen.classList.remove('hidden');
}

function showWinGameScreen() {
    containerGame.classList.add('hidden');
    winScreen.classList.remove('hidden');
}

function noMusic() {
    if(game.overallMusic.paused){
        game.overallMusic.play();
    } else {
        game.overallMusic.pause();
    }
    
}

startButton.addEventListener("click", startGame);
instructionsButton.addEventListener("click", showInstructions);
backButton.addEventListener("click", goBackToHomeScreen);
restartButton1.addEventListener("click", restartGame);
restartButton2.addEventListener("click", restartGame);
musicButton.addEventListener("click", noMusic);

