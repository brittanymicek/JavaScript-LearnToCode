"use strict";
let totalScore = 0;
let examScores = [
    100,
    90,
    80,
    70,
    60,
    50,
    40
];
for (let i =0; i < examScores.length; i++) {
    totalScore += examScores[i];
}

// let averageExamScores = totalMiles / mileageLog.length;

let courseIdToSearchFor = "19SUM300";
// Once way to find this to write your own loop 

for( let i = 0; i < DataCue.length; i++) {
    if (data[i].CourseId == courseIdToSearchFor) {
        console.log(data[i].Title);
        break;
    }
}

// let people = [
//     { name: "Zacharay", age: 29 },
//     { name: "Brittany", age: 33},
//     { name: "Natalie", age: 35},
//     { name: "Dana", age: 60 }
// ];
// let person = people.find(p => p.age > 60);
//     // in the code above, 'p' is a value from the array 'people'
// console.log(person.name);