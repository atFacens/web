const id = document.getElementById('id')
const name = document.getElementById('name')
const username = document.getElementById('username')
const email = document.getElementById('email')
const find_id = document.getElementById('find_id')
const btnFindId = document.getElementById('btnFindId')
const btnSalvar = document.getElementById('btnSalvar')
const btnListar = document.getElementById('btnListar')
const listaUsers = document.getElementById('listaUsers')

async function findById() {
    let idNumber = find_id.value
    let resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${idNumber}`)
    if(resposta.status == 200) {
        let dados = await resposta.json()
        id.value = dados['id']
        name.value = dados['name']
        username.value = dados['username']
        email.value = dados['email']
    } else {
        id.value = 'Não encontrado'
        name.value = ''
        username.value = ''
        email.value = ''
    }
}

async function saveUser() {
    let resposta = await fetch(`https://jsonplaceholder.typicode.com/users`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            'id':id.value,
            'name': name.value,
            'username': username.value,
            'email': email.value
        })
    })
    console.log(resposta)
}

async function listar() {
    let resposta = await fetch(`https://jsonplaceholder.typicode.com/users`)
    if(resposta.status == 200) {
        let dados = await resposta.json()
        dados.map(user => {
            let li = document.createElement('li')
            let nameUser = document.createElement('span')
            nameUser.innerHTML = `${user.name}`

            li.appendChild(nameUser)
            listaUsers.appendChild(li)
        })
    } else {
        console.log('ERRO');
    }
}

btnFindId.addEventListener('click', findById)
btnSalvar.addEventListener('click', saveUser)
btnListar.addEventListener('click', listar)
