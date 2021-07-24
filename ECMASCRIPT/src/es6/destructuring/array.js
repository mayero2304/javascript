// destructuring Array
const ciudades = ['Medellin', 'Bogota', 'Cartagena', 'Monteria', 'Santa Marta']
const [primeraCiudad, segundaCiudad] = ciudades //extrae los 2 primeros elementos
console.log(primeraCiudad)
console.log(segundaCiudad)

//extraer elemento especifico
const ciudades = ['Medellin', 'Bogota', 'Cartagena', 'Monteria', 'Santa Marta']
const [, , , monteria] = ciudades
console.log(monteria)

//extraer con profundidad
const cliente = {
    nombre: 'Mauricio',
    tipo: 'Premium',
    datos: {
        ubicacion: {
            ciudad: 'Cartagena',
            pais: 'Colombia'
        },
        cuenta: {
            desde: '10-12-2012',
            saldo: 4000
        },
        tipo_contacto: [
            {
                id: "1",
                type: "Cliente"
            },
            {
                id: "2",
                type: "Proveedor"
            },
            {
                id: "3",
                type: "Empleado"
            }
        ]
    },
    movimientos: ['12-03-2018','13-04-2019','15-05-2020'],
}
let {nombre, movimientos:[,segundaFecha], datos:{tipo_contacto:[,,tercerObjeto]}} = cliente
console.log(nombre)
console.log(segundaFecha)
console.log(tercerObjeto.type)
