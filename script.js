const homeScreen = document.querySelector("#home-screen");
const instructionsScreen = document.querySelector("#instructions-screen");
const gameOverScreen = document.querySelector("#game-over-screen");

const startButton = document.querySelector("#start-button");
const instructionsButton = document.querySelector("#instructions-button");
const backButton = document.querySelector("#back-button");
const restartButton = document.querySelector("#restart-button");
const goHomeScreenButton = document.querySelector("#go-home-screen-button");

const containerGame = document.querySelector(".container-game");
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");

const game = new Game(ctx);

document.addEventListener("keydown", (event) => game.onKeyEvent(event));
document.addEventListener("keyup", (event) => game.onKeyEvent(event));

function stopGame() {
    game.gameOver();
}

function startGame() {
    homeScreen.style.display = "none";
    containerGame.style.display = "in-line";
    game.start();
}

function restartGame() {
    gameOverScreen.style.display = "none";
    startGame()
}

function goToHomeScreen() {
    gameOverScreen.style.display = "none";
    homeScreen.style.display = "block";
}

function showInstructions() {
    homeScreen.style.display = "none";
    instructionsScreen.style.display = "block";
}

function goBackToHomeScreen() {
    instructionsScreen.style.display = "none";
    homeScreen.style.display = "block";
}

function showGameOverScreen() {
    containerGame.style.display = "none";
    gameOverScreen.style.display = "block";
}

startButton.addEventListener("click", startGame);
instructionsButton.addEventListener("click", showInstructions);
backButton.addEventListener("click", goBackToHomeScreen);
restartButton.addEventListener("click", );
goHomeScreenButton.addEventListener("click", goToHomeScreen);

