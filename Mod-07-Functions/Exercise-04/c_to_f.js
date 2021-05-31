"use strict";

function convertCtoF(temp) {
    let fahTemp = (temp * 9/5) + 32;
    return fahTemp;
    }
    
    let currentTemp = 0;
    let fahrenheitTemp = convertCtoF(currentTemp)
    console.log(currentTemp + "C is " + fahrenheitTemp + "F"); 