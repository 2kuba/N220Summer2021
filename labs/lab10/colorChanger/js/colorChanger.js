let square1 = document.getElementById("square1");
square1.style.backgroundColor = "#737373";
square1.style.width = "200px";
square1.style.height = "200px";
square1.style.float = "left";
square1.style.margin = "5px";

let square2 = document.getElementById("square2");
square2.style.backgroundColor = "#737373";
square2.style.width = "200px";
square2.style.height = "200px";
square2.style.float = "left";
square2.style.margin = "5px";

let square3 = document.getElementById("square3");
square3.style.backgroundColor = "#737373";
square3.style.width = "200px";
square3.style.height = "200px";
square3.style.float = "left";
square3.style.margin = "5px";

element.addEventListener("click", changeColor);

function changeColor(event) {
    let color = event.target.getAttribute("data-color");

    event.target.style.backgroundColor = color;
}