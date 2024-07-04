//Obtém elementos do DOM
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");

//Botões
const bntSomar = document.getElementById("btnSomar");
const btnSub = document.getElementById("bntSub");
const btnMult = document.getElementById("bntMult");
const btnDiv = document.getElementById("bntDiv")

//Botão resultados
const resultado = document.getElementById("resultado");

//Adiciona um evento de clique no botão: SOMA
bntSomar.addEventListener("click", function () {
     let soma = Number(valor1.value) + Number(valor2.value);

    //Exibe o resultado na tela
    resultado.textContent = soma;

    //Zera o resultado
    valor1.value = " ";
    valor2.value = " ";

    setTimeout(function() {
        resultado.innerHTML = 0;
    }, 2000) 
})

//Adiciona um evento de clique no botão: SUBTRAÇÃO
btnSub.addEventListener("click", function () {
    let sub = Number(valor1.value) - Number(valor2.value);

   //Exibe o resultado na tela
   resultado.textContent = sub;

   //Zera o resultado
   valor1.value = " ";
   valor2.value = " ";

   setTimeout(function() {
       resultado.innerHTML = 0;
   }, 2000) 
})

//Adiciona um evento de clique no botão: MULTIPLICAÇÃO
btnMult.addEventListener("click", function () {
    let mult = Number(valor1.value) * Number(valor2.value);

   //Exibe o resultado na tela
   resultado.textContent = mult;

   //Zera o resultado
   valor1.value = " ";
   valor2.value = " ";

   setTimeout(function() {
       resultado.innerHTML = 0;
   }, 2000) 
})

//Adiciona um evento de clique no botão: DIVISÃO
btnDiv.addEventListener("click", function () {
    let div = Number(valor1.value) / Number(valor2.value);

   //Exibe o resultado na tela
   resultado.textContent = div;

   //Zera o resultado
   valor1.value = " ";
   valor2.value = " ";

   setTimeout(function() {
       resultado.innerHTML = 0;
   }, 2000) 
})