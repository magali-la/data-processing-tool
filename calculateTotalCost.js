function calculateTotalCost(price, quantity, taxRate){
    let totalCost = (price * quantity) * (1 + taxRate);
    
    return totalCost;
}

// define test variables
let itemPrice = 10;
let itemQuantity = 1;
let stateTax = 0.5;

console.log(calculateTotalCost(itemPrice, itemQuantity, stateTax));