const form = document.querySelector(".form");
const dismissButton = document.querySelector(".dismiss-btn");

// Handle form submission
const handleSubmit = (e) => {
    e.preventDefault();

    //extract form infos
    const formData = new FormData(e.target);
    const {email} = Object.fromEntries(formData);


    // DOM references
    const emailErrorMessageElement = document.querySelector(".email-error");
    const inputUserEmail = document.querySelector(".input-email")

    const inputError = document.querySelector("#email");
    const firstPage = document.querySelector(".first-page");
    const successPage = document.querySelector(".success-page");

    //validate emails
    const emailErrorMessage = validateEmail(email);


    if(emailErrorMessage) {
        //for error message
        emailErrorMessageElement.innerText = emailErrorMessage;
        inputError.classList.add("error");
    } else {
        //clear error message
        emailErrorMessageElement.innerText = "";
        inputError.classList.remove("error");

        //show submitted email in success page
        inputUserEmail.textContent = email;

        //toggles to change pages
        firstPage.classList.add("first-active");
        successPage.classList.add("active-success");
    }
}

//validating email
function validateEmail(email) {
    if(!email) return "Valid email required";

    const emailIsValid =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailIsValid.test(email)) {
        return "Valid email required";
    }

    return "";
}

//initializing the handle submit function
form.addEventListener("submit", handleSubmit);

// Handle dismiss submission
const handleDismiss =  () => {
    const firstPage = document.querySelector(".first-page");
    const successPage = document.querySelector(".success-page");

    // change toggles back
    successPage.classList.remove("active-success");
    firstPage.classList.remove("first-active");

    //reset the form
    form.reset();
};

//initializing the handle dismiss function
dismissButton.addEventListener("click", handleDismiss);