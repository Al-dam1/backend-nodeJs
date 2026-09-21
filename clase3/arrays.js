//                Añadir o eliminar elementos

// En este caso tendremos a disposición los métodos push, unshift, pop y shift que cabe
// destacar, son métodos mutables lo que significa que modificarán el array original al estar
// aplicando el resultado directamente sobre el mismo.
// Para añadir elementos al inicio o al final del array, utilizaremos push y unshift:
// const fruits = ['Pera', 'Manzana', 'Frutilla', 'Durazno'];
 
fruits.push('Kiwi');
// ['Pera', 'Manzana', 'Frutilla', 'Durazno', 'Kiwi']
fruits.unshift('Kiwi');
// ['Kiwi', 'Pera', 'Manzana', 'Frutilla', 'Durazno']

    //    Para eliminar elementos al inicio o al final del array, utilizaremos pop y shift:
// const fruits = ['Pera', 'Manzana', 'Frutilla', 'Durazno'];
 
fruits.pop(); // ['Pera', 'Manzana', 'Frutilla']
fruits.shift(); // ['Manzana', 'Frutilla', 'Durazno']
              
//         Unir elementos de un array en una cadena (string)
// En este caso utilizamos el método .join() que recibe como parámetro el separador de
// nuestros elementos.
const fruits = ['Pera', 'Manzana', 'Frutilla', 'Durazno'];
fruits.join(' - '); //'Pera - Manzana - Frutilla - Durazno'

//          Acumular los valores de una array
// El método .reduce() se encarga de recorrer todos los elementos del array, e ir
// acumulando sus valores (o alguna operación diferente) y sumarlo todo, para devolver su
// resultado final.
const prices = [125, 237, 58, 1920, 418];
prices.reduce((total, price) => total + price, 0);
// 2758
/* total toma el 0 como "valor inicial" y en cada iteración
* se le va sumando el price actual hasta recorrer todo el
* array
*/