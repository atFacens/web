const txtId = document.getElementById("id")
const txtName = document.getElementById("name")
const txtUsername = document.getElementById("username")
const txtEmail = document.getElementById("email")
const btnCadastrar = document.getElementById("btnCadastrar")

async function cadastrarUser(event) {
    event.preventDefault()
    let response = await fetch('https://jsonplaceholder.typicode.com/users/' + id.value)

    if(response.status == 200) { // 200 = OK, sucesso
      let data = await response.json()

      txtName.value = data['name']
      txtUsername.value = data['username']
      txtEmail.value = data['email']

    } else { // 404 = not found 
      alert('Registro não encontrado')
      txtName.value = ""
      txtUsername.value = ""
      txtEmail.value = ""
    }
      
}

btnCadastrar.addEventListener('click', cadastrarUser)