"use strict";

// let name = "Brenda Kaye";
let name = "Ian Auston";

let firstSpace = name.indexOf(" ");
let lastSpace = name.lastIndexOf(" ");

console.log(name.length); // 11 10
console.log(firstSpace); // 6 3
console.log(lastSpace); // 6 3

let firstName = name.substring(0, 4);
let lastName = name.substring(4);

console.log("Name: " + name);
console.log("First name: " + firstName);
console.log("Last name: " + lastName);
