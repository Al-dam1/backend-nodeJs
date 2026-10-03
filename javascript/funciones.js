// function saludar(){
//     console.log('hola');
// }
// saludar(); // ejecuta la funcion

// function saludar(nombre, saludo='Hola'){
//     console.log(saludo + ', ' + nombre);
    
// }
// saludar('juan');
// saludar('maria');

// return : function sumar(num1, num2){
//     return `La suma es: ${num1 + num2}`;
// }
// let mensaje = sumar(6,4);
// console.log(mensaje);

// mensaje = sumar(3,5); 
// console.log(mensaje);

///////////////  funcion expresada /////////////// 

const saludar = function(){
    console.log('saludar');
    
}

saludar();

///////////////  funcion flecha /////////////// 

const multiplicar = (num1, num2) => 'El resultado es : ${num1 * num2}';
const mensaje = multiplicar(5, 6);
console.log(mensaje);