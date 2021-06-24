//divs for showing the word in progress and the result upon completion or failure
let wordDiv = document.getElementById("word");
let resultDiv = document.getElementById("result");

//array for words
wordBank = ["grape","base","mouse","intel","star","mold","sip","zone","card","project"];

//randomly select an index value
wordIndex = Math.floor(Math.random() * 10);

//grab the word at the generated index value from the word array
wordToGuess = wordBank[wordIndex];

//get the length of the word to guess
wordLength = Number(wordBank[wordIndex].length);

//an underscore string
blank = "_ ";

//repeat the underscore string times the length of the word to guess
blanks = blank.repeat(wordLength);

//set the word div to the current guess progress (blanks on start, letters added as they are guessed)
wordDiv.innerHTML = blanks;

//split the blanks variable into an array so the letters guessed can be inserted in the correct position
blankArray = blanks.split(" ");

//keep track of number of wrong guesses
bodyPartCount = 0;

//shows the word needed to guess, won't be included in final version
//console.log(wordToGuess);



//create the canvas for the gallow
function setup() {

    createCanvas(400,400);
    background(180);
}

//draw the gallow
function draw() {

    fill("#702b09");
    rect(250,300,100,20);
    rect(290,50,20,250);
    rect(140,50,150,20);
    rect(150,70,10,50);

    
}

//check the randomly selected word to see if it contains the letter guess
function guessLetter(event) {

    //retrieve the letter value from the button selected
    let letterGuess = event.target.getAttribute("data-letter");

    //split the randomly selected word into an array of letters
    let wordSplit = wordToGuess.split("");

    //check to see if the letter selected is contained in the array of letters from the randomly selected word
    if (wordSplit.includes(letterGuess)) {

        //get the index value of the letter guessed within the randomly selected word array of letters
        let letterIndex = wordSplit.indexOf(letterGuess);

        //get the value of the letter guess
        let letter = letterGuess.valueOf();
        
        //replace the underscore with the letter in the position that the letter occurs in the randomly selected word
        blankArray.splice(letterIndex,1,letter);

        //change the underscore/letter guess combo array to a string
        arrayToWord = blankArray.toString();

        //remove the commas from the newly created string
        blanks = arrayToWord.replace(/,/g," ");

        //put the new string in the word div
        wordDiv.innerHTML = blanks;
        
  
    } //if the letter guessed is not in the randomly selected word, add a body part to the gallows
    else {
        //increase the number of body parts
        bodyPartCount = bodyPartCount + 1;
        
        //call the function to display the current number of body parts
        addBodyPart();
    }

    //get values of blanks (word guess in progress) and randomly selected word
    blanksString = blanks.replace(/ /g,"");
    blanksValue = blanksString.valueOf();
    wordValue = wordToGuess.valueOf();

    //if all the letters have been guessed correctly and the blanks string matches the randomly selected word string, the user wins
    if (blanksValue == wordValue) {
        resultDiv.innerHTML = "You win!";
    }

    //disable a letter button after it is selected
    event.target.setAttribute("disabled",true);
}

//add body parts to gallow for each wrong letter guess
function addBodyPart() {

    //add the head
    if (bodyPartCount == 1) {
        fill(0);
        circle(155,140,20);
    } //add the body
    else if (bodyPartCount == 2) {
        fill(0);
        rect(152,160,6,60);
    } //add an arm
    else if (bodyPartCount == 3) {
        fill(0);
        rect(152,180,40,6);
    } //add another arm
     else if (bodyPartCount == 4) {
        fill(0);
        rect(118,180,40,6);
    } //add a leg
    else if (bodyPartCount == 5) {
        fill(0);
        rect(152,220,40,6);
    } //add another leg, user has lost
    else if (bodyPartCount == 6) {
        fill(0);
        rect(118,220,40,6);
        resultDiv.innerHTML = "Game over";
    }
} 

//refresh the page when user hits the refresh button
function reloadPage() {
    window.location.reload();
}
