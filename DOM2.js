const form  = document.getElementById('main-form');

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return alert(message);
	}
	return true;
}

function validateConfirm(input, confirmInput, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	
  if(input.value !== confirmInput.value) {
    return alert(invalidMsg)
  }
	
	return true;
}

form.addEventListener('submit', (event) => {
  // stop form submission
  event.preventDefault();
  let usernameValid = hasValue(form.elements['username'], "Isi Username Terlebih Dahulu")  
  let passwordValid = validateConfirm(form.elements['password'], form.elements['confirmpassword'], "Isi Password Terlebih Dahulu", "Invalid Confirm Password")
  let emailValid = validateConfirm(form.elements['email'], form.elements['confirmemail'],  "Isi Email Terlebih Dahulu", "Invalid Confirm Email")

  if(usernameValid && passwordValid && emailValid) {
    alert('Registration Successfull');
    window.location = "DOM2.html"
  }
});