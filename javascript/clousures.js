function contador () {
    let numero = 0;
    return function() {
        numero++;
        console.log(numero);
    }}
const contar = contador();
contar(); //1
contar(); //2
contar(); //3