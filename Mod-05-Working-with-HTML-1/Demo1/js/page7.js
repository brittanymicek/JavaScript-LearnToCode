"use strict";

window.onload = function () {
    const calcPayBtn = document.getElementById("calcPayBtn");
    calcPayBtn.onclick = calcPayBtnClicked;

}

function calcPayBtnClicked() {
    // get value for pay rate from <input>
    const payRateField = document.getElementById("payRate");
    let payRate = Number(payRateField.value);

    // get hrsWorked from <input>
    const hrsWorkedField = document.getElementById("hrsWorked");
    let hrsWorked = Number(hrsWorkedField.value);

    let grossPay;

    const hourlyCheckbox = document.getElementById("hourly");

    // if the checkbox is checked, they are paid hourly
    // this means they might get overtime, but only if they work 40+ hours
    // otherwise they are paid the number of hours they work
    if (hourlyCheckbox.checked == true) {
        if (hrsWorked > 40) {
            grossPay = (payRate * 40) + ((hrsWorked - 40) * 1.5 * payRate);
        }
        else {
            grossPay = payRate * hrsWorked;
        }
    }
    else {
        // if the checkbox is not checked, we assume they are salaried
        // and they are paid 40 hours, no matter how many hrs really worked
        grossPay = payRate * 40;
    }
// NOW THAT GROSS PAY IS CALCULATED ... calculate benefit costs ...
    let benefitCosts = 0;
    
    const insuranceCheckbox = document.getElementById("insurance");
    if (insuranceCheckbox.checked == true) {
        benefitCosts += 25;
    }

    const busPassCheckbox = document.getElementById("busPass");
    if (busPassCheckbox.checked == true) {
        benefits += 12.50;
    }

    const retirementCheckbox = document.getElementById("retirement");
    if (retirementCheckbox.checked == true) {
        benefitCosts += (grossPay * .03);
    }
let taxes = 0;
const yesTaxesRadioBtn = document.getElementById("yesTaxes");
if (yesTaxesRadioBtn.checked == true) {
    taxes = grossPay * .10
}



    let netPay = grossPay - benefitCosts - taxes;
    // put gross pay in the <p id="grossPay">
    const grossPayPara = document.getElementById("grossPay");
    grossPayPara.innerHTML = "Your gross pay is $" + grossPay.toFixed(2);

    //put benefit costs in <p id = benefitCosts>
    const benefitCostsPara = document.getElementById("benefitCosts");
    benefitCostsPara.innerHTML = "Your benefit costs is $" + benefitCosts.toFixed(2);

    //put taxesin <p id = taxes>
    const taxesPara = document.getElementById("taxes");
    taxesPara.innerHTML = "Your taxes are $" + taxes.toFixed(2);

    const netPayPara = document.getElementById("netPay");
    netPayPara.innerHTML = "Your net pay is $" + netPay.toFixed(2);

}

function calcTaxes(wantToPayTaxes, grossPay) {
    let taxes = 0;

    if (wantToPayTaxes == true){
        taxes = grossPay * .10;
    }
    return taxes
}