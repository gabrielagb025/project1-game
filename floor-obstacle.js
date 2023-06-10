class FloorObstacle {
    constructor(ctx, x, y, vx) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;

        this.vx = vx;

        this.image = new Image();
        this.image.src = "./images/circulos/blue.png";

        this.image.onload = () => {
            this.isReady = true;
        }
    }

    draw() {

        if (this.isReady) {
            this.ctx.drawImage(
                this.image,
                this.x,
                this.y,
                30,
                30
            )
            console.log("se pinta")
        }
    }
    
    move() {
        this.x += this.vx;
    }
}