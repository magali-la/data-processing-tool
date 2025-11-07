function calculateTotalCost(price, quantity, taxRate){
    // handle edge case - inputs are not numbers
    if (typeof(price) !== 'number' || typeof(quantity) !== 'number' || typeof(taxRate) !== 'number'){
        return 'Invalid input';
    }

    let totalCost = (price * quantity) * (1 + taxRate);
    
    return totalCost;
}

// define test variables
let itemPrice = 'free';
let itemQuantity = 1;
let stateTax = 0.5;

console.log(calculateTotalCost(itemPrice, itemQuantity, stateTax));