class FloorObstacle {
    constructor(ctx, x, y, width, height, vx) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

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
                this.width,
                this.height
            )
        }
    }
    
    move() {
        this.x += this.vx;
    }
}