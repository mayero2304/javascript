//nuevo primitivo para versiones actuales de js

const varSimbolo = Symbol();
console.log(typeof varSimbolo)

const varSimbolo2 = Symbol('Descripcion aqui')
console.log(varSimbolo2)

//cada Symbol() es distinto
console.log(Symbol() === Symbol())

/*  */
let nombre = Symbol()
let apellido = Symbol()
let persona = {}
persona.nombre = "Mauricio", //esto no agrega el nombre del simbolo
persona.apellido = "Ciro"    //esto no agrega el apellido del simbolo
console.log(persona)

/* agregar Simbol() a un Object debe ser entre corchetes*/
let nombre = Symbol()
let apellido = Symbol()
let persona = {}
persona.nombre = "Mauricio"
persona[nombre] = "Mauricio"  //esto si agrega el symbol
persona[apellido] = "Ciro"    
persona.saldo = 100
persona.cliente = "Normal"
console.log(persona)
console.log(persona.nombre)
console.log(persona[apellido])

/* los symbol se usan como propiedad privada */
let nombre = Symbol()
let apellido = Symbol()
let persona = {}
persona.nombre = "Mauricio"
persona[nombre] = "Mauricio symbol"  
persona[apellido] = "Ciro symbol"    
persona.saldo = 100
persona.cliente = "Normal"
// los symbols no pueden ser iterados
for( let i in persona){
    console.log(` ${i} : ${persona[i]}`)
}