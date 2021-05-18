

function setup() {

    //create the canvas
    createCanvas(800,600);

    background(255,255,255);

    //set colors of the little fishies
    var clownfish = "#e3b220";
    var dory = "#1b84cf";

    //draw the base of the table
    fill(115, 76, 18);
    rect(0,350,600,250);

    //cut out the bottom portion of the table rectangle to create 'legs'
    fill(255,255,255);
    rect(75, 450, 450, 150);

    //draw the tv
    fill(66, 221, 245);
    stroke(60, 66, 61);
    strokeWeight(10);
    rect(100, 175, 400, 200);

    //draw the sea floor background on the tv
    fill(63, 105, 63);
    noStroke();
    rect(105,305,390,65);
   
    //draw Marlin
    fill(clownfish);
    noStroke();
    ellipse(250,250,90,40);

    //draw Nemo
    fill(clownfish);
    noStroke();
    ellipse(280,300,55,28);

    //draw Dory
    fill(dory);
    noStroke();
    ellipse(400,250,105,80);
    
}
