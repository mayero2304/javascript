/* Extraer datos de una funcion */
// viejo metodo
function reservacion(isCompleto = false, opciones) {
    opciones = opciones || {};

    let metodo = opciones.metodoPago,
        cantidad = opciones.cantidad,
        dias = opciones.dias
    console.log(metodo, cantidad, dias)
}
//
reservacion(true, { metodoPago: 'tarjeta de credito', cantidad: 2000, dias: 3 })

//nueva forma
function reservacion(isCompleto, opciones) {
    let { metodoPago, cantidad, dias } = opciones;

    console.log(metodoPago, cantidad, dias)
}
reservacion(true,
    {
        metodoPago: 'tarjeta de credito',
        cantidad: 2000,
        dias: 3
    })

//datos por default para extraer en la funcion
function reservacion(isCompleto, { metodoPago = "efectivo", cantidad = 0, dias = 0 } = {}) {
    if (isCompleto) {
        console.log("Proceder a reservar...")
        console.log(`para ${cantidad} personas por ${dias} dias y pago con ${metodoPago}`)
    } else {
        console.log("Abandonar...")
        console.log(metodoPago, cantidad, dias)
    }
}
reservacion(false, {
    // metodoPago: "Nequi",
    // cantidad: 5,
    // dias: 3
})