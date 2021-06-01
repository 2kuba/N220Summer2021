
let dvSquare = document.getElementById("colorSquare");

function rgb() {

    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);

    
    //console.log(r);
    //console.log(g);
    //console.log(b);


    var col = "rgb("+r+","+g+","+b+")";

    //console.log(col);

    return col;

    
}

function draw() {
    

    for (var i = 0; i < 100; i++) {

        //dvSquare.style.backgroundColor = rgb();
        //dvSquare.style.width = "20px";
        //dvSquare.style.height = "20px";
        //dvSquare.style.float = "left";

        let newSquare = document.createElement("div");
        newSquare.style.backgroundColor = rgb();
        newSquare.style.width = "20px";
        newSquare.style.height = "20px";
        newSquare.style.float = "left";

        
        dvSquare.appendChild(newSquare);
        //document.body.appendChild(newSquare);
        

        break;
    }
    console.log(i);
}