// Author: Brendan Davis
// Email: davis.045@gmail.com
// Date: Oct.19 2018
// Course: CPNT-262
// Assignment: Final Project

var submitButton = document.myform.submit;

function validateEmail(Email) {
    let reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reEmail.test(String(Email).toLowerCase());
}

function validatePhone(Phone) {
    let rePhone = /^[0-9\+]{1,}[0-9\-]{3,15}$/;
    return rePhone.test(Phone);
}

function validatePostal(Postal) {
    let rePostal = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    return rePostal.test(Postal);
}

submitButton.addEventListener("click", function(event) {
event.preventDefault();

let firstName = document.myform["firstname"].value;
let lastName = document.myform["lastname"].value;
let email = validateEmail(document.myform["email"].value);
let phone = validatePhone(document.myform["phone"].value);
let address = document.myform["address"].value;
let city = document.myform["city"].value;
let postalCode = validatePostal(document.myform["postalCode"].value);

if (firstName && lastName && email && phone && address && city && postalCode) {
    alert('Thank you for your submission ' + firstName + "!");
    location.reload(); //form.submit() goes here
}
else {
    alert('Please fill out the form properly')
    }
})