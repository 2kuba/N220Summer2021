
var w = 100;
var h = 100;

let dvPixel = document.getElementById("pixel");

function incSize() {
    w = w * 1.1;
    h = h * 1.1;
    
    return w, h;
}

function draw() {
    dvPixel.style.backgroundColor = "#3fd100";
    dvPixel.style.width = w + "px";
    dvPixel.style.height = h + "px";
}