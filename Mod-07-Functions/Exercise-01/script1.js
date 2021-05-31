"use strict";

function displayHello(){
    console.log("hello");
}

function calculateAreaAndDisplay(height, width) {
    let area = height * width;
    console.log(area);
}

displayHello();
displayHello();
calculateAreaAndDisplay(3,6);
calculateAreaAndDisplay(5,5);
let x = 10; // x = document.getElementById() - getting element off the screen
let y = 3;
calculateAreaAndDisplay(x,y);