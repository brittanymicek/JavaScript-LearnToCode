//inputs
let width = 12;
let length = 12;
let tilesPerBox = 12;

let pricePerBox = 22.75;


//calculations
let area = width * length;

let moreTiles = (area * .10);

let boxesNeeded = (Math.ceil(moreTiles / 12)); 


let totalCost = pricePerBox * boxesNeeded;

//output display
console.log(boxesNeeded);
console.log(totalCost);

//-------------
/*
let tiles = width * length; // calculate the number of tiles needed (area of room)
let tilesWithBonus = tiles * 1.1; // 10% extra tiles for breakage concerns
// let tilesWithBonus = tiles + (tiles *.1)
let noBoxesNeeded =Math.ceil(tilesWithBonus / 12) // tiles come in boxes of 12 -- can't buy a partial box

let boxesNeeded = tilesWithBonus /12; // this number might include a partial box
tilesWithBonus = Math.ceil(tilesNeeded); //if the number includes a partial box increase count to buy full box
console.log(noBoxesNeeded);

let boxesNeeded = Math.ceil(tiles/12);
let boxesWanted = Math.ceil((1.1 * width * lenth)/12)

*/
