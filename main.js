const submitBtn = document.querySelector(".submit-btn");
const emailForm = document.querySelector(".email-form");
const emailInput = document.querySelector(".email-input");

submitBtn.addEventListener("click", event => {
    emailForm.classList.add("invalid");
});

emailInput.addEventListener("click", event => {
    emailForm.classList.remove("invalid");
});