//permite crear una lista de valores
// es similar a un array solo que no va a tener duplicados al contrario de los array que pueden tener duplicados

//ejem: array 
let arrayNormal = ['Camisa', 'Camisa', 'Disco #1', 'Disco #1']
console.log(arrayNormal)

//ejem: Set()
let carrito = new Set()
console.log(carrito)
carrito.add('Camisa')
carrito.add('Disco # 1')
carrito.add('Disco # 1') //<-- este item lo omite ya que esta duplicado
carrito.add('Disco # 2')
carrito.add('Disco # 3')

console.log(carrito);
console.log(carrito.size);

/* comprobar que algo exista en el Set() */
let carrito = new Set()
carrito.add('Camisa')
carrito.add('Disco # 1')
carrito.add('Disco # 2')
carrito.add('Disco # 3')

console.log(carrito.has('Camisa'))

/* Eliminar algo del Set() */
let carrito = new Set()
carrito.add('Camisa')
carrito.add('Disco # 1')
carrito.add('Disco # 2')
carrito.add('Disco # 3')

carrito.delete('Camisa')
console.log(carrito)

/* Vaciar o limpiar el Set() */
let carrito = new Set()
carrito.add('Camisa')
carrito.add('Disco # 1')
carrito.add('Disco # 2')
carrito.add('Disco # 3')

carrito.clear()
console.log(carrito)

/* inicializarlo con datos */
let numeros = new Set([7,1,2,3,4,5,6,7,1])
console.log(numeros)

/* los Set() a diferencia de los Symbol() si se pueden iterar */
let carrito = new Set()
carrito.add('Camisa')
carrito.add('Disco # 1')
carrito.add('Disco # 2')
carrito.add('Disco # 3')

carrito.forEach((producto,index) => console.log(index, producto)) //<-- el index es igual ya que no tienen clave

/* Convertir un Set() a un Array */
let carrito = new Set()
carrito.add('Camisa')
carrito.add('Disco # 1')
carrito.add('Disco # 2')
carrito.add('Disco # 3')

const arregloCarrito = [...carrito]
console.log(carrito)
console.log(arregloCarrito)