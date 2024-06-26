let txt = "Estão chegando as provas";

//Conta a quantidade de caracteres(Espaço conta, e a contagem começa no 0)
console.log(txt.length);

//Primeira opção com "as" na string
console.log(txt.indexOf("as"));

//Ultima opção com "as" na string
console.log(txt.lastIndexOf("as"));

//Imprime de uma posição até a outra
console.log(txt.slice(0, 5));

//Substitui um valor ou texto por outro
console.log(txt.replace("provas", "avaliações"));

//Deixar maiúculo
console.log(txt.toUpperCase());

//Deixar minúsculo
console.log(txt.toLowerCase());