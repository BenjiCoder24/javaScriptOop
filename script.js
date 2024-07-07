// Base class for a moving object
class MovingObject {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.color = 'red';
    }

    update() {
        this.x += this.speed;
        this.y += this.speed;

        if (this.x > canvas.width || this.y > canvas.height) {
            this.x = 0;
            this.y = 0;
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 20, 0, Math.PI * 2);
        ctx.fill();
    }
}

// First type of moving object
class TypeOne extends MovingObject {
    constructor(x, y, speed) {
        super(x, y, speed);
        this.color = 'blue';
    }
}

// Second type of moving object
class TypeTwo extends MovingObject {
    constructor(x, y, speed) {
        super(x, y, speed);
        this.color = 'green';
    }
}

// Third type of moving object
class TypeThree extends MovingObject {
    constructor(x, y, speed) {
        super(x, y, speed);
        this.color = 'yellow';
    }
}

// Create an array of moving objects
const objects = [
    new TypeOne(50, 50, 2),
    new TypeTwo(100, 100, 3),
    new TypeThree(150, 150, 4)
];

// Set up the canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    objects.forEach(obj => {
        obj.update();
        obj.draw();
    });
    requestAnimationFrame(animate);
}

animate();
