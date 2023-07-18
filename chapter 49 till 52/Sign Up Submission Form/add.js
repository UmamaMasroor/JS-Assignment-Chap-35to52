let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let button = document.querySelector("button");

button.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(email.value);
    console.log(password.value);
  });