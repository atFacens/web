const txtId = document.getElementById("id")
const txtName = document.getElementById("name")
const txtUsername = document.getElementById("username")
const txtEmail = document.getElementById("email")
const btnCadastrar = document.getElementById("btnCadastrar")

async function cadastrarUser(event) {
    event.preventDefault()
    let response = await fetch('https://jsonplaceholder.typicode.com/users',
      {
        method: 'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          'name': txtName.value,
          'username': txtUsername.value,
          'email': txtEmail.value
        })
      })
      
      if(response.status == 201) { // 201 = sucesso, para inserção
        let data = await response.json()
        let id = data['id']
        let username = data['username']
        alert('Usuário inserido: ' + id + " - " + username)
      } else {
        alert('Erro na criação do usuário')
      }

}

btnCadastrar.addEventListener('click', cadastrarUser)