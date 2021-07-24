// destructurin Objects
const cliente = {
    nombre: 'Mauricio',
    tipo: 'Premium'
}

let { nombre, tipo } = cliente
console.log(nombre, tipo)

/* acceder a un objeto ó array dentro de un objeto */
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
    }
}
let { datos: { tipo_contacto } } = cliente
tipo_contacto.forEach(element => {
    console.log(element.id)
});
console.log(tipo_contacto)


/* extraer valores por default */
const cliente = {
    nombre: 'Mauricio',
    // tipo: 'Premium',
    // saldo: 4000
}
let { nombre, tipo = 'Basico', saldo = 0 } = cliente;
console.log(nombre)
console.log(tipo)
console.log(saldo)

