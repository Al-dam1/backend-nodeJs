// --- ARRAYS ---
// const Persona = ['Juan', 'Perez', 30,2000, 'Ingeniero'];

// let [nombre, apellido, edad, salario, profesion] = Persona;
// console.log(nombre, apellido, edad, salario, profesion);

//------ objetos ------
const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    salario: 2000,
    profesion: 'Ingeniero'
};

const {apellido, salario:sueldo='Sin especificar', profesion} = persona;
console.log(apellido, sueldo, profesion);
