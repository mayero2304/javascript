/* caracteristicas es10 */

/* 1- aplanar arrays con flat() */
let array = [1,2,3,[1,2,3, [1,2,3]]];
console.log(array.flat(1)) /* flat recive un entero para la profundidad */

/* 2- flatMap() */
let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]))

/* 3- eliminar espacios en blanco con 
  trimStart() al inincio
  trimEnd() al final
*/ 
let hello = '        hello world'
console.log(hello)
console.log(hello.trimStart())

/* 4- try/catch ahora puede utilizarse sin especificar (error)*/
try {
} catch {
    error
}

/* 5-  Object.fromEntries(matriz) convierte matriz clave/valor --> Object     
       Object.entries(object) convierte object --> matriz clave/valor <-- es8
*/
let entries = [["name", "mauricio"],["age", 39],["country","CO"]]
let obj = Object.fromEntries(entries)
console.log(Object.entries(obj))
console.log(Object.fromEntries(entries))

/* 6- Symbol poder acceder a la descripción de un objeto tipo simbol*/
let mySymbol = 'my Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description)