//retrieve value for bill amount from user input
let billAmt = document.getElementById("billAmt");

//calculate the tip and total
function calcTip() {
    
    //get value of input as a number
    let bill = Number(billAmt.value);

    //calculate tip
    let tip = Number(bill * 0.2);

    //add tip to bill amount to get total
    let total = Number(bill + tip);

    //create string output for tip and total
    let output = "Tip: $" + tip + ". Total: $" + total;

    //print output to console
    console.log(output);
}