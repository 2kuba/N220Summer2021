//array to store y location for circles
let drip = [];

//initial y value
y = 0;

//creates a canvas and sets framerate
function setup() {
    createCanvas(800,600);
    frameRate(60);
}


function draw() {

    background(255);

    //add y value to drip array
    drip.push(y);

    //creates the circles 
    for (var i = 0; i < drip.length; i++) {

        if (frameCount % 10 == 0) {
    
            y = drip[i] + 5;
             
        }
        
        fill(31, 192, 204);
        circle(400, drip[i], 10);
        
    }
    
}