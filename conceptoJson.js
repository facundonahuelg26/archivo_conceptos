/*
Objeto de notacion JavaScript o json, su funcion es poder de servir a la comunicacion entre distintos lenguajes de programacion. Por ejemplo un sitio de comercio electronico hecho en php que al momento de pagar nos lleve a pagina de un banco que tenga su aplicacion de pago hecha en python, la manera de comunicarse es mediante json. 

Como ambos lenguajes conocen de json el primero podria enviar la compra y los datos, y el segundo enviar el mensaje de exito o error.

Los tipos de datos que acepta son string, number, object, array, boolean, null, etc.

Todos los lenguajes de programacion deben tener soporte para JSON.
*/


const person = {
    nombre: "Pepe",
    edad:23,
    email:"pepe@gmail.com",
}

console.log(person) // Este es un objeto propio y tipico de JS.

const convertirAJson = JSON.stringify(person)
console.log(convertirAJson) // Con la sentencia de la linea 20 y
// el metodo JSON.stringify() convertimos el archivo a notacion tipo json.

const parsearJson = JSON.parse(convertirAJson)
console.log(parsearJson)
// con JSON.parse() los datos que provengan de otro lenguaje los 
// podemos leer y consumir en JS.