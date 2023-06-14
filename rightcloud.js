class RightCloud {
    constructor(ctx, imageSrc) {
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;

        this.vx = 0;

        this.image = new Image();
        this.image.src = imageSrc;

        this.image.onload = () => {
            this.isReady = true;
        }
    }

    draw() {
        if (this.isReady) {
            this.ctx.drawImage(this.image, this.x - this.width, this.y, this.width, this.height);
            this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            this.ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
        }
    }

    move() {
        this.vx = 0.5;

        this.x += this.vx;

        if (this.x + this.width <= 0) {
            this.x = 0;
        }
        if (this.x >= this.width) {
            this.x = 0;
        }
    }
}