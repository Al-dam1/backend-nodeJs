// Ejercicios para practicar cada concepto

    // forEach: recorrer un array de usuarios y mostrar sus nombres.
let usuarios = [
    {user: 1, nombre:'Damian', apellido:'Alderete'},
    {user: 2, nombre:'Jose', apellido:'Goncalves'},
    {user: 3, nombre:'Alan', apellido:'Ferreyra'},
    {user: 4, nombre:'Clara', apellido:'Alderete'},
    {user: 5, nombre:'Fredy', apellido:'Albarracin'},
    {user: 6, nombre:'Veronica', apellido:'Torrez'},
    {user: 7, nombre:'Priscila', apellido:'Gomez'},
];
console.log('Aca veras las listas de usuarios afiliados al programa de Javascript!!');
usuarios.forEach((item)=>console.log(item.user,item.nombre, item.apellido));
    // map: transformar un array de notas en calificaciones con texto (“Aprobado/Reprobado”).
let notas = [10,8,6,4,0];
const calificaciones = notas.map((n)=>{
    return {
       notas:n,
       descripcion : n >= 4 ? 'Aprobado' : 'Reaprueba'
    };
});
console.log('aca veras tus calificaciones y observaras si aprobaste o no., SUERTE');
console.log(calificaciones);
    // filter: filtrar productos con precio menor a 200.

    // clases: crear una clase Producto con método aplicarDescuento.

    // destructuring: extraer nombre y edad de un objeto persona.

    // spread: unir dos arrays de números y agregar un nuevo valor.

