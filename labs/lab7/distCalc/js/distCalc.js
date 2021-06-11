//retrieve x and y values from user input
let x1 = document.getElementById("x1");
let x2 = document.getElementById("x2");
let y1 = document.getElementById("y1");
let y2 = document.getElementById("y2");

//calculate the distance between points from user input
function calcDist() {

    //calculate the difference between the x values
    let xDiff = Number(x2.value - x1.value);

    //calculate the difference between the y values
    let yDiff = Number(y2.value - y1.value);

    //calculate the distance
    d = Math.sqrt(xDiff*xDiff + yDiff*yDiff);

    //print the distance to the console
    console.log(d);
}