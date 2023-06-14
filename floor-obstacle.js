class FloorObstacle {
    constructor(ctx, game, x, y, width, height, vx) {
        this.ctx = ctx;
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.vx = vx;

        this.xFrame = 0;
        this.yFrame = 0
        this.xFramesCount = 5;
        this.yFramesCount = 2;

        this.image = new Image();
        this.image.src = "./images/floor obstacle/peach sprite sheet.png";

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
        this.x += this.vx;

        if (this.x <= 0) {
            this.yFrame = 0;
            if (this.game.counter % 8 === 0) {
                this.xFrame++;
                if (this.xFrame >= this.xFramesCount) {
                    this.xFrame = 0;
                }
            }
        }

        if (this.x > 0) {
            this.yFrame = 1;
            if (this.game.counter % 8 === 0) {
                this.xFrame++;
                if (this.xFrame >= this.xFramesCount) {
                    this.xFrame = 0;
                }
            }
        }
    }
}