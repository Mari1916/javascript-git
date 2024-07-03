// obtem o botão e a imagem do Dom

const bntMoverImagem = document.getElementById("btnMoverImagem")
let imagem = document.getElementById("imagem");

//Variável para rastrear o estado atual da posição da imagem
let isMoved = false

//adiciona um evento de clique ao botão
btnMoverImagem.addEventListener("click", function() {
    if (isMoved) {
        imagem.style.left = "0px";//move para a posição inicial
    }else {
        imagem.style.left = "500px"; //move para a dreita
    }
    //alterna o estado da posição da imagem
    isMoved = !isMoved;
});