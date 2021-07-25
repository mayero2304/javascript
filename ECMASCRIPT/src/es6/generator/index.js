// es una funcion que retorna un iterador

// el asterisco delante del nombre de la funcion le indica a js que vas a usar o crear un generador
//yield <- palabra reservada para usarse en los generadores
//yield type cualquier tipo de dato primivo de js
function* crearGenerador(params) {
    yield 1;
    yield 'Nombre';
    yield 3 + 3;
    yield true;
}

const iterador = crearGenerador();

console.log(iterador.next().value);  //value para acceder a los valores del yield
console.log(iterador.next().value);  //value para acceder a los valores del yield
console.log(iterador.next().value);  //value para acceder a los valores del yield
console.log(iterador.next().value);  //value para acceder a los valores del yield
console.log(iterador.next().value);  //value para acceder a los valores del yield
console.log(iterador.next().value);  //value para acceder a los valores del yield


/// generador que va a recorrer un arreglo
function *nuevoGenarador(carrito){
 for (let i = 0; i < carrito.length; i++) {
     yield carrito[i];
 }
}
/* crear el carrito */
const carrito = ['Producto 1', 'Producto 2', 'Producto 3','Producto 4']
/* recorrer el iterator */
let iterador = nuevoGenarador(carrito)

console.log(iterador.next().value)
console.log(iterador.next().value)
console.log(iterador.next().done)
console.log(iterador.next().value)
console.log(iterador.next().value)
console.log(iterador.next().done)
