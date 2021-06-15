
//variables for circle location, velocity and rect location
circleX = 100;
circleY = 100;
xVel = 5;
yVel = 5;
rectX = 0;
rectY = 400;
rectW = 800;
rectH = 200;

//create the canvas
function setup() {
    createCanvas(800,600);
    
}

//move the circle about the canvas
function move() {

    //change location of circle
    circleX = circleX + xVel;
    circleY = circleY + yVel;

    //change circle movement direction based on collision with rectangle or sides/top
    if (collideRect(circleX,circleY,rectX,rectY,rectW,rectH) == true) {
        yVel = yVel * -1;
    } else if (circleX > 800) {
        xVel = xVel * -1;
    } else if (circleX < 0) {
        xVel = xVel * -1;
    } else if (circleY < 00) {
        yVel = yVel * -1;
    }

    
}

//check for circle collision with rectangle
function collideRect(circleX,circleY,rectX,rectY,rectW,rectH) {
    
    var colliding = false;

    if(circleX > rectX && circleX < rectX + rectW) {
        if(circleY > rectY && circleY < rectY + rectH) {
            return true;
        }
    }

    return false;
}

//draw the circle and rectangle
function draw() {

    background(120);

    //move the circle about the canvas
    move();

    //draw the rectangle
    fill("#edac51");
    rect(rectX,rectY,rectW,rectH);

    //draw the circle
    fill("#51edc9");
    circle(circleX,circleY,20);
}