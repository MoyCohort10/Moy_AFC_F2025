// script.js
// Name: moy
// Task8 - Shopping List Operations

// Step 1: Hardcode an array for the shopping list// this is creating an array of strings
let shoppingList = ["eggs", "butter", "flour"];

// Step 2: Create a fat arrow function named modifyItem // this is using the fat arrow to push an item to the end of the array and print out the upated list
const modifyItem = (list, newItem) => {
    // Step 3: Add the new item to the end of the array// comment above
    list.push(newItem);

    // Step 4: Log the updated array to the console // comment above
    console.log("Updated shopping list:", list);
};

// Step 5: Prompt the user to input a new item// this takes a message from the uer and assigns it to useritem
const userItem = prompt("Enter a new item to add to the shopping list:");

// Step 6: Validate input (check for empty string) // this sees if the varibal e useritem is empty or not
if (!userItem) {
    console.log("Error: You must enter a valid item.");
} else {
    // Step 7: Call the function with the shopping list and user input // if userItem is not empty it will exucute and use shopping list and user name in moifying item
    modifyItem(shoppingList, userItem);
}