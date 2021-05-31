"use strict";

function convertFtoC(temp) {
let celTemp = (temp - 32) * 5/9;
return celTemp;
}

let currentTemp = 0;
let celsiusTemp = convertFtoC(currentTemp)
console.log(currentTemp + "F is " + celsiusTemp + "C"); 