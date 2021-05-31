// calculate gross pay
// if the person works more than 40 hours, pay the overtime hours at 1.5 tims the rate of regular hours
/*
let payRate = 17.30;
let hoursWorked = 45;
let overTimeRate = 1.5;

let regPay = payRate * hoursWorked;

let grossPay;

if (hoursWorked > 40) {

grossPay = regPay * overTimeRate; 

}

else {
    regPay;
}
 console.log(grossPay);

 */

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
