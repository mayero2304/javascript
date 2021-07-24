/*      ENTENDIENDO EL DOBLE SIGNO DE EXCLAMACIÓN
    Los signos de exclamación dobles realmente pueden convertirlo al valor booleano correspondiente. 
    El primer signo de exclamación es convertirlo en un valor booleano, pero esta operación obtiene 
    el valor después de su negación, 
    que puede obtenerse realizando una operación de negación Que corresponde a un verdadero booleano
*/


var token_null = null;
console.log( 'token_null   =', token_null );   // null
console.log( '!token_null  =', !token_null );   // true
console.log( '!!token_null =', !!token_null );  // false

console.log( '-----------' );

var token_undefined = undefined;
console.log( 'token_undefined   =', token_undefined );   // undefined
console.log( '!token_undefined  =', !token_undefined );  // true
console.log( '!!token_undefined =', !!token_undefined ); // false

console.log( '-----------' );

var token_string = 'mi_token';
console.log( 'token_string   =', token_string );   // "mi_token"
console.log( '!token_string  =', !token_string );  // false
console.log( '!!token_string =', !!token_string ); // true


