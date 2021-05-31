"use strict";

function calcMonthlyPmt(prin, intRate, yrs) {
    let payment = (prin * intRate / 1200) /
    (1 - (1 + intRate/1200) ** (-yrs * 12));
    return payment;
}

//-------------------
let prin = 325000;
let intRate = 3.5;
let years = 30;

let pmt = calcMonthlyPmt(prin, intRate, years);
console.log("Payment is $" + pmt.toFixed(2));

let x = 5;
let y = 2;

let z = Math.pow(y, x);
console.log(z);