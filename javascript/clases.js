//usamos el constructor
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    //metodos
    saludar(){
        return `Hola, mi nombre es ${this.nombre} ${this.apellido}`;       
    }
}
const persona1 = new Persona('Juan', 'Perez');
console.log(persona1);

const mensaje = persona1.saludar();
console.log(mensaje);


//// ------------ extender la clase ------------- ////
class Empleado extends Persona{
    constructor(nombre, apellido, cargo){
        super(nombre, apellido);
        this.cargo = cargo;
    }
    trabajarDe(){
        return `${this.nombre} ${this.apellido} está trabajando como ${this.cargo}.`;
    }
}
const empleado1 = new Empleado('María', 'Gómez', 'Desarrollador');
console.log(empleado1);

const info = empleado1.trabajarDe();
console.log(info);

