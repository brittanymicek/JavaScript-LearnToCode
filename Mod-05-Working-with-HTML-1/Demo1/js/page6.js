"use strict";
window.onload = function () {
    // connect calculate pay (hourly) button to event handler
    const calcPayBtn = document.getElementById("calcPayBtn");
    calcPayBtn.onclick = calcPayBtnClicked;

    // connect calculate pay (salary) button to click event handler
    const calcSalaryBtn = document.getElementById("calcSalaryBtn");
    calcSalaryBtn.onclick = calcSalaryBtnClicked;
}

function calcPayBtnClicked() {
    // get payRate of employee from <input>
    const payRateField = document.getElementById("payRate");
    let payRate = Number(payRateField.value);

    // get hrsWorked of employee from <input>
    const hrsWorkedField = document.getElementById("hrsWorked");
    let hrsWorked = Number(hrsWorkedField.value);

    // calculate hourly gross pay including overtime if any
    let grossPay;
    if (hrsWorked > 40) {
        grossPay = (payRate * 40) + ((hrsWorked - 40) * payRate * 1.5);
    }
    else {
        grossPay = payRate * hrsWorked;
    }
    //Generate output for gross pay and display in <p id="results">
    let message = "Your gross pay is $" + grossPay.toFixed(2);

    const resultsField = document.getElementById("results");
    resultsField.innerHTML = message;
}

function calcSalaryBtnClicked() {
    // Get payRate of employee from <input>
    const payRateField = document.getElementById("payRate");
    let payRate = Number(payRateField.value);

    // Calculate gross pay for salaried employee (always 40 hours)
    let grossPay = payRate * 40;

    //Generate output for gross pay and display in <p id="results">
    let message = "Your gross pay is $" + grossPay.toFixed(2);

    const resultsField = document.getElementById("results");
    resultsField.innerHTML = message;
}

