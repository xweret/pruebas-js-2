const arrayProductos = [
    {
        id:1,
        producto: "remera",
        precio: 50,
    },
    {
        id:2,
        producto: "jean",
        precio: 130,
    }
    ,
    {
        id:2,
        producto: "zapatilla",
        precio: 520,
    }
]
let main = document.createElement('main')
document.body.appendChild(main)


for (let i = 0; i<arrayProductos.length; i++){
    createCards(arrayProductos[i].id, arrayProductos[i].producto, arrayProductos[i].precio)
}
function createCards(id,producto, precio) {
    let div = document.createElement('div')
    let h3 = document.createElement('h3')
    h3.innerText = producto
    let p = document.createElement('p')
    p.innerText = precio
    let btn = document.createElement('button')
    div.append(h3, p , btn)
}
