// script.js
// Name: Jalen Moy
// Lab1 - Dynamic Age Calculator

// Step 1: Create a traditional function to calculate age // This is how you create a function or method . the starting point
function calculateAge(year) {
    // Step 2: Get the current year from the system clock // this is creating a variable and getting the year date for it.
    const currentYear = new Date().getFullYear();

    // Step 3: Subtract the birth year from the current  // this is the end of the function that returns the difference between current year and year
    return currentYear - year;
}

// Step 4: Prompt the user to enter their birth year // this creates a variable with a message to the ysed
const input = prompt("Enter your birth year (e.g., 2004):");

// Step 5: Convert the input (which is a string) into a number // this creates a variable that accepts the input
const birthYear = Number(input);

// Step 6: Check if the input is valid (not empty or invalid)  // this is a conditional statement with an or statement in it
if (input === null || Number.isNaN(birthYear)) {
    // Step 7: If input is missing or not a number, display a message // this is what happens if either of the things are satified
    console.log("No valid year provided.");
} else {
    // Step 8: If input is valid, call the function to calculate age // this is the backend of the if statement that returns the age and function
    const age = calculateAge(birthYear);

    // Step 9: Display the result in the console // this displays the age of the users.
    console.log("Your age is:", age);
}