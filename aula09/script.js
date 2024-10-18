const btnPesquisar = document.getElementById('btn_pesquisar')
const txtCodigo = document.getElementById('txt_codigo')
const txtSaida = document.getElementById('txt_saida')

btnPesquisar.addEventListener('click', pesquisar)

async function pesquisar() {
    const url = 'https://swapi.dev/api/people/' + txtCodigo.value;
    
    fetch(url,{
        headers:{
            'Content-Type': 'application/json'
        }
    }).then((resposta) => {
        if(resposta.status == 404) {
            txtSaida.value = 'Pessoa não encontrada';
        } else {
            resposta.json().then((dados)=>{
                let saida = dados['name'] + '\n' + dados['height'] + '\n' + dados['eye_color']
                txtSaida.value = saida
            })
        }
    })
    
    
}