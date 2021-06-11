let x1 = document.getElementById("x1");
let x2 = document.getElementById("x2");
let y1 = document.getElementById("y1");
let y2 = document.getElementById("y2");

function calcDist() {
    let xDiff = Number(x2.value - x1.value);
    let yDiff = Number(y2.value - y1.value);

    d = Math.sqrt(xDiff*xDiff + yDiff*yDiff);

    console.log(d);
}