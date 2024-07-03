// obtém os botões do DOM
let btnMudarCor = document.getElementById("btnMudarCor");
let btnVoltarCor = document.getElementById("btnVoltarCor")

//Adiciona evento de clique ao botão 'Mudar cor de fundo'

btnMudarCor.addEventListener("click", function() {
    document.body.style.background = "#228B22";
});

btnVoltarCor.addEventListener("click", function() {
    document.body.style.background = "";
})