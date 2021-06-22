//store values for red, green and blue
let red = 0;
let green = 0;
let blue = 0;


//grab square div from page and give size values
let square = document.getElementById("square");
square.style.width = "400px";
square.style.height = "200px";


//create the div to display the current rgb color value 
let colorDiv = document.getElementById("current-color");


//add red to the rgb value relative to button value (ie +1, +5, +10)
function addRed(event) {
    let redInc = event.target.getAttribute("data-inc");
    red = red + Number(redInc);

    //updates div to show current color with new value after button press
    colorDiv.innerHTML = "rgb("+red+","+green+","+blue+")";
}

//add green to the rgb value relative to button value (ie +1, +5, +10)
function addGreen(event) {
    let greenInc = event.target.getAttribute("data-inc");
    green = green + Number(greenInc);

    //updates div to show current color with new value after button press
    colorDiv.innerHTML = "rgb("+red+","+green+","+blue+")";
}

//add blue to the rgb value relative to button value (ie +1, +5, +10)
function addBlue(event) {
    let blueInc = event.target.getAttribute("data-inc");
    blue = blue + Number(blueInc);

    //updates div to show current color with new value after button press
    colorDiv.innerHTML = "rgb("+red+","+green+","+blue+")";
}

//draw function to change color of square div each frame based on current values of red, green and blue
function draw() {

    square.style.backgroundColor = "rgb("+ red + "," + green + "," + blue + ")";
    
}




