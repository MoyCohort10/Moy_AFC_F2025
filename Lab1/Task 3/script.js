// script.js
// Name: Moy
// Task3 - Favorite Color Selector

// Step 1: Create an array with three colors // this is creating a array in  colors
let colors = ["red", "blue", "green"];

// Step 2: Create a traditional function named addColor // this is creating a function named addColor that accepts an array
function addColor(colorArray) {
    // Step 3: Prompt the user for a color // this adds a color to an array.
    const newColor = prompt("Enter a color to add:");

    // Step 4: Add the new color to the beginning of the array // this adds a color at the start of color
    colorArray.unshift(newColor);

    // Step 5: Log the updated array// this prints the new array with a string
    console.log("Updated colors:", colorArray);
}

// Step 6: Call the function with the colors array // this is calling the function with colors
addColor(colors);