numeros = [1, 2, 3, 4, 5,6,7,8,9,10];

function mostrar(numero){
    console.log(numero);
    
}
numeros.forEach(mostrar); //recorre el array y ejecuta la funcion mostrar

numeros.forEach((numero) => {
    console.log(numero);    
})
const nume = [1, 2, 3, 4, 5]
const numbers = nume.map(numero => numero);
const filtro = nume.filter(numero => numero > 2);

const total = nume.reduce((acumulador, numero) => acumulador + numero, 0);

//splice[indice, cantidad, elemento1, elemento2, ...] //elimina y agrega elementos
numeros.splice(2, 3, 100, 200, 300); //elimina 3 elementos a partir del indice 2 y agrega 100, 200 y 300
console.log(numeros);
