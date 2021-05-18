function setup() {
    createCanvas(400,400);

    radius = 4;

}

function draw() {

    background(130);

    //store location of mouse pointer to track circle movement
    x = mouseX;
    y = mouseY;

    //create the circle
    fill(17, 250, 102);
    circle(x,y,radius);

    //whenever mouse is pressed, check radius size and adjust accordingly
    if (mouseIsPressed) {
        if (radius < 50) {
            radius = radius + 2;
        }
        else if (radius >= 50) {
            radius = 5;
        }
    }
}