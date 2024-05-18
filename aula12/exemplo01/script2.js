fetch('https://jsonplaceholder.typicode.com/posts/2')
.then(resposta => resposta.json())
.then(dados => console.log(dados))
.catch(erro => console.error('Erro', erro))