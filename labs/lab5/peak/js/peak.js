
//stores values for height and width
var w = 100;
var h = 100;

//relate js to div in html
let dvPixel = document.getElementById("pixel");

//function to increase the size, called onclick
function incSize() {
    w = w * 1.1;
    h = h * 1.1;
    
    return w, h;
}

//create the block based on the current value for height and width
function draw() {
    dvPixel.style.backgroundColor = "#3fd100";
    dvPixel.style.width = w + "px";
    dvPixel.style.height = h + "px";
}