"use strict";

let name = "Betty";
let major = "BIOL"; // in reality, this come from the UI
let degreeTrack = "G";

let degreeTrackName;
let majorName;
let advisingLocation;

if(degreeTrack == "U") {
    degreeTrackName = "Undergraduate";
}
else if (degreeTrack == "G") {
    degreeTrackName = "Graduate";
}
else {
    degreeTrackName = "<unknown>";
}
if (major == "BIOL") {
    majorName = "Biology";
}
else if (major == "CSCI") {
    majorName = "Computer Science";
}
else if (major == "ENG") {
    majorName = "English";
}
else if (major == "HIST") {
    majorName = "History";
}
else if (major == "MRKT") {
    majorName = "Marketing";
}
else {
    majorName = "<unknown>";
}

if (major == "BIOL" && degreeTrack == "U") {
    advisingLocation = "Science Bldg, Room 310";
}
else if (major == "BIOL" && degreeTrack == "G") {
    advisingLocation = "Science Bldg, Room 334";
}
else if (major == "CSCI" && degreeTrack == "U") {
    advisingLocation = "Sheppard Hall, Room 410";
}
else if (major == "CSCI" && degreeTrack == "G") {
    advisingLocation = "Sheppard Hall, Room 314";
}
else if (major == "ENG" && degreeTrack == "U") {
    advisingLocation = "Kerr Hall, Room 201";
}
else if (major == "ENG" && degreeTrack == "G") {
    advisingLocation = "Kerr Hall, Room 202";
}
else if (major == "HIST" && degreeTrack == "U") {
    advisingLocation = "Alva Hall, Room 114";
}
else if (major == "HIST" && degreeTrack == "G") {
    advisingLocation = "Alva Bldg, Room 115";
}
else if (major == "MKT" && degreeTrack == "U") {
    advisingLocation = "Westly Hall, Room 310";
}
else if (major == "MKT" && degreeTrack == "G") {
    advisingLocation = "Westly, Room 202";
}
console.log("Student: " + name);
console.log("Degree Track: " + degreeTrackName);
console.log("Major: " + majorName);
console.log("Advising Location: " + advisingLocation);