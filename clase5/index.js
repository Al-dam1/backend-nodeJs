const {sumar} = require('./math');

const suma = sumar(3,4);

console.log(suma);

console.log(process.argv);

console.log('hola mundo');

console.log(process.argv.slice(2)); //saca los archivos y coloca el text

const args = process.argv.slice(2);

// if ('get' == args[0]){
//     console.log('obtengo datos');
    
// } else if (args[0] == 'post'){
//     console.log('post...');
    
// }

switch (args[0]) {
    case 'get':
        console.log('get...');
        break;
    case 'post':
        console.log('post...');
        break;

    default:
        console.log('datos');
        
}