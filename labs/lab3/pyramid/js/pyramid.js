//variables to keep track of line number, number of squares and square attributes
i = 1;
j = 1;
z = 1;
x = 20;
y = 20;
w = 20;
h = 20;

//create the canvas
function setup() {
    createCanvas(800, 600);
}

function draw() {

//create number of squares based on which line you're on
    //var j keeps track of line number
   while (j<=4){
       //i essentially keeps track of number of squares
       //draw square, move over to draw another square if applicable
        for (i = 1; i <= z; i++) {
            fill(204, 43, 2);
            rect(x,y,w,h);
            x = x + 20;   
        }
        //move down to next line
        y = y + 20;

        //go to next line
        j = j + 1;

        //iterand for matching line number to number of squares
        z = z + 1;

        //reset x location to left justification
        x = 20;
    }

    
}