"use strict";

function calcGrossPay(hrs, rate) {
    let gross = hrs * rate;
    return gross;
}

function calcMedTax(gross) {
    let tax = gross * .0145;
    return tax;
}

function calcSSTax(gross) {
    let tax = gross * .062;
    return tax;
}

let hours = 20;
let rate = 10;
let grossPay = calcGrossPay(hours, rate);
let ssTax = calcSSTax(grossPay);
let medTax = calcMedTax(gross);