async function buscar()  {
    let resp = await fetch('https://jsonplaceholder.typicode.com/posts/2')
    let data = await resp.json()
    console.log(data);
}

buscar();