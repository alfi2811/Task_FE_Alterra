const form  = document.getElementById('contact-form');

function hasValue(input, message) {
  let pClass = document.querySelectorAll(`.${input.id}.invalid-feedback`);
  let idInput = document.getElementById(input.id);
  if (input.value.trim() === "") {
    console.log("input: ", input.id)
    for (i = 0; i < pClass.length; i++) {
      pClass[i].style.display = "block";
      pClass[i].innerHTML = message;
    }
    idInput.classList.add("is-invalid");
    
		return false;
	} else {
    for (i = 0; i < pClass.length; i++) {
      pClass[i].style.display = "none";
    }    
    idInput.classList.remove("is-invalid");
    return true;
  }
}

function validateConfirm(input, confirmInput, requiredMsg, invalidMsg) {	
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	
  if(input.value !== confirmInput.value) {
    return alert(invalidMsg)
  }
	
	return true;
}

form.addEventListener('submit', (event) => {  
  event.preventDefault();
  console.log("nation",form.elements['nation'].value)
  let fullnameValid = hasValue(form.elements['fullname'], "Full name cannot be empty")  
  let emailValid = hasValue(form.elements['email'], "Email address cannot be empty")    
  let phoneNumValid = hasValue(form.elements['phone'], "Phone number cannot be empty")

  if(fullnameValid && phoneNumValid && emailValid) {
    alert('Registration Successfull');
    let formData = {
      'fullname': form.elements['fullname'].value,
      'email': form.elements['email'].value,
      'phone': form.elements['phone'].value,
      'nation': form.elements['nation'].value,
      'message': form.elements['message'].value,
    }

    sessionStorage.data = JSON.stringify(formData);
    window.location = "review_message.html";
  }
});