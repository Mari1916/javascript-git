const button = document.querySelector("button");
const inputNota = document.querySelector("#nota");

//Criando uma função
button.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(inputNota.value)

    //logica

    if(inputNota.value >=7){
         alert("Você está aprovado")
}else {
        alert("Você esta reprovado")
    }
});