//validating the card number ,cvv, phone number
const phoneNumberInput = document.getElementById('phoneNumber');
const cardNumberInput = document.getElementById('cardNumber');
const cvvInput = document.getElementById('cvv');
const phoneNumberError = document.getElementById('phoneNumberError');
const cardNumberError = document.getElementById('cardNumberError');
const cvvError = document.getElementById('cvvError');


phoneNumberInput.addEventListener('input', validatePhoneNumber);
cardNumberInput.addEventListener('input', validateCardNumber);
cvvInput.addEventListener('input', validateCVV);

function validatePhoneNumber() {
    const value = phoneNumberInput.value.trim(); //trim element is used to remove the whitespaces from both the beggining and end when considering it to be a correct val
    if (!isInteger(value)) { //calling the function isInteger
        showError(phoneNumberError, 'Please Enter a valid phone number❗');
    } else {
        clearError(phoneNumberError);
    }
}

function validateCardNumber() {
    const value = cardNumberInput.value.trim();
    if (!isInteger(value)) { 
        showError(cardNumberError, 'Please enter a valid card number❗');
        //cardNumberError.textContent = 'Please enter a valid card number❗';
    } else {
        clearError(cardNumberError);
    }
}

function validateCVV() {
    const value = cvvInput.value.trim();
    if (!isInteger(value)) {
        showError(cvvError, 'Please enter a valid CVV❗');
    } else {
        clearError(cvvError);
    }
}

function isInteger(value) {  //isInteger func
    const integerRegex = /^\d*$/; // '/^'-indicates the begging while '$/' indicates the end. '\d*' means it's a number between 0-9.
    return integerRegex.test(value); //Using the test method we're checking whether it fulfils the above regualtion (checking whether they are int)
}

function showError(element, message) {
    element.textContent = message; //showing the error msg 
}

function clearError(element) {
    element.textContent = ''; //clearing the error msg
}

//validation (Email)
const emailInput = document.getElementById('email');
      const emailError = document.getElementById('Error');

      emailInput.addEventListener('input', function() {
          if (!emailInput.validity.valid && emailInput.value != '') {
              // When the user enters a invalid email address it will pop out an error
              emailError.textContent = 'Please enter a valid email address❗';

          } else {
              // if the email is correct it'll remove the error message 
              emailError.textContent = '';
          }
      });

//Clearning the information from the relavent fields
function clearPayment() {
  document.getElementById('cardNumber').value = ''; // Clear card number
  document.getElementById('cvv').value = ''; // Clear CVV
  document.getElementById('cardholder-name').value = ''; // Clear card holder name
  document.getElementById('cardNumberError').innerText = ''; // Clear card number error message
  document.getElementById('date').value = ''; // Clear date
  document.getElementById('cvvError').innerText = ''; // Clear CVV error message
}

function clearAdress() {
  document.getElementById('address-1').value = '';
  document.getElementById('adress-2').value = ''; 
  document.getElementById('adress-3').value = ''; 
  document.getElementById('town').innerText = ''; 
  document.getElementById('state-country').value = ''; 
  document.getElementById('zip').innerText = ''; 
  document.getElementById('country').innerText = ''; 
}
function clearContact() {
  document.getElementById('name').value = ''; 
  document.getElementById('surname').value = ''; 
  document.getElementById('phoneNumber').value = '';
  document.getElementById('phoneNumberError').innerText = '';
  document.getElementById('email').value = ''; 
  document.getElementById('Error').innerText = '';

 
}

function resetall(){
    clearPayment();
    clearAdress();
    clearContact();
}