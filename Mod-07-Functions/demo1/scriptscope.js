"use strict";

let grossPay = 100;

function calcSSTax() {
    let ssTax = grossPay * .062;
    return ssTax;
}
console.log(grossPay);
let ssTax = calcSSTax(grossPay);