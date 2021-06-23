//retrieve list of values from user input
let valueList = document.getElementById("value-list");

//divs for displaying average and sum back to user
let avgDiv = document.getElementById("avg");
let sumDiv = document.getElementById("sum");

//calculate the average and sum
function findAvg() {
    //get the values from the user input
    let numList = valueList.value;

    //separate the input string into an array
    let numArray = numList.split(",");

    //variables to store values of sum and average
    let sum = 0;
    let avg = 0;

    //loop to look at each value in array, add to sum, then calculate new average
    for (i=0; i < numArray.length; i++) {
        //calculates the sum by adding each number in array to current sum
        sum += Number(numArray[i]);

        //calculates the average by dividing the current sum by the total number of values in the array
        avg = sum/(numArray.length);

        //updates the divs for displaying the average and sum back to the user
        avgDiv.innerHTML = "Average: " + avg;
        sumDiv.innerHTML = "Sum: " + sum;
    }

    
}