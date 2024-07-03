//Obtém o elemneto do DOM com o ID 'idNome'
let nome = document.getElementById("idNome");

function mudar(event) {
    // Previne um comportamento padrão do evento
    event.preventDefault();

        
    document.getElementById("titulo").innerHTML = nome.value;

    nome.value = " ";
    
}
let novo = document.getElementById("idNovo");

function mudar2(event) {
    event.preventDefault();

        
    document.getElementById("subtitulo").innerHTML = novo.value;

    novo.value = " ";
}