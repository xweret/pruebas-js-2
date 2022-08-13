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

// function crearEtiqueta(etiqueta, texto){
//   let nuevaEtiqueta = document.createElement(etiqueta)
//   let nuevaTexto = document.createTextNode(texto)

//   nuevaEtiqueta.appendChild(nuevaTexto)
//   document.body.appendChild(nuevaEtiqueta)
  
//   }
// crearEtiqueta("p","soy un parrafo")
// crearEtiqueta("h3", "soy un h3")

// // let contenedor = document.querySelector("#contenedor")

// // const crearInterfaz = (etiqueta, texto) => {
// //   let nuevaEtiqueta = document.createElement(etiqueta)
// //   let nuevoTexto = 
// //   nuevaEtiqueta.innerText = texto
// //   contenedor.appendChild(nuevaEtiqueta)
// // }
// // crearInterfaz('h1', 'textoz')