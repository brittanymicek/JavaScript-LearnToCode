"use strict";

// parse code in the following format:
// supplierCode: productNumber-size
// ex: ACME:123-L
//     DI:12345-M
//     ACE:1-12

// find the supplier code, product number, and the size

let partCode = "ACE:1-12";
// let partCode = document.getElementByID("partCode").value;
let supplier;
let partNumber;
let size;

let colonPosition = partCode.indexOf(":");
supplier = partCode.substring(0, colonPosition);
let dashPosition = partCode.indexOf("-");
partNumber = partCode.substring((colonPosition +1), dashPosition);
size = (partCode.charAt(partCode.length - 1));

console.log("Supplier: " + supplier);
console.log("Part Number: " + partNumber);
console.log("Size: " + size);