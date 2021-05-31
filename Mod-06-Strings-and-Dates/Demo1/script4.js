"use strict";
// PART CODES LOOK LIKE manufactor:partNumber
// ex: NIKE:L10
//     ADIDAS:M76T415

// part codes consist of a manufactuerer, a colon, and a part number
let partCode = "ADIDAS:M76T415";
// let partCode = document.getElementByID("partCode").value;

// goal is to "parse" the partcode to putt out separately the manufacturer
// and the part number and put them in the variables below
let manufacturer;
let partNumber;

// to do this, we must find the COLON!
let colonPosition = partCode.indexOf(":"); // this returns the position of the colon
                                           // as a 0-based number. ex. if it was the 1st character
                                           // it would return 0. if it was the 2nd character, it would 
                                           // return 1. if it didn't find the character, it would return -1.
 // now that we know where the colon is, we know the manufacturer starts at character 0 and
 // includes all characters up to, but not including the character where the colon is                                          

manufacturer = partCode.substring(0, colonPosition); // colonPosition character is not included 
                                                     // when you call 'substring'

// the part numbers starts one character past (to the right of) the colon and takes up the rest of the partcode string                                                    
partNumber = partCode.substring(colonPosition + 1); // if you only specify the starting position,
                                                   // it automatically goes to the end of the string

// display the values we parsed out of the string
console.log("Manufacturer: " + manufacturer);
console.log("Part Number: " + partNumber);

