//vars to keep track of number of shapes and their location
i = 1;
x = 20;
y = 300;
radius = 10;

//create the canvas
function setup() {
    createCanvas(800, 600);
}

function draw() {

    //track number of shapes
    if ( i <= 25) {
        //if shape number iterand is divisible by 3, check if also divisible by 5
        if ( i % 3 == 0) {
            //if also divisible by 5, draw blue square
            if ( i % 5 == 0) {
                fill(50, 107, 168);
                rect(x, y, 20, 20);
                i = i + 1;
                x = x + 20;
            } else /*if iterand is only divisible by 3, draw purple circle*/ {
            fill(147, 50, 168);
            circle(x, y, radius);
            i = i + 1;
            x = x + 20;
            }
        } else if ( i % 5 == 0) /*if iterand is divisible by 5, draw green square */ {
            fill(58, 168, 50);
            rect(x, y, 20, 20);
            i = i + 1;
            x = x + 20;
        } else /*if iterand is not divisible by either 3 or 5, draw a black circle */{
            fill(0);
            circle(x, y, radius);
            i = i + 1;
            x = x + 20;
        }
    }
}