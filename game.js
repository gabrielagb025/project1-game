class Game {
    constructor(ctx) {
        this.ctx = ctx
        this.background = new Background(ctx);
        this.player = new Player(ctx, this);

        this.intervalId = null;
        this.counter = 0;
    }

    start() {
        this.intervalId = setInterval(() => {
            this.clear();
            this.move();
            this.draw();
            this.counter++;
        }, 1000 / 60);
    }

    draw() {   
        this.background.draw();
        this.player.draw();
    }

    move() {
        this.player.move();
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    onKeyEvent(event) {
        this.player.onKeyEvent(event);
    }

}