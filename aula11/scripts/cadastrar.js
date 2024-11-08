const id = document.getElementById("id")
const name = document.getElementById("name")
const username = document.getElementById("username")
const email = document.getElementById("email")
const btnCadastrar = document.getElementById("btnCadastrar")

function cadastrarUser(event) {
    event.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(json => console.log(json))
}

btnCadastrar.addEventListener('click', cadastrarUser)