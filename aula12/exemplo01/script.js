const mypromese = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Boa noite! Funcionou.");
    }, 3000)
})

mypromese.then((mensagem)=>{
    console.log(mensagem);
} )

const myerror = new Promise((resolve, reject)=>{
    setTimeout(() => {
        reject(new Error("Algo deu errado..."))
    }, 3000);
})

myerror.then((mensagem)=>{
    console.log(mensagem);
}).catch((error) => {
    console.error(error);
})