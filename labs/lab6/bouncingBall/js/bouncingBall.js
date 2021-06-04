//create the canvas
function setup() {
    createCanvas(800,600);
}

//the ball object
function Ball() {

    //list of attributes for the ball
    this.x = 0;
    this.y = 0;
    this.xVel = 5;
    this.yVel = 5;
    this.radius = 20;
    this.color = "#4251f5";

    //update the location of the ball
    this.move = function() {
        fill(this.color);
        circle(this.x, this.y, this.radius);

        //track location of ball
        this.x = this.x + this.xVel;
        this.y = this.y + this.yVel;

        //if ball hits either side, flip direction of travel
        if (this.x >= 800) {
            this.xVel = this.xVel * -1;
        } else if (this.x <= 0) {
            this.xVel = this.xVel * -1;
        }

        //if ball hits top or bottom, flip direction of travel
        if (this.y >= 600) {
            this.yVel = this.yVel * -1;
        } else if (this.y <= 0) {
            this.yVel = this.yVel * -1;
        } 
    }
}

//create an instance of the ball object
let bouncingBall = new Ball();

//draw the ball
function draw() {
    background(130);
    
    //actively change position of ball
    bouncingBall.move();
}

