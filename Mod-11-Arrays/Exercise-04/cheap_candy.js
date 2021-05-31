"use strict";

let data = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Starburst", price: 2.69 },
    { product: "Now and Later", price: 3.99 },
    { product: "Haribo Gold-Bears", price: 2.49 },
    { product: "Skittles", price: 1.99 },
    { product: "Redvines", price: 8.72 },
    { product: "Blow Pops", price: 4.19 },
]

let foundCandies = data.filter(arrayElement => arrayElement.price <= 4.00);
for (let i = 0; i < foundCandies.length; i++) {
    console.log(foundCandies[i].product);
}