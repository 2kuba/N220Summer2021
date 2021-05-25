i = 1;
x = 0;
y = 300;
radius = 10;

function setup() {
    createCanvas(800, 600);
}

function draw() {

    if ( i <= 25) {
        if ( i % 3 == 0) {
            if ( i % 5 == 0) {
                fill(50, 107, 168);
                rect(x, y, 20, 20);
                i = i + 1;
                x = x + 20;
            } else {
            fill(147, 50, 168);
            circle(x, y, radius);
            i = i + 1;
            x = x + 20;
            }
        } else if ( i % 5 == 0) {
            fill(58, 168, 50);
            rect(x, y, 20, 20);
            i = i + 1;
            x = x + 20;
        } else {
            fill(0);
            circle(x, y, radius);
            i = i + 1;
            x = x + 20;
        }
    }
}