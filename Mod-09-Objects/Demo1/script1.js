"use strict";

let dinnerLastNight = {
    drink: "Chardonnay",
    meal: "Salmon tacos",
    vegetables: "potatoes and brussel sprouts"
};

console.log("Drank: " + dinnerLastNight.drink);
console.log("Vegetables: " + dinnerLastNight.vegetables);

let firstJob = {
    company: "The Rave",
    jobTitle: "Associate",
    location: "Plaza Bonita Mall, San Diego, CA",
    pay: 7.50
};
console.log("My job title was " + firstJob.jobTitle + " and I was paid " + firstJob.pay);
// print out job title and the pay

let infoAboutMe = {
    name: "Brittany",
    age: 34,
    mom: {
        name: "Tracy",
        age: 57,
    },
    dad: {
        name: "Leslie",
        age: 64,
    }
};
console.log("My name is " + infoAboutMe.name + " and I am the daughter of " + infoAboutMe.mom.name + " and " + infoAboutMe.dad.name);

// print out your name, your mom's name, and your dad's name