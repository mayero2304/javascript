/* 
   1- Object.entries(object) convierte object --> matriz clave/valor 
   -- tambien puedes acceder a la longitud
*/

const data = {
    name: 'mauricio', 
    age: 39, 
    country: 'CO'
}

const entries = Object.entries(data);
console.log(entries)
console.log(entries.length)
console.log(entries.flat(1).length)

/* 
   2- Object.values() devuelve los valores de un objeto en un arreglo
*/
const data = {
    name: 'mauricio', 
    age: 39, 
    country: 'CO'
}
const values = Object.values(data)
console.log(values.length)

/* 
  3-  padding: nos permite añadir cadenas vacias al string, pudiendo modificar la cadena strign como tal.
      puede servir del lado del front, para mostrar una estructura de elemento
      
*/
const string = 'hello';
console.log(string.padStart(7), 'hi')
console.log(string.padEnd(12, ' ------'))
console.log('food'.padEnd(12, '  ------'))

/* 
   4-  tralling comas, nos permite asignar elementos al objeto mediante comas.
*/
const data = {
    name: 'mauricio', // se puede agregar la coma y no pasa nada
}