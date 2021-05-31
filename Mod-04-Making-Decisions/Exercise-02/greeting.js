"use strict";
 
let currentHr = 1700; // contains the current hour (0-23)

//display "Good morning!" if from 0 - 10AM
//display "Good day!" if from 10AM - 4:59PM
//display "Good evening!" if from 5PM to 23:59PM

if (currentHr <= 1000) {
    console.log("Good morning!");
}
else if (currentHr <= 1659) {
    console.log("Good day!");
}
else {
    console.log("Good evening!");
}
