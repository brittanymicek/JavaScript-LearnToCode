"use strict";

// function displayMailingLabel(name, address, city, state, zip) {

//     console.log(name);
//     console.log(address);
//     console.log(city + ", " + state + " " + zip);

// }

// let name = "Brittany Micek";
// let address = "550 Throop Avenue";
// let city = "Brooklyn";
// let state = "New York";
// let zip = "11221";

// displayMailingLabel(name, address, city, state, zip);



// function addNumbers(num1, num2){
//     let sum = num1 + num2;
//     console.log(sum);

// }

// let x = 10; // x = document.getElementById() - getting element off the screen
// let y = 3;
// let someNumber = 7;
// addNumbers(x, y);




function displayReceipt(totalDue, amountPaid){

   let changeDue = totalDue - amountPaid;

    if (amountPaid > totalDue) {
        console.log("Thank you for the large tip!");
    }
    else if (amountPaid < totalDue) {
        console.log("You owe: $" + changeDue);

    }

}

let totalDue = 10;
let amountPaid = 5;

displayReceipt(totalDue, amountPaid);