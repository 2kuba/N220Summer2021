//variables to track location and velocity of circle
x = 0;
y = 0;
radius= 20;
xVel = 5;
yVel = 5;

//create the canvas
function setup() {
    createCanvas(800,600);
}

function draw() {
    background(130);

    //draw the circle
    fill(62, 20, 135);
    circle(x,y,radius);

    //move the circle about the canvas
    x = x + xVel;
    y = y + yVel;

    //if circle hits any boundary of canvas, change direction
    if (x >= 800) {
        xVel = xVel * -1;
    } else if (x <= 0) {
        xVel = xVel * -1;
    }

    if (y >= 600) {
        yVel = yVel * -1;
    } else if (y <= 0) {
        yVel = yVel * -1;
    }
}