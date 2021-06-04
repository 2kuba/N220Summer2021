//create the canvas
function setup() {
    createCanvas(400,400);
}

//the pet object
function Pet() {

    //list of attributes for the pet
    this.name = "Tomi";
    this.energy = 0;
    this.happiness = 0;
    this.age = 0;

    //on click of feed button, add energy
    this.feed = function() {
        this.energy = this.energy + 5;
        this.update();
    }

    //on click of play button, add happiness
    this.play = function() {
        this.happiness = this.happiness + 5;
        this.update();
    }


    //show the change in attributes on the page
    this.update = function() {
        
        var nameLine = document.createElement("H3");
        var petName = document.createTextNode("Your pets name is " + this.name);
        nameLine.appendChild(petName);
        document.body.appendChild(nameLine);

        var energyLine = document.createElement("H3");
        var petEnergy = document.createTextNode("Your pets energy level is " + this.energy);
        energyLine.appendChild(petEnergy);
        document.body.appendChild(energyLine);

        var happinessLine = document.createElement("H3");
        var petHappiness = document.createTextNode("Your pets happiness level is " + this.happiness);
        happinessLine.appendChild(petHappiness);
        document.body.appendChild(happinessLine);
    }
}

let virtualPet = new Pet();

function draw() {

    background(255);

    fill(107, 29, 25);
    circle(200,200,50);

    fill(230, 230, 140);
    circle(180, 190, 5);

    fill(230, 230, 140);
    circle(220, 190, 5);

    fill(230, 230, 140);
    rect(190, 210, 20, 10);
}
