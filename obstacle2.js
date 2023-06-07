class Obstacle {
    constructor(ctx, x, y, width, height, imageSrc, vy) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.image = new Image();
        this.image.src = imageSrc;

        this.image.onload = () => {
            this.isReady = true;
        }

        this.vy = vy;
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
        this.y += this.vy;
    }

    

}