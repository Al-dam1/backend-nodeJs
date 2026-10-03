//------ spread operator ------//
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [...num1, ...num2]; //combina los dos arrays en uno solo
console.log(num3); // [1, 2, 3, 4, 5, 6]

const persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30
}
const oficio = {
    profesion: 'Ingeniero',
    salario: 2000
}
const empleado = {...persona1, ...oficio}; //combina los dos objetos en uno solo
console.log(empleado); // {nombre: 'Juan', apellido: 'Perez', edad: 30, profesion: 'Ingeniero', salario: 2000}