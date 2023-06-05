class Background {
    constructor(ctx, imageSrc) {
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;
        this.image = new Image();
        this.image.src = "./images/futuristic-city-green-valley-among-mountains_155327-15.jpg";

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

}