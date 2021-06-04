//create the canvas
function setup() {
    createCanvas(800,600);
}

//the animated object
function Obj() {

    //list of attributes for the animated object
    this.x = 400;
    this.y = 300;
    this.radius = 20;
    this.color = "#e38e05";
    
    //creates the object on the canvas
    this.makeObj = function() {
        fill(this.color);
        circle(this.x, this.y, this.radius);

        //if radius reaches the point where the obj fills the canvas, reset the radius
        if (this.radius >= 505) {
            this.radius = 20;
        }
    }
}

//create an instance of the animated object
let animObj = new Obj();

//draw the object
function draw() {
    background(130);

    //put the object on the canvas
    animObj.makeObj();

    //increase the radius
    animObj.radius = animObj.radius + 1;

}