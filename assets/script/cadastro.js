const form = document.getElementById("form");
const username = document.getElementById("username")
const petname = document.getElementById("petname")
const petage = document.getElementById("petage")
const cep = document.getElementById("cep")
const phone= document.getElementById("phone")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})
username.addEventListener("blur", () => {
  checkInputUsername();
})

petname.addEventListener("blur", () => {
  checkInputPetname();
  })
cep.addEventListener("blur", () => {

    checkInputCep();
  })


email.addEventListener("blur", () => {
  checkInputEmail();
})



function checkInputUsername(){
  const usernameValue = username.value;

  if(usernameValue === ""){
    errorInput(username, "Preencha um o seu nome!")
  }else{
    const formItem = username.parentElement;
    formItem.className = "form-content"
  }

}
function checkInputPetname(){
  const petnameValue = petname.value;

  if(petnameValue === ""){
    errorInput(username, "Preencha o nome do seu pet!")
  }else{
    const formItem = petname.parentElement;
    formItem.className = "form-content"
  }

}
  function checkInputCep(){
    const cepValue = cep.value;
  
    if(cepValue === ""){
      errorInput(cep, "Preencha o seu cep!")
    }else{
      const formItem = cep.parentElement;
      formItem.className = "form-content"
    }
  
  }

function checkInputEmail(){
  const emailValue = email.value;

  if(emailValue === ""){
    errorInput(email, "O email é obrigatório.")
  }else{
    const formItem = email.parentElement;
    formItem.className = "form-content"
  }


}

function checkInputPassword(){
  const passwordValue = password.value;

  if(passwordValue === ""){
    errorInput(password, "A senha é obrigatória.")
  }else if(passwordValue.length < 8){
    errorInput(password, "A senha precisa ter no mínimo 8 caracteres.")
  }else{
    const formItem = password.parentElement;
    formItem.className = "form-content"
  }


}

function checkInputPasswordConfirmation(){
  const passwordValue = password.value;
  const confirmationPasswordValue = passwordConfirmation.value;

  if(confirmationPasswordValue === ""){
    errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.")
  }else if(confirmationPasswordValue !== passwordValue){
    errorInput(passwordConfirmation, "As senhas não são iguais.")
  }else{
    const formItem = passwordConfirmation.parentElement;
    formItem.className = "form-content"
  }

}

function checkForm(){
  checkInputUsername();
  checkInputPetname()
  checkInputCep()
  checkInputEmail();
  checkInputPassword();
  checkInputPasswordConfirmation();

  const formItems = form.querySelectorAll(".form-content")

  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
  });

  if(isValid){
    alert("CADASTRADO COM SUCESSO!")
  }

}


function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"

}