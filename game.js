class Game {
    constructor(ctx) {
        this.ctx = ctx
        this.background = new Background(ctx);
        this.player = new Player(ctx, this);
        this.lives = [new Life(this.ctx, 900, 20), new Life(this.ctx, 950, 20), new Life(this.ctx, 1000, 20) ];
        this.floorObstacles = [];
        this.obstacles = [];
    
        this.scores = {
            yellow: 3,
            blue: 4,
            green: 2
        }

        this.intervalId = null;
        this.counter = 0;
    }

    start() {

        points(this.scores);

        this.intervalId = setInterval(() => {
            this.clear();
            this.move();
            this.draw();
            this.checkCollisions();
            this.counter++;

            if (this.counter % 90 === 0) {
                this.addObstacle();
            };


            if (this.counter % 120 === 0) {
                this.addFloorObstacle();
            }

        }, 1000 / 60);
    }

    draw() {   
        this.ctx.imageSmoothingEnabled = false;

        this.background.draw();
        this.player.draw();
        this.lives.forEach((life) => {
            life.draw();
        });
        this.obstacles.forEach((obstacle) => {
            obstacle.draw();
        });
        this.floorObstacles.forEach((floorObstacle) => {
            floorObstacle.draw();
        });
    }

    move() {
        this.player.move();
        this.obstacles.forEach((obstacle) => {
            obstacle.move();
        });
        this.floorObstacles.forEach((floorObstacle) => {
            floorObstacle.move();
        });
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
        const vy = 3;
        const newObstacle = new Obstacle(this.ctx, randomX, -height, width, height, imageSrc, type, vy);
        this.obstacles.push(newObstacle);
    }

    addFloorObstacle() {
        const width = 35;
        const x = 0;
        const y = 490; 
        const height = 35;
        const vx = 5;

        const newFloorObstacle = new FloorObstacle(this.ctx, x, y, width, height, vx);
        this.floorObstacles.push(newFloorObstacle);
    }

    addLives() {
        if (this.lives.length === 3) {
            return 
        }
        const lastXlife =  this.lives[0].x;
        
        const newLife = new Life(this.ctx, lastXlife - 50, 20);
        this.lives = [newLife, ...this.lives];

    }

    checkCollisions() {
        const scoresColors = Object.keys(this.scores);
        this.obstacles.forEach((obstacle, index) => {
            if (this.player.x + this.player.width >= obstacle.x &&
              this.player.x <= obstacle.x + obstacle.width &&
              this.player.y + this.player.height >= obstacle.y &&
              this.player.y <= obstacle.y + obstacle.height) {
             
                if (scoresColors.includes(obstacle.type)) {
                    console.log("este es bueno");
                    this.obstacles.splice(index, 1);
                    if (this.scores[obstacle.type] >= 1) {
                        this.scores[obstacle.type]--
                    } else {
                        this.lives.shift();
                    }
                    points(this.scores);
                } else {
                    console.log("este es malo");
                    this.obstacles.splice(index, 1);
                    this.lives.shift();
                    
                        if (this.lives.length === 0) {
                            this.gameOver();
                        }
                }
            }
        });

        this.floorObstacles.forEach((floorObstacle, index) => {
            if (this.player.x + this.player.width >= floorObstacle.x &&
                this.player.x <= floorObstacle.x + floorObstacle.width &&
                this.player.y + this.player.height >= floorObstacle.y &&
                this.player.y <= floorObstacle.y + floorObstacle.height) {
                    this.floorObstacles.splice(index, 1)
                    this.lives.shift();
                }
        })
    }


    onKeyEvent(event) {
        this.player.onKeyEvent(event);
    }

    gameOver() {
        console.log("game over");
    }
    
}