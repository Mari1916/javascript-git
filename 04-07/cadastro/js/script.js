let form = document.querySelector("#cadastroForm")
let cadastroList = document.querySelector("#cadastroList")
//obtem os valores dos campos de entrada
let nome = document.querySelector("#nome")
let email = document.querySelector("#email")

//Adiciona um evento de formulário
//submit
form.addEventListener("submit", function(event) {

    event.preventDefault();

    console.log(nome.value)
    console.log(email.value)

    nome.value = " ";
    email.value = " ";
    })