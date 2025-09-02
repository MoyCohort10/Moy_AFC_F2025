// script.js
// Name: Moy
// Task10 - How Long Until Graduation

// Step 1: Create a fat arrow function to determine today's date // this is using the fat arrow fnction to create a function and return the date
const getToday = () => {
    return new Date();
};

// Step 2: Call the function to get the current date / this uses the get today constant and assigns it to varibale date
const today = getToday();

// Step 3: Get the weekday name // this gets the days with two functions days and weekday
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekday = days[today.getDay()];

// Step 4: Format the date like 2025, January 21st // this puts the months of the year in an array. with years months and days
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const year = today.getFullYear();
const month = months[today.getMonth()];
const day = today.getDate();

// Step 5: Function to get correct ordinal suffix (st, nd, rd, th) // this returns the ending of the th,nd,rd depending on the number
const getSuffix = (n) => {
    if ([11, 12, 13].includes(n % 100)) return "th";
    switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
};

const formattedDate = year + ", " + month +  " " + day + getSuffix(day);

// Step 6: Log today's weekday and date // this prints the day of the week and formats the days
console.log("Today is:", weekday);
console.log("Formatted date:", formattedDate);

// Step 7: Calculate days left until last day of coursework (November 13, 2025) // this assings an variable and it gets the days left to turn in a project and rounds up the days.
const graduationDate = new Date("2025-11-13");

const diff = graduationDate - today;
const daysRemaining = Math.ceil(diff / (1000 * 60 * 60 * 24));

// Step 8: Log the countdown message // this prints a string and days remaining
console.log("And you have " + daysRemaining + " days left in this web design program until graduation.");