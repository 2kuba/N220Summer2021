//get the div to display the answer
let answer = document.getElementById("answer");
answer.style.margin = "20px";

//set attributes for the button for the first question
let question1 = document.getElementById("question1");
question1.style.backgroundColor = "#9fa0a1";
question1.style.margin = "20px";
question1.style.padding = "8px";

//set attributes for the button for the second question
let question2 = document.getElementById("question2");
question2.style.backgroundColor = "#9fa0a1";
question2.style.margin = "20px";
question2.style.padding = "8px";

//set attributes for the button for the third question
let question3 = document.getElementById("question3");
question3.style.backgroundColor = "#9fa0a1";
question3.style.margin = "20px";
question3.style.padding = "8px";

//change the answer div based on the question button clicked
function giveAnswer(event) {
    let qAnswer = event.target.getAttribute("data-answer");

    answer.innerHTML = qAnswer;
}

