/* toString sirve para debugear y que esten llegando bien los datos o para ver el cuerpo de una funcion
   ejemplo para revisar alguna libreria descargada de internet y no tines idea de todo lo que le puedes
   pasar a esa funcion 
*/
function sumar(a, b) {
    // suma 2 numeros
    return a + b;
}

//con toString() en la funcion puede ver la representación de tu función como un string
//pero no sucedo lo mismo en un Oject
console.log(sumar.toString())

/* toString() aplicado en object */
function Automovil(modelo, color) {
    this.modelo = modelo;
    this.color = color;
}
//en un object para ver la representacion debes meterte con los prototypes y reescribir el toString()
//ejemplo crear una funcion y reescribir el toString()
Automovil.prototype.toString = function autoString() {
    const datos = `Auto: ${this.modelo} y color ${this.color}`;
    return datos;
}

const auto = new Automovil('Camaro', 'Negro');
console.log(auto.toString());