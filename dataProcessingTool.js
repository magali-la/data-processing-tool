function formatFullName(firstName, lastName) {
    // handle edge case - no input
    if (firstName.length == 0 || lastName.length == 0){
        return "Invalid input"
    }

    // convert the input first name and last name strings into an array
    let firstArr = Array.from(firstName);
    let lastArr = Array.from(lastName);
    console.log(firstArr);
    console.log(lastArr);
    
    // use splice to start at index 0, delete one element or the first character, and replace it with the uppercase of the first character string of the array
    firstArr.splice(0, 1, firstArr[0].toUpperCase());
    console.log(firstArr);
    lastArr.splice(0, 1, lastArr[0].toUpperCase());
    console.log(lastArr);

    // define variables for converting back to string, by joining, setting it empty for no spaces or commas
    let firstCamel = firstArr.join('');
    let lastCamel = lastArr.join('');
    console.log(firstCamel);
    console.log(lastCamel);
 
    // use template literal to host values
    return `${lastCamel}, ${firstCamel}`;
}

// declare variables to test function
let first = 'johnny';
let last = '';

console.log(formatFullName(first, last));