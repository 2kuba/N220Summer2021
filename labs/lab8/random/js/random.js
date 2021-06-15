//reference div element for circle
let circleDiv = document.getElementById("circle");

//array for color options
colorOptions = ["#fcba03","#35b53b","#35a2b5","#ed51a4"]

//create the canvas and call the random color function
function setup() {
    createCanvas(800,600);
    
    getColorNum();
}

//get a color from the array
function getColorNum() {
    
    //variable to set array index to select color from array
    colorNum = Math.floor(Math.random() * 4);
    
    return colorNum;
    
}

//take array index from getColorNum() to set color for circle
function changeColor() {

    circleDiv.style.backgroundColor = colorOptions[colorNum];
    circleDiv.style.borderRadius = "50%";
    circleDiv.style.width = "100px";
    circleDiv.style.height = "100px";

}

//draw the circle on the canvas
function draw() {

    changeColor();

}
