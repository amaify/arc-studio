let formInput = document.querySelectorAll(
	".contact-form__group input, textarea"
);
let submitBtn = document.querySelector(".contact-form__button");
let error = document.querySelectorAll(".contact-form__group--error");
let inputValue;

document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("message").addEventListener("blur", validateMessage);

function validateName() {
	const name = document.getElementById("name");
	const re = /^[a-zA-Z].*[\s\.]*$/g;

	if (!re.test(name.value)) {
		error[0].innerHTML = "Can't be empty";
		name.classList.add("form-error");
	} else {
		error[0].innerHTML = "";
		name.classList.remove("form-error");
	}
}

function validateEmail() {
	const email = document.getElementById("email");
	const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

	if (!re.test(email.value)) {
		if (email.value === "") {
			error[1].innerHTML = "Can't be empty";
			email.classList.add("form-error");
		} else {
			error[1].innerHTML = "Invalid Format";
			email.classList.add("form-error");
		}
	} else {
		error[1].innerHTML = "";
		email.classList.remove("form-error");
	}
}

function validateMessage() {
	const message = document.getElementById("message");
	const re = /^[a-zA-Z].*[\s\.]*$/g;

	if (!re.test(message.value)) {
		error[2].innerHTML = "Can't be empty";
		message.classList.add("form-error");
	} else {
		error[2].innerHTML = "";
		message.classList.remove("form-error");
	}
}

function clearForm() {
	for (let i = 0; i < formInput.length; i++) {
		formInput[i].value = "";
	}
}

submitBtn.addEventListener("click", (e) => {
	e.preventDefault();

	for (let i = 0; i < formInput.length; i++) {
		if (formInput[i].value === "") {
			validateName();
			validateEmail();
			validateMessage();
			console.log("empty");
		} else {
			alert("Form Submitted!");
		}
	}
	clearForm();
});

window.onload = clearForm();
