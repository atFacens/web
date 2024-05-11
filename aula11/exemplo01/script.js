
const botao = document.getElementById('mybtn');
const paragrafo = document.getElementById('mytext')

function mensagem() {
    console.log('Botão foi clicado');
}


botao.addEventListener("click", mensagem);

paragrafo.addEventListener("mouseenter", () => {
    paragrafo.style.color = "red"
});

paragrafo.addEventListener("mouseleave", () => {
    paragrafo.style.color = "black"
});

const formulario = document.getElementById('myform');
const txtnome = document.getElementById('nome');

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    if(txtnome.value === ""){
        alert("O campo Nome é obrigatório");
        // txtnome.style.color = "red"
    } else {
        let vetor = [
            "um", "dois", "três", 4, true
        ]

        vetor.forEach((value, index) => {
            console.log(index, value);
        });
    }
});

