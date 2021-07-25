// al igual que los Set() son listas ordenadas solo que los Maps almacenan los valores como clave/valor
// pueden almacenar cualquir tipo

let cliente = new Map();
//almacenar sus datos como clave/valor atravez del metodo set()
cliente.set('nombre', 'Mauricio')
cliente.set('tipo', 'Premium')
cliente.set('saldo', 3000)

console.log(cliente)
//acceder a los valores
console.log(cliente.get('nombre'))
console.log(cliente.get('tipo'))
console.log(cliente.get('saldo'))

/* metodos */
//tamaño con size
let cliente = new Map();
cliente.set('nombre', 'Mauricio')
cliente.set('tipo', 'Premium')
cliente.set('saldo', 3000)
console.log(cliente.size)

//comprobar si existe dentro del map con has('clave')
let cliente = new Map();
cliente.set('nombre', 'Mauricio')
cliente.set('tipo', 'Premium')
cliente.set('saldo', 3000)
console.log(cliente.has('tipo'))

//eliminar propiedad del map con delete('clave')
let cliente = new Map();
cliente.set('nombre', 'Mauricio')
cliente.set('tipo', 'Premium')
cliente.set('saldo', 3000)
cliente.delete('tipo')
console.log(cliente)

//vaciar o limpiar el Map() con clear()
let cliente = new Map();
cliente.set('nombre', 'Mauricio')
cliente.set('tipo', 'Premium')
cliente.set('saldo', 3000)
cliente.clear('tipo')
console.log(cliente)

//pasar propiedades por default a un Map()
//el Map al igual que el Set() evita duplicado y utiliza el ultimo valor
const paciente = new Map(
    [['nombre', 'paciente'],
    ['habitacion', 'No definido']]
);
paciente.set('nombre', 'Mauricio')
paciente.set('habitacion', 400)
paciente.set('habitacion', 500)

console.log(paciente)


/* se puden recorrer con un for */
const paciente = new Map(
    [['nombre', 'paciente'],
    ['habitacion', 'No definido']]
);
paciente.set('nombre', 'Mauricio')
paciente.set('habitacion', 400)

paciente.forEach((datos, index) => console.log(index, datos)) // el index es el mismo que el valor


let saludo = String("hola")
console.log(typeof saludo);
