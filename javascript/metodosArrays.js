const numeros = [1, 2, 3, 4, 5];
numeros.push(6); //agrega al final
numeros.pop(); //elimina el ultimo
numeros.shift(); //elimina el primero
numeros.unshift(0); //agrega al principio
console.log(numeros.join(','));
