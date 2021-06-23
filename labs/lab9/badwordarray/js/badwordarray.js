//retrieve the user input from the HTML page
let userInput = document.getElementById("user-input");

//the divs to show how many bad words are found in input, if any
let foundDiv = document.getElementById("bad-word-found");
let countDiv = document.getElementById("bad-word-count");

//array of bad words that I did in fact use in this version
let badWords = ["CLEAR","WATER","TIRES"];

//check the user input for the bad words
function catchBadWord() {
    //get the value of the input
    let wordList = userInput.value;

    //split the input into an array
    let wordArray = wordList.split(" ");

    //keep track of the number of bad words found in the word array
    let badWordCount = 0;


    //check each word in input array to see if they match one of the bad words
    for (i = 0; i < wordArray.length; i++) {

        if (badWords.includes(wordArray[i].toUpperCase())) {
            badWordCount = badWordCount + 1;
        }

    }

    //if bad words are found, then change each div to show there are bad words and how many there are
    if (badWordCount > 0) {
        foundDiv.innerHTML = "Were there any bad words? Yes";
        countDiv.innerHTML = "How many bad words? " + badWordCount;

    //if no bad words are found, then change the div to show there are none
    } else if (badWordCount == 0) {
        foundDiv.innerHTML = "Were there any bad words? No";
        countDiv.innerHTML = "How many bad words? 0";

    }

    //clear the input field so the user can type more bad words if desired
    document.getElementById("user-input").value = '';
}