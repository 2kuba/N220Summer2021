let billAmt = document.getElementById("billAmt");

function calcTip() {
    let bill = Number(billAmt.value);
    let tip = Number(bill * 0.2);
    let total = Number(bill + tip);

    let output = "Tip: $" + tip + ". Total: $" + total;

    console.log(output);
}