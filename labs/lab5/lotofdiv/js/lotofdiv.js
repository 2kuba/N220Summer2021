
let dvSquare = document.getElementById("colorSquare");

function draw() {

    for (var i = 0; i < 100; i++) {

        var r = rand(255);
        var g = rand(255);
        var b = rand(255);

        var col = "rgb("+r+","+g+","+b+")";

        console.log(col);
        
        dvSquare.style.backgroundColor = col;
        dvSquare.style.width = "20px";
        dvSquare.style.height = "20px";
        dvSquare.style.float = "left";
    }
}