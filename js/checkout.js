const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");
const cardnumber = document.querySelector("#cardnumber");
const cardnumberError = document.querySelector("#cardnumberError");
const cardholdername = document.querySelector("#cardholdername");
const cardholdernameError = document.querySelector("#cardholdernameError");
const expiredate = document.querySelector("#expiredate");
const expiredateError = document.querySelector("#expiredateError");
const cvv = document.querySelector("#cvv");
const cvvError = document.querySelector("#cvvError");


function validateForm() {
    event.preventDefault();

    if(firstName.value.length > 0) {
        firstNameError.style.display = "none";
    }
    else {
        firstNameError.style.display = "block";

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

    if (validatecardnumber(cardnumber.value) === true) {
        cardnumberError.style.display = "none";
    } else {
        cardnumberError.style.display ="block";
    }

    if(cardholdername.value.length > 0) {
        cardholdernameError.style.display = "none";
    }
    else {
        cardholdernameError.style.display = "block";

    }

    if (validateexpiredate(expiredate.value) === true) {
        expiredateError.style.display = "none";
    } else {
        expiredateError.style.display ="block";
    }

    if (validatecvv(cvv.value) === true) {
        cvvError.style.display = "none";
    } else {
        cvvError.style.display ="block";
    }
    

    


}

console.log("hey");

form.addEventListener("submit", validateForm);



function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function validatecardnumber(cardnumber) {
    const regEx = /^\d+$/;
    const patternMatches = regEx.test(cardnumber);
    return patternMatches;
}

function validateexpiredate(expiredate) {
    const regEx = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
    const patternMatches = regEx.test(expiredate);
    return patternMatches;
}

function validatecvv(cvv) {
    const regEx = /^\d+$/;
    const patternMatches = regEx.test(cvv);
    return patternMatches;
}




