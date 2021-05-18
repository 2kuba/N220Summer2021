

function setup() {
    createCanvas(800,600);

    background(255,255,255);

    var clownfish = "#e3b220";
    var dory = "#1b84cf";

    fill(115, 76, 18);
    rect(0,350,600,250);

    fill(255,255,255);
    rect(75, 450, 450, 150);

    fill(66, 221, 245);
    stroke(60, 66, 61);
    strokeWeight(10);
    rect(100, 175, 400, 200);

    fill(63, 105, 63);
    noStroke();
    rect(105,305,390,65);
   
    fill(clownfish);
    noStroke();
    ellipse(250,250,90,40);

    fill(clownfish);
    noStroke();
    ellipse(280,300,55,28);

    fill(dory);
    noStroke();
    ellipse(400,250,105,80);
    
}
