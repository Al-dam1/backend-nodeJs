class Persona{
    #Dni;
    _nombre;
    edad;

    constructor(Dni, nombre, edad){
            this.#Dni = Dni;
            this._nombre = nombre;
            this.edad = edad;
        }
        //obtener el valor de dni
        get Dni(){
            return this.#Dni;
        }
        //modificar el valor de dni
        set Dni(nuevoDni){
            this.#Dni = nuevoDni;
        }
}
const persona1 = new Persona('12345678','Juan', 30);
console.log(persona1, persona1.Dni);

//modificar el valor de dni
persona1.Dni = '87654321';
console.log(persona1, persona1.Dni);