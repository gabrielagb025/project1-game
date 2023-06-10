class Life {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height= 50;

        this.image = new Image();
        this.image.src = "./images/zanahoria.PNG"
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