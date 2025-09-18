const textbox = document.getElementById("textbox")
const CharacterCount = document.getElementById("CharacterCount")
const form = document.getElementById("form")

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
    const Pattern = /^\d{3}-\d{3}-\d{4}$/;
    const value = phone.value.trim();
    if(!Pattern.test(value)){
        alert("Wrong format for phone");
    }
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





