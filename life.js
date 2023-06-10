class Life {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height= 40;

        this.image = new Image();
        this.image.src = "./images/circulos/orange.png"
        this.image.onload = () => {
            this.isReady = true;
        }
    }

    draw() {
        if (this.isReady = true) {
            this.ctx.drawImage(
                this.image, 
                this.x,
                this.y, 
                this.width,
                this.height
            );
        }
    }
}