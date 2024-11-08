console.log("Aspas");

nome = 'Emerson Paduan'
nome = `Emerson 
Paduan`

numero = 10

console.log('Nome: ' + nome + ' numero:  ' + numero);

let texto = `Nome: ${nome} 
numero: ${numero}`;
console.log(texto);


// () => {
//     console.log('params');
// }

// exibir('boa noite');

// fetch().then(
//     () => {
//         console.log('params');
//     }
// );

const mypromese = new Promise(
    (resolve, reject) =>{
        setTimeout(()=>{
            resolve("Deu certo!")
        }, 3000
        )
    }
)

const mypromese2 = new Promise(
    (resolve, reject) =>{
        setTimeout(()=>{
            reject("Deu errado!")
        }, 3000
        )
    }
)

mypromese.then(
    (msg)=>{
        console.log(msg)
    }
)

mypromese2.then(
    (msg)=>{
        console.log(msg)
    }
).catch((error)=>{
    console.log(error)
})
