class Game {
    constructor(ctx) {
        this.ctx = ctx
        this.background = new Background(ctx);
        this.player = new Player(ctx, this);
        this.obstacles = [];

        this.intervalId = null;
        this.counter = 0;
    }

    start() {
        this.intervalId = setInterval(() => {
            this.clear();
            this.move();
            this.draw();
            this.checkCollisions();
            this.counter++;
            
            if (this.counter % 90 === 0) {
                this.addObstacle();
            };

        }, 1000 / 60);
    }

    draw() {   
        this.ctx.imageSmoothingEnabled = false;
        this.background.draw();
        this.player.draw();
        this.obstacles.forEach((obstacle) => {
            obstacle.draw();
        })
    }

    move() {
        this.player.move();
        this.obstacles.forEach((obstacle) => {
            obstacle.move();
        })
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.obstacles = this.obstacles.filter((obstacle) => obstacle.y < this.ctx.canvas.height);
    }

    addObstacle() {
        const width = 50;
        const height = 50;
        const randomX = Math.floor(Math.random() * (this.ctx.canvas.width - width));   
        const imageSrc = getRandomImageSrc();
        const vy = 2;
        const newObstacle = new Obstacle(this.ctx, randomX, -height, width, height, imageSrc, vy);
        this.obstacles.push(newObstacle);
    }

    checkCollisions() {
        this.obstacles.forEach((obstacle) => {
            if (this.player.x + this.player.width >= obstacle.x &&
              this.player.x <= obstacle.x + obstacle.width &&
              this.player.y + this.player.height >= obstacle.y &&
              this.player.y <= obstacle.y + obstacle.height) {

                if (LEVEL_1.catch.includes(obstacle.imageSrc)) {
                    console.log("este es bueno");
                } else if (LEVEL_1.noCatch.includes(obstacle.imageSrc)) {
                    console.log("este es malo");
                }
            }
        })
    }

    onKeyEvent(event) {
        this.player.onKeyEvent(event);
    }
    
}