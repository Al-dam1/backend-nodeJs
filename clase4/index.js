//objeto
/* const usuario ={
    nombre : 'damian',
    apellido : 'alderete',
    age : 22,
    admin : true,
    roles : ['editor','vendedor'],
    direccion : {
        calle : 'falsa',
        numero : 123,
    },
}; */
/* usuario.nombre = 'damian nicolas';
usuario.direccion = 'sprinfild 145';
console.log(usuario.nombre);
console.log(usuario['age']);
console.log(usuario); */
//console.log(usuario.direccion.numero);

const productos = [
    {id:1, nombre : 'mouse', precio : 100,categoria : 'perifericos'},
    {id:2, nombre : 'silla gamer', precio : 300,categoria : 'gamer'},
    {id:3, nombre : 'monitor', precio : 4500,categoria : 'monitor'},
    {id:4, nombre : 'teclado', precio : 300, categoria : 'perifericos'},

];
//map - recorre el array y genera uno nuevo
/* const nuevoArray = productos.map((p) => {
    p.precio = p.precio * 1.21
    return p    
});
nuevoArray.push({nombre : 'monitor LG', precio : 350});

console.log(nuevoArray, productos); */

//filter - filtra
const filtrados = productos.filter(p => p.categoria == 'perifericos' 
&& p.precio < 150);
//console.log(filtrados);

//forEach -- recorre todo el array
/* const imprimir= (item)=>{
    console.log(item);
} */
//productos.forEach(imprimir);
/* productos.forEach((item)=>console.table(item));
productos.forEach((item)=>console.table(item.nombre)); */

//productos.forEach(p => console.log(`el producto ${p.nombre} tiene un valor de $${p.precio}`));

//--------------------
//this hace referencia al objeto
/* const usuarios  = {
    nombre : 'damian nicolas',
    apellido:'alderete',
    imprimir(){
        return `${this.nombre} ${this.apellido}`;
    },
};
console.log(usuarios.imprimir()); */

// ---clases
//const user1 = {nombre : 'juan', admin: false};
//const user2 = {nombre : 'maria', admin: true};

class Usuario {
    constructor(nombre){
        this.nombre = nombre;
        this.admin = false;
    }
};

const user1 = new Usuario('juan');
console.log(user1);