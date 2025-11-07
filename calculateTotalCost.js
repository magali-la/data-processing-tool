function calculateTotalCost(price, quantity, taxRate, discount){
    // handle edge case - inputs are not numbers
    if (typeof(price) !== 'number' || typeof(quantity) !== 'number' || typeof(taxRate) !== 'number'){
        return 'Invalid input';
    }

    let totalCost = (price * quantity) * (1 + taxRate);

    // adjust price if sale is ongoing
    if (discount){
        totalCost -= 2;
    }

    return totalCost;
}

// define test variables
let itemPrice = 10;
let itemQuantity = 1;
let stateTax = 0.5;
let onSale = true;

console.log(calculateTotalCost(itemPrice, itemQuantity, stateTax, onSale));