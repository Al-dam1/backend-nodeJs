function addition(a, b) {
    return a + b;
    }
    function subtract(a, b) {
    return a - b;
    }
    function calculator(a, b, action) {
    return action(a, b);
    }
    calculator(20, 10, addition); // 30
    calculator(20, 10, subtract); // 10

// En el ejemplo anterior, creamos una función llamada calculator que espera tres
// parámetros, 2 valores y una acción. Aprovechamos esta lógica para pedirle que ejecute la
// función adition en caso que deseemos sumar ambos valores o subtract si lo que
// buscamos es restarlos. De esta manera, es la función calculator la encargada de
// ejecutar de forma interna la acción recibida por parámetro.