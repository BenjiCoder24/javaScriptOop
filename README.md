# OOP Moving Objects Tutorial

This project demonstrates Object-Oriented Programming (OOP) concepts in JavaScript by creating multiple moving objects on the screen. Each object is initialized via a different class constructor call.

## Project Structure

- `index.html`: The main HTML file that sets up the canvas and includes the script.
- `script.js`: The JavaScript file containing the OOP classes and animation logic.
- `style.css`: The CSS file for styling the page and canvas.
- `README.md`: This file, providing an overview and detailed explanation of the project.

## Running the Project

1. Open the `index.html` file in your browser.
2. The canvas will display moving objects, each with a different color, demonstrating the use of OOP in JavaScript.

## Explanation of the Code

### index.html

This is the main HTML file that sets up the canvas and includes the script.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OOP Moving Objects Tutorial</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <canvas id="myCanvas"></canvas>
    <script src="script.js"></script>
  </body>
</html>
```

- The <head> section contains the meta tags and the link to the CSS file.
- The <body> section contains the <canvas> element where the objects will be drawn and the <script> tag that includes the JavaScript code.

## script.js
This JavaScript file contains the OOP classes and the animation logic.

Base Class: MovingObject

```javascript
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
```

##Constructor: The constructor method initializes the object with position (x, y), speed, and color.
- Update Method: The update method changes the position of the object based on its speed. If the object moves outside the canvas, it resets the position to the starting point.
- Draw Method: The draw method draws the object on the canvas as a colored circle.
- Derived Classes: TypeOne, TypeTwo, TypeThree
  
```javascript
class TypeOne extends MovingObject {
    constructor(x, y, speed) {
        super(x, y, speed);
        this.color = 'blue';
    }
}

class TypeTwo extends MovingObject {
    constructor(x, y, speed) {
        super(x, y, speed);
        this.color = 'green';
    }
}

class TypeThree extends MovingObject {
    constructor(x, y, speed) {
        super(x, y, speed);
        this.color = 'yellow';
    }
}
```

- Each derived class extends MovingObject and sets a different color for the objects. They use the super function to call the constructor of the base class.

## Creating an Array of Objects

```javascript
const objects = [
    new TypeOne(50, 50, 2),
    new TypeTwo(100, 100, 3),
    new TypeThree(150, 150, 4)
];
```

- An array of objects is created, each initialized using a different constructor. This array will be used to manage and animate multiple objects on the canvas.
## Animation Loop

```javascript
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    objects.forEach(obj => {
        obj.update();
        obj.draw();
    });
    requestAnimationFrame(animate);
}

animate();
```

- Canvas Setup: The canvas is selected using document.getElementById and its context is set to 2d. The canvas dimensions are set to the size of the browser window.
- Animation Loop: The animate function clears the canvas, updates the position of each object, and draws each object on the canvas. requestAnimationFrame is used to call the animate function repeatedly, creating an animation.

##style.css
This CSS file styles the page and the canvas.

```javascript
body {
    margin: 0;
    overflow: hidden;
}

canvas {
    background-color: #000;
    display: block;
}
```

- body: Removes the margin and hides the overflow to ensure the canvas takes up the full screen.
- canvas: Sets the background color of the canvas to black and ensures it is displayed as a block element.

## Summary
This tutorial demonstrates how to use Object-Oriented Programming in JavaScript to create and animate multiple objects on a canvas. By defining a base class and extending it with derived classes, we can create objects with different properties and behaviors, and manage them efficiently in an animation loop.
