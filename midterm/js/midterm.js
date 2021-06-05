//array for the circles
var circs = [100,100,20,300,200,20];

//store the initial value for radius
var radius = 20;


function setup() {
    //create the canvas
    createCanvas(800,600);
    //set the framerate for consistency
    frameRate(60);
}

function draw() {
    //set background color
    background(130);

    //for loop for drawing the circles
    for (i = 0; i < circs.length; i = i + 3) {

        //set the color of the circle
        fill(192, 2, 209);

        //on each loop, increase the radius value by 0.1
        circs[i+2] = circs[i+2] + 0.1;
        
        //draw the circle
        circle(circs[i], circs[i+1], circs[i+2]);
        
    }

    //every 30 frames, add a new circle at the mouseX and mouseY locations with an initial radius of 20
    if (frameCount % 30 == 0) {
        circs.push(mouseX);
        circs.push(mouseY);
        circs.push(radius);
    }
}