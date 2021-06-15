//get input from html
let userNum = document.getElementById("userNum");

//div to give result
let answer = document.getElementById("answer");

//check for divisibility
function divis7(userNum) {
    
    //set input to number
    let num = Number(userNum.value);


    //check if input number is divisible by 7
    if (num % 7 == 0) {
        return true;
    } else {
        return false;
    }
    
}

//button click to change div
function check7(userNum) {

    //run function for divisibility based on input
    divis7(userNum);

    
    if (divis7(userNum) == true) {
        answer.innerHTML = "The number is divisible by 7";
    } else if (divis7(userNum) == false) {
        answer.innerHTML = "The number is not divisible by 7";
    }

}
