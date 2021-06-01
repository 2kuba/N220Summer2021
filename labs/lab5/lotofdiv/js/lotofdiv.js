//relate js to div block in html
let dvSquare = document.getElementById("colorSquare");

//set a random color
function rgb() {

    //set each r, g and b to random value between 0 and 255
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);

    
    //console.log(r);
    //console.log(g);
    //console.log(b);

    //convert to string
    var col = "rgb("+r+","+g+","+b+")";

    //console.log(col);

    //return rgb string
    return col;

    
}

//create the blocks
function draw() {
    

    //loop through and create block with a new, random color each loop
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
    //console.log(i);
}