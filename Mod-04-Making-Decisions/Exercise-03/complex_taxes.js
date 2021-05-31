"use strict";
 
// inputs 
let hrsWorked = 40;
let hrlyPayRate = 10;
let filingStatus = "single"; // "single" or "joint" only input options

let wklyGrossPay = hrsWorked * hrlyPayRate; // weekly gross pay
let expectedYrlyGrossIncome = wklyGrossPay * 52; // yearly income (weekly gross pay * 52)
 
let taxRate;
let taxAmount;


// if yearly income is under 12k, then tax rate is 5% (single)
// if yearly income is 12k - 24,999.99, then tax rate is 10% (single)
// if yearly income is 25k - 74,999.99, then tax rate is 15% (single)
// if yearly income is 75k and over, then tax rate is 20% (single)


// if yearly income is under 12k, then tax rate is 0% (joint)
// if yearly income is 12k - 24,999.99, then tax rate is 6% (joint)
// if yearly income is 25k - 74,999.99, then tax rate is 11% (joint)
// if yearly income is 75k and over, then tax rate is 20% (joint)

if (expectedYrlyGrossIncome <= 12000) {
    if (filingStatus == "single") {
    taxRate = .05;
    taxAmount = expectedYrlyGrossIncome * taxRate;
    }
    else if (filingStatus = "joint") {
        taxRate = 0;
        taxAmount = expectedYrlyGrossIncome * taxRate;
    }
}
else if (expectedYrlyGrossIncome <= 24,999.99) {
    if (filingStatus == "single") {
    taxRate = .10;
    taxAmount = expectedYrlyGrossIncome * taxRate;
    }
    else if (filingStatus = "joint") {
        taxRate = .06;
        taxAmount = expectedYrlyGrossIncome * taxRate;
    }
}
else if (expectedYrlyGrossIncome <= 74,999.99) {
    if (filingStatus == "single") {
    taxRate = .15;
    taxAmount = expectedYrlyGrossIncome * taxRate;
    }
    else if (filingStatus = "joint") {
        taxRate = .11;
        taxAmount = expectedYrlyGrossIncome * taxRate;
    }
}
else {
        if (filingStatus == "single") {
        taxRate = .20;
        taxAmount = expectedYrlyGrossIncome * taxRate;
        }
        else if (filingStatus = "joint") {
            taxRate = .20;
            taxAmount = expectedYrlyGrossIncome * taxRate;
        }
    }

console.log(taxAmount);


/* -------------------

let payRate = 17.30;
 let hoursWorked = 45;

 let grossPay;

 if (hoursWorked <= 40) {

 	grossPay = hoursWorked * payRate
 }
 else {
 	grossPay = (hoursWorked * payRate) * 1.5;
 }
 console.log(grossPay.toFixed(2));
 */