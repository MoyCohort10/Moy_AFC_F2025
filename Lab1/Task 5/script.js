// script.js
// Name: Moy
// Task5 - Temperature Classifier

// Step 1: Create a traditional function named classifyTemperature // this creates a function that accepts a value
function classifyTemperature(celsius) {
    // Step 2: Convert Celsius into Fahrenheit // this creates a variable that takes in a number with a fomula
    const fahrenheit = (celsius * (9 / 5)) + 32;

    // Step 3: Use conditionals to classify the temperature // this is a conditional statement to classify the temp
    if (fahrenheit > 100) {
        return "Hot";
    } else if (fahrenheit > 80) {
        return "Warm";
    } else if (fahrenheit < 40) {
        return "Cold";
    } else {
        return "Chilly";
    }
}

// Step 4: Prompt the user for a temperature in Celsius // this allows the user to enter a code for varibale input
const input = prompt("Enter temperature in Celsius:");

// Step 5: Convert input into a number // this turns the input into a number and assign to celsiu
const celsius = Number(input);

// Step 6: Validate the input (must be a number) // this is seeing if the input the user input is a number
if (Number.isNaN(celsius)) {
    console.log("Error: Please enter a valid number.");
} else {
    // Step 7: Call the function to classify the temperature // once they put a valid input in then it is used in the function and assigned to classifitcina
    const classification = classifyTemperature(celsius);

    // Step 8: Log the result to the console // this is printing the classification of the tempture.
    console.log("The temperature is:", classification);}