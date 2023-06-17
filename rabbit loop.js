class RabbitLoop {
    constructor (ctx) {
        this.ctx = ctx;
        this.x = 880;
        this.y = 460;
        this.width = 110;
        this.counter = 0;

        this.xFrame = 0;
        this.yFrame = 0;
        this.xFramesCount = 2;
        this.yFramesCount = 4;

        this.image = new Image();
        this.image.src = "./images/conejo 2.png";
        this.image.onload = () => {
            const frameWidth = this.image.width / this.xFramesCount;
            const frameHeight = this.image.height / this.yFramesCount;
            const aspectRatio = frameWidth / frameHeight;
            this.height = this.width / aspectRatio;
            this.isReady = true;
        }
    }
    
    draw() {
        if (this.isReady) {
            this.ctx.drawImage(
                this.image,
                this.xFrame * this.image.width / this.xFramesCount,
                this.yFrame * this.image.height / this.yFramesCount,
                this.image.width / this.xFramesCount,
                this.image.height / this.yFramesCount,
                this.x,
                this.y,
                this.width,
                this.height
            )
        }
    }

    move() {
        this.yFrame = 1;
            if (this.counter % 12 === 0) {
                this.xFrame++;
                if (this.xFrame >= this.xFramesCount) {
                    this.xFrame = 0;
                }
            }
    }
}