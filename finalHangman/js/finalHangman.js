let wordDiv = document.getElementById("word");
let resultDiv = document.getElementById("result");

wordBank = ["grape","base","mouse","intel","star","mold","sip","zone","card","project"];
wordIndex = Math.floor(Math.random() * 10);
wordToGuess = wordBank[wordIndex];


wordLength = Number(wordBank[wordIndex].length);
blank = "_ ";
blanks = blank.repeat(wordLength);
wordDiv.innerHTML = blanks;


bodyPartCount = 0;

console.log(wordToGuess);


function setup() {
    createCanvas(400,400);
    background(180);
}


function draw() {
    fill("#702b09");
    rect(250,300,100,20);
    rect(290,50,20,250);
    rect(140,50,150,20);
    rect(150,70,10,50);

    
}


function guessLetter(event) {

    let letterGuess = event.target.getAttribute("data-letter");

    let wordSplit = wordToGuess.split("");

    if (wordSplit.includes(letterGuess)) {
        let letterIndex = wordSplit.indexOf(letterGuess);
        console.log("LI " + letterIndex);

        console.log("LG " + letterGuess);

        console.log("BA " + blanks);

        blankArray = blanks.split(" ");
        console.log(blankArray);

        //blanks.replace(wordSplit[letterIndex],letter);
       
        
    } else {
        bodyPartCount = bodyPartCount + 1;
        console.log("BPC " + bodyPartCount);
        addBodyPart();
    }

    event.target.setAttribute("disabled",true);
}

function addBodyPart() {
    if (bodyPartCount == 1) {
        fill(0);
        circle(155,140,20);
    } else if (bodyPartCount == 2) {
        fill(0);
        rect(152,160,6,60);
    } else if (bodyPartCount == 3) {
        fill(0);
        rect(152,180,40,6);
    } else if (bodyPartCount == 4) {
        fill(0);
        rect(118,180,40,6);
    } else if (bodyPartCount == 5) {
        fill(0);
        rect(152,220,40,6);
    } else if (bodyPartCount == 6) {
        fill(0);
        rect(118,220,40,6);
        resultDiv.innerHTML = "Game over";
    }
} 

function reloadPage() {
    window.location.reload();
}
