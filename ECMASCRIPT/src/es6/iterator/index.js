//estos iteradores son más flexibles de trabajar, dan mucho más control en el codigo

//ejem: con for()
for (let index = 0; index < 10; index++) {
    console.log(index);
}

//iterador
function crearIterador(carrito) {
    //inicializamos el indice
    let i = 0;
    return {
        siguiente: () => {
            let fin = (i >= carrito.length)
            let valor = !fin ? carrito[i++] : undefined
            return {
                fin: fin,
                valor: valor
            }
        }
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3','Producto 4']

const recorrerCarrito = crearIterador(carrito)
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());

