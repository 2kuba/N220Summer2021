//get the users name
let txtName = document.getElementById("txtName");

//take user name as argument to use in greeting
function sayHello(txtName) {

    //create greeting
    let greet = "Hello " + txtName.value;

    //print greeting to console
    console.log(greet);
}