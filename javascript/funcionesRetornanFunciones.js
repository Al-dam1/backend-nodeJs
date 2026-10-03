function crearMensaje(saludo) {
    return function(nombre) {
        console.log(`${saludo}, ${nombre}`);
    }}
const saludoSpanish = crearMensaje('Hola');
saludoSpanish('Juan');

const saludoEnglish = crearMensaje('Hello');
saludoEnglish('John');