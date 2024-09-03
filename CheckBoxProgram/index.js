const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const submitBtn = document.getElementById("submitBtn");

const checkBoxResult = document.getElementById("checkBoxResult");
const radioResult = document.getElementById("radioResult");

submitBtn.onclick = submitBtnAction;

function submitBtnAction() {
    if(myCheckBox.checked) {
        checkBoxResult.textContent = `You checked on Subscribe! 😈`
    } else {
        checkBoxResult.textContent = `You did NOT choose to Subscribe! 😩`
    }

    if(visaBtn.checked) {
        radioResult.textContent = `You selected Visa payment method 💳`
    } else if(masterCardBtn.checked) {
        radioResult.textContent = `You selected MasterCard payment method 💳`
    } else if(payPalBtn.checked) {
        radioResult.textContent = `You selected PayPal payment method 💳`
    } else {
        radioResult.textContent = `You did NOT select any payment method 🤨`
    }
}
