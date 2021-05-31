"use strict";

//inputs
let numPeople = 38;

//calculate the number of vans needed -- leave no person behind
let numVans = Math.ceil(numPeople / 15);

//calculate the cost of the van rental
let totalCost = 250 * numVans;

//calculate the cost per person for the van
let costPerPerson = totalCost /numPeople;

//output
console.log("The cost per person is $" + costPerPerson.toFixed(2));


