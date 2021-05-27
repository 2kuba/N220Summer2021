//arrays to store x and y coordinates for each circle in the snake
posX = [0,0,0,0,0,0,0,0,0,0,0];
posY = [0,0,0,0,0,0,0,0,0,0,0];

//creates a canvas
function setup() {
    createCanvas(800,600);
}

function draw() {

    background(130);
    //set x coordinate at mouse location, push out oldest value
    posX.push(mouseX);
    posX.shift();

    //set y coordinate at mouse location, push out oldest value
    posY.push(mouseY);
    posY.shift();

    //creates a circle for each x and y value in their respective arrays
    for (var i = 0; i < posX.length; i ++) {
        
        fill(214, 145, 17);
        circle(posX[i], posY[i], 10);
    }
}
