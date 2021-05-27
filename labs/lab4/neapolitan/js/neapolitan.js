//array for colors
colors = ["#fa70b5", "#f5f5b5", "#66461f"];

//stores y value so we can change vertical starting position of rectangle within loop
y = 0;

//creates the canvas
function setup() {
    createCanvas(800,600);
}


function draw() {

    //creates a rectangle for each color in the array and shifts the starting position downward on each loop
    for ( var i = 0; i < colors.length; i++) {
        fill(colors[i]);
        rect(0, y, 800, 200);
        y = y + 200;
    }
}