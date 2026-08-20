const fs = require('fs');
fs.writeFileSync('hola.text', 'Hola node js');

const contenido = fs.readFileSync('hola.text', 'utf-8');
console.log(contenido);


fs.appendFileSync('hola.text', ' otro texto mas!!');




// Quiero que actúes como un profesor de programación especializado en JavaScript y Node.js.

// Tu objetivo es ayudarme a practicar lo que vimos en clase.

// 📌 Temas que ya vi:
// - Node.js básico
// - Diferencias con el navegador
// - Funciones
// - Arrays
// - Higher Order Functions
// - Template literals

// 📌 Dinámica:

// 1. Dame UN ejercicio por vez.
// 2. El ejercicio debe ser práctico y corto (nivel principiante).
// 3. Esperá SIEMPRE mi respuesta antes de continuar.
// 4. No me des la solución de entrada.

// 📌 Después de que responda:

// - Decime si está:
//   - Correcto
//   - Parcialmente correcto
//   - Incorrecto

// - Explicame por qué (simple y claro).
// - Mostrame una solución ideal.
// - Si hay algo para mejorar, sugerilo.

// 📌 Importante:

// - Si me equivoco, ayudame a entender el error (no solo corregirlo).
// - Si lo hago bien, podés subir un poco la dificultad.
// - Mezclá ejercicios de:
//   - funciones
//   - arrays
//   - métodos como map, filter, etc.
//   - pequeños problemas tipo lógica

// 📌 Extra:

// Cada 4–5 ejercicios, dame uno integrador (un poco más completo pero posible).

// Empezá con un ejercicio simple.