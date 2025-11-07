function checkEligibility(age, isEmployed) {
    if (age <= 18) {
        return "You are not eligible.";
    } else if (age > 18 && isEmployed) {
        return "You are eligible.";
    } else {
        return "You are conditionally eligible."
    }
}

let userAge = 19;
let userEmployed = false;

console.log(checkEligibility(userAge, userEmployed));