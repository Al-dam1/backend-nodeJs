// Declaración de una Función.
// En javascript tenemos varias formas para crear una función, conozcamos las funciones
// declaradas, las expresadas y las arrow functions.
// Funciones Declaradas
function search() {
// proceso encapsulado
}
// Se utiliza la palabra reservada function seguida del nombre de la función pegada a un
// juego de paréntesis y un bloque de llaves donde se ingresará el código que realizará la
// función.
// Funciones Expresadas
const search = function () {
// proceso encapsulado
}
// En este caso la función es anónima (sin nombre) y se guarda dentro de una variable o
// constante tradicional.
// La diferencia fundamental entre las funciones declaradas y las funciones expresadas es que
// estas últimas sólo están disponibles a partir de la inicialización de la variable. Si ejecutamos
// la variable antes de declararla, nos dará un error.


// Return
// function subtract() {
//     return 20 - 10;
//     }
//     const result = subtract();
//     // imprimimos el resultado en la terminal
//     console.log(result);

// Para declarar un Arrow Function usamos la siguiente sintaxis:
// const subtract = () => { /* rutina o proceso */ };