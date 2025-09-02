// script.js
// Name: Your Name
// Task4 - Event Countdown with Date Object

// Step 1: Create a traditional function to calculate days until event  // this is creating a function that count days
function calculateDaysUntil(eventDate) {
    // Step 2: Get today's date // this is a variuable that holds current day
    const today = new Date();

    // Step 3: Convert eventDate string into a Date object // this turns the eventDate with the date object
    const event = new Date(eventDate);

    // Step 4: Calculate difference in milliseconds // creating a variable that subtracts the event from today
    const diff = event - today;

    // Step 5: Convert milliseconds into days // this uses the math.ciel to  round up to the nearest whole numner
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    // Step 6: Return number of days // this returns the total days for the function.
    return days;
}

// Step 7: Prompt the user for a date in YYYY-MM-DD format// this creates a variable and assigns it to the date the user inserts
let eventDate = prompt("Enter event date (YYYY-MM-DD):");

// Step 8: Validate input format using a simple regex // this is the format for the dateFormat
const dateFormat = /^\d{4}-\d{2}-\d{2}$/;

while (!dateFormat.test(eventDate)) {
    eventDate = prompt("Invalid format. Please enter date as YYYY-MM-DD:");
}

// Step 9: Call the function and store result// this calls the calculate function with the eventDate and assigns it daysRemaining
const daysRemaining = calculateDaysUntil(eventDate);

// Step 10: Log result to the console //this is the print of the days remaining with the remaining variable you just made.
console.log("Days until the event:", daysRemaining);