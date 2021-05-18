function setup() {
    createCanvas(400,400);

    
    radius = 20;

}

function draw() {
    background(130);

    fill(209, 152, 48);
    circle(width - mouseX, height - mouseY,radius);
}