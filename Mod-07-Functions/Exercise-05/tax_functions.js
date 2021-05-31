"use strict";

function getSocSecTax() {
    let socSecTax = grossPay * .062;
    return socSecTax;
}

function getMedicareTax(grossPay) {
    let mediTax = grossPay * .0145;
    return mediTax;
}

function getFederalTax(grossPay, withHoldingCode) {
    let fedTax = grossPay * withHoldingCode;

    if (withHoldingCode == 0) {
        fedTax = grossPay * .23;
    }
    else if (withHoldingCode == 1) {
        fedTax = grossPay * .21;
    }
    else if (withHoldingCode == 2) {
        fedTax = grossPay * .195;
    }
    else if (withHoldingCode == 3) {
        fedTax = grossPay * .185;
    }
    else if (withHoldingCode >= 4) {
        fedTax = grossPay * .18;

        // grossPay * (.18-(2*.005))
    }
    return fedTax
}

let grossPay = 1000;
let withHoldingCode = 1;

let ssTax = getSocSecTax(grossPay);
let mTax = getMedicareTax(grossPay);
let fTax = getFederalTax(grossPay, withHoldingCode);
console.log(ssTax);
console.log(mTax);
console.log(fTax);

