// script.js
// Name: Your Name
// Task7 - Grade Classification

// Step 1: Create a fat arrow function named classifyGrade // this is a different way to create a function using the fat arrow
const classifyGrade = (grade) =>
    // Step 2: Use ONLY ternary operators for classification// this is the conditinos of the funciton
    (grade >= 90) ? "A" :
        (grade >= 80) ? "B" :
            (grade >= 70) ? "C" :
                (grade >= 60) ? "D" :
                    "F";

// Step 3: Prompt the user to input a grade as a number // this ask the user for the grde and assigns it to input
const input = prompt("Enter a grade (0-100):");

// Step 4: Convert the input into a number//this takes the string and turns it into a number and assings to grade
const grade = Number(input);

// Step 5: Validate the input // this valiadetes the grde entered to make sure it is a numner
if (Number.isNaN(grade)) {
    console.log("Error: Please enter a valid number.");
} else {
    // Step 6: Call the fat arrow function and log the result
    const classification = classifyGrade(grade); // if the grade ented is a number ten it will go to the function classifygin grade
    console.log("The grade classification is:", classification);
}