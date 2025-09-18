const form = document.getElementById('myForm');
const ageInput = document.getElementById('age');
const errorDiv = document.getElementById('error');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // stop form from submitting right away

    const age = Number(ageInput.value); // convert input to number

    errorDiv.textContent = ''; // clear previous error

    if (!age || age < 21 || age > 99 || !Number.isInteger(age)) {
        errorDiv.textContent = 'Please enter a whole number between 21 and 99.';
        return; // stop if invalid
    }

    alert('Age is valid! Form can be submitted.');
    // form.submit(); // uncomment this line if you want the form to actually submit
});
