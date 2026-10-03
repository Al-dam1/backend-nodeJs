function saludar(nombre){
    console.log('Hola, ' + nombre);
}
function saludarUsuario(usuario, callback){
    callback(usuario);
}
saludarUsuario('Juan', saludar);