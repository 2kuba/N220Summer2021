//track location and velocity of circle
x = 0;
y = 300;
radius = 20;
xVel = 5;
yVel = 0;

//create the canvas
function setup() {
    createCanvas(800,600);

}


function draw() {
    background(130);

    fill(250, 83, 17);
    circle(x,y,radius);

    //change the location of the circle
    x = x + xVel;

    if (x >= 800) {
        x = 0
    }

}