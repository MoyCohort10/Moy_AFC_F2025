// script.js
// Name: Moy
// Lab2 - Simple Interest Calculator

// Step 1: Create a traditional function to calculate simple interest// this is the start of creating a function with three different variables.
function calculateSimpleInterest(principal, rate, time) {
    // Formula: (Principal × Rate × Time) / 100 // this is the return statement with the formula
    return (principal * rate * time) / 100;
}

// Step 2: Prompt the user for the principal amount // this is stores a number from the user as prinicpla
const principal = Number(prompt("Enter the principal amount:"));

// Step 3: Prompt the user for the rate of interest // this is storing a number from the user as rate
const rate = Number(prompt("Enter the rate of interest:"));

// Step 4: Prompt the user for the time in years // this is storing a number from user as the time
const time = Number(prompt("Enter the time in years:"));

// Step 5: Call the function and store the result / / this si calculating the interest from the function
const interest = calculateSimpleInterest(principal, rate, time);

// Step 6: Log the result to the console // this is printing the interest with a string
console.log("Your simple interest is:", interest);