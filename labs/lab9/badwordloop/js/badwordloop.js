//retrieve the user input from the HTML page
let userInput = document.getElementById("user-input");

//the divs to show how many bad words are found in input, if any
let foundDiv = document.getElementById("bad-word-found");
let countDiv = document.getElementById("bad-word-count");

//array of bad words that I didn't use in this version but will in the next one
let badWords = ["clear","water","tires"];

//check the user input for the bad words
function catchBadWord() {
    //get the value of the input
    let wordList = userInput.value;

    //split the input into an array
    let wordArray = wordList.split(" ");

    //keep track of the number of bad words found in the word array
    let badWordCount = 0;

    //hardcoded bad words since I wasn't using the array.find or array.includes methods in this version
    let badWord1 = "clear";
    let badWord2 = "water";
    let badWord3 = "tires";

    //check each word in input array to see if they match one of the bad words
    for (i = 0; i < wordArray.length; i++) {

        //compare word in array to first bad word (clear)
        if (wordArray[i].toUpperCase() == badWord1.toUpperCase()) {
            badWordCount = badWordCount + 1;

        //compare word in array to second bad word (water)
        } else if (wordArray[i].toUpperCase() == badWord2.toUpperCase()) {
            badWordCount = badWordCount + 1;

        //compare word in array to third bad word (tires)
        } else if (wordArray[i].toUpperCase() == badWord3.toUpperCase()) {
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