class Game {
    constructor(ctx) {
        this.ctx = ctx
        this.background = new Background(ctx);
        this.player = new Player(ctx, this);
        this.lives = [new Life(this.ctx, 900, 20), new Life(this.ctx, 950, 20), new Life(this.ctx, 1000, 20) ];
        this.obstacles = [];
        this.points = [];
    

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
        this.lives.forEach((life) => {
            life.draw();
        })
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
        const height = 60;
        const randomX = Math.floor(Math.random() * (this.ctx.canvas.width - width));
        const randomIndex = Math.floor(Math.random() * ALL_EGGS.length);
        const imageName = ALL_EGGS[randomIndex];   
        const imageSrc = TYPES[imageName];
        const type = imageName;
        const vy = 2;
        const newObstacle = new Obstacle(this.ctx, randomX, -height, width, height, imageSrc, type, vy);
        this.obstacles.push(newObstacle);
    }

    addLives() {
        if (this.lives.length === 3) {
            return 
        }
        const lastXlife =  this.lives[0].x
        
        const newLife = new Life(this.ctx, lastXlife - 50, 20);
        this.lives = [newLife, ...this.lives]
    }

    checkCollisions() {
        this.obstacles.forEach((obstacle, index) => {
            if (this.player.x + this.player.width >= obstacle.x &&
              this.player.x <= obstacle.x + obstacle.width &&
              this.player.y + this.player.height >= obstacle.y &&
              this.player.y <= obstacle.y + obstacle.height) {
                console.log("está colisionando");
                if (LEVEL_1.catch.includes(obstacle.type)) {
                    console.log("este es bueno");
                    this.points.push(obstacle);
                    this.obstacles.splice(index, 1);
                } else if (LEVEL_1.noCatch.includes(obstacle.type)) {
                    console.log("este es malo");
                    this.obstacles.splice(index, 1);
                    this.lives.shift();
                }
                console.log(this.points);
            }
        })
    }


    onKeyEvent(event) {
        this.player.onKeyEvent(event);
    }
    
}