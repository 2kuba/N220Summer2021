//keep track of number of circles and their respective radii
i = 1;
x = 300;
y = 300;
radius = 300;

//create the canvas
function setup() {
    createCanvas(800,800);
}

function draw() {
    //starting with largest circle, draw the circle and then reduce radii
    if ( i <= 30) {
        circle(x, y, radius);
        radius = radius - 10;
        i = i + 1;
    }
}