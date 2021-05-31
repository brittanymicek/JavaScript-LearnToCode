"use strict";
// pohone number data formats: 917-243-2415 917.243.2415
//                             917/243-2415 (917)243.2415

// we make users enter a phone number without any punction
// by limiting the number of characters they can type to 10

let phoneNumber = "9172432415";

// write code to pull out 1st 3 digits, next 3 digits, last 4 digits
// and then format like (xxx) xxx-xxxx

// start at charcter 0 and go up to, but not including character at position 4
let first3Digits = phoneNumber.substring(0, 3); 
// start at character 3 and go up to, but not including character at position 6
let mid3Digits = phoneNumber.substring(3, 6);
// start at charcter 6 and takes the rest of the strong
let last4Digits = phoneNumber.substring(6);

/*
// start at character 0 and take 3 characters
let first3Digits = phoneNumber.substr(0, 3);
// start at character 3 and take 3 characters
let mid3Digits = phoneNumber.substr(3, 3);
// start at character 6 and take the rest of the strong
let first3Digits = phoneNumber.substr(6);
*/
let formattedPhoneNumber = "(" + first3Digits + ") " + mid3Digits + "-" + last4Digits;
console.log("Formatted phone number: " + formattedPhoneNumber); 

let formattedPhoneNumberAnotherWay = `(${first3Digits}) ${mid3Digits}-${last4Digits}`;
console.log("Formatted phone number: " + formattedPhoneNumberAnotherWay); 
