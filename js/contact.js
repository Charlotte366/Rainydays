const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
//const lastName = document.querySelector("#lastName");
//const lastNameError = document.querySelector("lastNameError")
const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");
const cardNumber = document.querySelector("#cardNumber");
const cardNumberError = document.querySelector("#cardNumberError");
const cardholderName = document.querySelector("#cardholderName")
const cardholderNameError = document.querySelector("#cardholderNameError")
const cvv = document.querySelector("#cvv");
const cvvError = document.querySelector("cvvError");



function validateForm(){
    event.preventDefault();

    if (name.value.trim().length > 0) {
        nameError.style.display = "none";
    } else {
        nameError.style.display ="block";
    }

    if (lastName.value.trim().length > 0) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display ="block";
    }

    if (city.value.trim().length > 9) {
        cityError.style.display = "none";
    } else {
        cityError.style.display ="block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display ="block";
    }

    if (validateCardNumber(cardNumber.value) === true) {
        cardNumberError.style.display = "none";
    } else {
        cardNumberError.style.display ="block";
    }

    if (validatecvv(cvv.value) === true) {
        cvvError.style.display = "none";
    } else {
        cvvError.style.display ="block";
    }
    

    if (adress.value.trim().length > 9) {
        adressError.style.display = "none";
    } else {
        adressError.style.display ="block";
    }

    if (city.value.trim().length > 0) {
        cityError.style.display = "none";
    } else {
        cityError.style.display ="block";
    }

    if (country.value.trim().length > 0) {
        countryError.style.display = "none";
    } else {
        countryError.style.display ="block";
    }



    console.log("Hey");
}

form.addEventListener("submit", validateForm);

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function validateCardNumber(cardNumber) {
    const regEx =  /^\d+$/;
    const patternMatches = regEx.test(cardNumber);
    return patternMatches;
}

function validatecvv(cvv) {
    const regEx =  /^\d+$/;
    const patternMatches = regEx.test(cvv);
    return patternMatches;
}

const message = document.querySelector("textarea");
const characterCount = document.querySelector(".character-count span");
const submitButton = document.querySelector("button[type='submit']");

message.onkeyup = function () {
    console.log(event.target.value.length);

    const length = event.target.value.length;

    characterCount.innerHTML = length;

    if (length >= 9) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
};