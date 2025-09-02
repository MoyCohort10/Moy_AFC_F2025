// script.js
// Name: Your Name
// Task9 - Weekday Detector

// Step 1: Create a fat arrow function to determine the current day // this is using the fat arrow fuction to create a fucntion called getWeekday
const getWeekday = () => {
    // Step 2: Use the Date object to get today's date // this assigns the current date to the constant today
    const today = new Date();

    // Step 3: Get the day of the week as a number (0 = Sunday, 6 = Saturday) // this gets the day of the week from the numeric value.
    const dayNumber = today.getDay();

    // Step 4: Create an array of weekday names // this is an array of all the days of the week.
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Step 5: Return the current day name // this uses the index that corrilates to the day of the week
    return days[dayNumber];
};

// Step 6: Call the function and log the result
console.log("Today is:", getWeekday());