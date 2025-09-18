const textbox = document.getElementById("textbox")
const CharacterCount = document.getElementById("CharacterCount")
const form = document.getElementById("form")
const phoneInput = document.getElementById("Phone")
phoneInput.required = true;
const phoneAdvice = document.getElementById("advice");
const FirstName = document.getElementById("FirstName")
FirstName.required = true;
const Lastname = document.getElementById("Lastname")
Lastname.required = true;
const Addy = document.getElementById("Address 1")
Addy.required = true;
const city = document.getElementById("City")
city.required = true;
const age = document.getElementById("Age")
age.required = true;
const Email = document.getElementById("Email")
Email.required = true;
const password = document.getElementById("Password")
password.required = true;

// this is for the text box
textbox.addEventListener('input',()=>{
    const remaining = 30 - textbox.value.length;
    CharacterCount.textContent = remaining;
})


const phone = document.getElementById("Phone")
const wrongNumber = document.getElementById("wrongNumber")
//this is for the phone number like a live updater
phone.addEventListener('input',()=>{
    const pattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!pattern.test(phone.value)){
        wrongNumber.textContent = "Format 111-222-3333";
    }else{
        wrongNumber.textContent = "";
    }
})

// this is to stop the page from reloading
form.addEventListener('submit',function(e){
    e.preventDefault();

    // this is the validator for the phone
    const unedited = phoneInput.value.replace(/\D/g, "");

    if(unedited.length < 10){
        phoneAdvice.classList.remove("d-none");
    } else{
        phoneAdvice.classList.add("d-none");
    }

    let formatted = unedited;

    if (unedited.length >= 4 && unedited.length <= 6) {
        formatted = `${unedited.slice(0, 3)}-${unedited.slice(3)}`;
    } else if (unedited.length >= 7) {
        formatted = `${unedited.slice(0, 3)}-${unedited.slice(3, 6)}-${unedited.slice(6, 10)}`;
    }

    phoneInput.value = formatted;
    //this is the validator for age
    const Age = Number(document.getElementById('Age').value)
    if (isNaN(Age)|| Age >99|| Age<21){
        alert("Age must be a number between 21 and 99");
        return;
    }

    // this is the code that will console.log the data for the info entered into the form
    const formData = new FormData(form)


    for(const[name,value] of formData.entries()){
        console.log(`${name}: ${value}`)
    }

});





