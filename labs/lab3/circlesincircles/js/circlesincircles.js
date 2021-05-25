
i = 1;
x = 300;
y = 300;
radius = 300;

function setup() {
    createCanvas(800,800);
}

function draw() {
    if ( i <= 30) {
        circle(x, y, radius);
        radius = radius - 10;
        i = i + 1;
    }
}