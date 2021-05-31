"use strict";

//variable - inputs 
let studentName = "Brittany";
let major = "BIOL"; // BIOL || CSCI || ENG || HIST || MKT
let degreeTrack = "U"; // U || G;

if (major == "BIOL" && degreeTrack == "U") {
    
    console.log("Student: " + studentName);
    console.log("Degree Track: " + degreeTrack);
    console.log("Major: " + major);
    console.log("Advising Location: Science Bldg, Room 310");

}


/*else (major == "BIOL" && degreeTrack == "G") {
    console.log("Student: " + studentName);
    console.log("Degree Track: " + degreeTrack);
    console.log("Major: " + major);
    console.log("Advising Location: Science Bldg, Room 334");
}
*/

/*
Advising Locations

Biology
U: Science Bldg, Room 310
G: Science Bldg, Room 334

Computer Science
U: Sheppard Hall, Room 314
G: Sheppard Hall, Room 401

English
U: Kerr Hall, Room 201
G: Kerr Hall, Room 202

History
U: Alva Hall, Room 114
G: Alva HAll, Room 115

Marketing
U: Westly Hall, Room 310
G: Westly Hall, Room  202
*/

// If the major code is not one of the ones in the table, display <unknown> for the major and nothing for advising location.



//example output
/*
Student: Betty
Degree Track: Undergraduate
Major: English
Advising Location: Kerr Hall, Room 201
*/