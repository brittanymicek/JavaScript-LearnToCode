"use strict";

let partCode1 = "XYZ:1234-L";
// let part1 = parsePartCode(partCode1);
// console.log("Supplier: " + part1.supplierCode + " Product Number: " + part1.productNumber + " Size: " + part1.size);
// this function take a string as a paramenter formatted as:
// supplierCode:productNumber-size

let supplierCode;
let productNumber;
let size;

// function parsePartCode() {
let colonPosition = partCode1.indexOf(":");
    supplierCode = partCode1.substring(0, colonPosition);
    productNumber = partCode1.substring(4, 8);
    size = partCode1.length - 1;
    size = partCode1.charAt(9);

// }
// let part1 = parsePartCode(partCode1);
console.log(supplierCode);
console.log(productNumber);
console.log(size);
// console.log("Supplier: " + part1.supplierCode + " Product Number: " + part1.productNumber + " Size: " + part1.size);
    


// parsePartCode(partCode1);
