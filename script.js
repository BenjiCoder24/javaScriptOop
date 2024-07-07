// Base class for a moving object
class MovingObject {
    // Constructor to initialize the object's properties
    constructor(x, y, speed) {
        this.x = x; // x-coordinate of the object
        this.y = y; // y-coordinate of the object
        this.speed = speed; // Speed at which the object moves
        this.color = 'red'; // Default color of the object
    }

    // Method to update the object's position
    update() {
        this.x += this.speed; // Move the object along the x-axis
        this.y += this.speed; // Move the object along the y-axis

        // Reset position if the object goes off the canvas
        if (this.x > canvas.width || this.y > canvas.height) {
            this.x = 0;
            this.y = 0;
        }
    }

    // Method to draw the object on the canvas
    draw() {
        ctx.fillStyle = this.color; // Set the fill color to the object's color
        ctx.beginPath(); // Begin a new path for drawing
        ctx.arc(this.x, this.y, 20, 0, Math.PI * 2); // Draw a circle
        ctx.fill(); // Fill the circle with the fill color
    }
}

// First type of moving object, inherits from MovingObject
class TypeOne extends MovingObject {
    constructor(x, y, speed) {
        super(x, y, speed); // Call the constructor of the base class
        this.color = 'blue'; // Set the color to blue
    }
}

// Second type of moving object, inherits from MovingObject
class TypeTwo extends MovingObject {
    constructor(x, y, speed) {
        super(x, y, speed); // Call the constructor of the base class
        this.color = 'green'; // Set the color to green
    }
}

// Third type of moving object, inherits from MovingObject
class TypeThree extends MovingObject {
    constructor(x, y, speed) {
        super(x, y, speed); // Call the constructor of the base class
        this.color = 'yellow'; // Set the color to yellow
    }
}

// Create an array of moving objects
const objects = [
    new TypeOne(50, 50, 2), // Create an instance of TypeOne
    new TypeTwo(100, 100, 3), // Create an instance of TypeTwo
    new TypeThree(150, 150, 4) // Create an instance of TypeThree
];

// Set up the canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth; // Set canvas width to window width
canvas.height = window.innerHeight; // Set canvas height to window height

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    objects.forEach(obj => {
        obj.update(); // Update the position of each object
        obj.draw(); // Draw each object on the canvas
    });
    requestAnimationFrame(animate); // Request the next frame
}

// Start the animation
animate();
