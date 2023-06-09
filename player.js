class Player {
    constructor(ctx, game) {
        this.ctx = ctx;
        this.game = game;
        this.x = 300;
        this.y = 480;
        this.width = 110;

        this.xFrame = 0;
        this.yFrame = 0;
        this.xFramesCount = 2;
        this.yFramesCount = 4;

        this.image = new Image();
        this.image.src = "./images/conejo sheet.png";
        this.image.onload = () => {
            const frameWidth = this.image.width / this.xFramesCount;
            const frameHeight = this.image.height / this.yFramesCount;
            const aspectRatio = frameWidth / frameHeight;
            this.height = this.width / aspectRatio;
            this.isReady = true;
        }

        this.lastDirection = null;

        this.movements = {
            jump: false,
            left: false,
            right: false,
        }

        this.actions = {
            isJumping: false,
        }

        this.speedX = 0;
        this.vy = 0;
        this.gravity = 0.5;
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

        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.stroke();
    }

    move() {
        const isStop = Object.values(this.movements).every(value => value === false);  // Creo una constante para cuando el player está parado (es decir, que todas las keys del objeto this.movements sean false).

        // Para las animaciones

        if (this.movements.left) {
            this.yFrame = 3;
            this.speedX = -4;
            if (this.game.counter % 10 === 0 && !this.actions.isJumping) {
                this.xFrame++;
                if (this.xFrame >= this.xFramesCount) {
                    this.xFrame = 0;
                }
            }
        } else if (this.movements.right) {
            this.yFrame = 1;
            this.speedX = 4;
            if (this.game.counter % 10 === 0 && !this.actions.isJumping) {
                this.xFrame++;
                if (this.xFrame >= this.xFramesCount) {
                    this.xFrame = 0;
                }
            }
        } else if (isStop) {                                    // Hago otra condición para cuando el player está parado.
            this.speedX = 0;                                    // Le digo que la velocidadX sea 0 para que se quede parado.
            if (this.lastDirection === "left") {                // Si la última dirección es izquierda:
                this.yFrame = 2;
                if (this.game.counter % 18 === 0 && !this.actions.isJumping) {
                    this.xFrame++;
                    if (this.xFrame >= this.xFramesCount) {
                        this.xFrame = 0;
                    }
                }
            } else if (this.lastDirection === "right") {        // Si la última dirección es derecha: 
                this.yFrame = 0;
                if (this.game.counter % 18 === 0 && !this.actions.isJumping) {
                    this.xFrame++;
                    if (this.xFrame >= this.xFramesCount) {
                        this.xFrame = 0;
                    }
                }
            }
        }



        // Para el salto
        
        this.vy += this.gravity;
        this.y += this.vy;

        if (this.actions.isJumping) {
            if (this.lastDirection === "left") {
                this.yFrame = 3;
                this.xFrame = 1;
            } else if (this.lastDirection === "right") {
                this.yFrame = 1;
                this.xFrame = 0;
            }     
        }

        if (this.y >= this.ctx.canvas.height - this.height - 120) {
            this.y = this.ctx.canvas.height - this.height - 120;
            this.vy = 0;
            this.actions.isJumping = false;
        }
    
        // Para que se mueva en el eje X

        this.x += this.speedX;

        if (this.x >= this.ctx.canvas.width - this.width) {
            this.x = this.ctx.canvas.width - this.width
        }
        
        if (this.x <= 0) {
            this.x = 0;
        }

    }

    onKeyEvent(event) {

        const eventDown = event.type === "keydown";

        if (!event.repeat) {
            switch (event.keyCode) {
                case KEY_UP:
                    if (!this.actions.isJumping && eventDown) {
                        this.actions.isJumping = true;
                        this.vy = -10;
                    }
                    break;
                case KEY_LEFT:
                    this.movements.left = eventDown;
                    this.lastDirection = "left";        // Indico que la última dirección a la que he ido es left.
                    break;
                case KEY_RIGHT: 
                    this.movements.right = eventDown;
                    this.lastDirection = "right";       // Indico que la última dirección a la que he ido es right.
                    break;    
            }
        } 
    }
}