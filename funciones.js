/********************   FUNCIONES DECLARADAS VS FUNCIONES EXPRESADAS     ************* */


//sumar(2,3)

function sumar (num1, num2) {
    console.log(num1 + num2)
}

sumar(2,3)

/*
las funciones declaradas como la de arriba, pueden invocarse en 
cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada. Si se tiene en cuenta la invocacion comentada arriba de declaracion de la funcion tambien funcionaria.
*/ 

/*
Una funcion expresada es asignar una funcion a una variable
por ejemplo:

const sumar = function (a,b) {
    return (a + b)
}

const sumar = (a,b) => {
    return (a + b)
}

Estos serian dos tipos de funciones expresadas, si intentaramos
escribir su invocacion antes de su declaracion, nos daria error, 
justamente porque la invocacion no puede estar antes que la declaracion de la funcion.

Este concepto es el hoisting o izaje, tanto variables declaradas con var y funciones declarativas tienen este comportamiento.

Un ejemplo:
console.log(numero)
var numero = 0
Segun el orden logico esto deberia fallar, sin embargo no es asi,
porque javascript hace lo siguiente al momento de ejecutar el codigo.

var numero = 0 Este valor es izado o subido.
console.log(numero)

Lo mismo con una funcion del tipo declarativa...

saludar()
function saludar() {
    console.log("hola")
}

javascript izara la funcion declarativa quedando asi...

function saludar() {
    console.log("hola")
}
saludar()

Una buena practica seria primero siempre declarar las funciones ya sean declarativas o expresadas y luego hacer la llamada o invocacion.
Aunque al realizar funciones expresadas tendremos mayor seguridad sobre como estamos estructurando el codigo de modo 
de cometer menos errores.
*/

/********************   FUNCIONES ARROW      ************* */
const multiplicar = (num1, num2) => {
    return (num1 * num2)
}


const resultado = multiplicar(2,3)
console.log(resultado)

/*
Para expresar funciones flecha si solo se le pasa un parametro
se podria definir sin parentesis.

const multiplicar = num1 => {
    return (num1)
}

Si fuera mas de 1 parametro se colocan parentesis, Si el codigo
a ejecutar dentro de la funcion fuera una sola linea se podria expresar asi sin llaves, si fueran mas lineas se colocan llaves.

const multiplicar = (num1, num2) => return (num1 + num2)
*/

// ASIGNAR UN VALOR POR DEFECTO COMO PARAMETRO

const restar  = (num = 1) => {
    console.log(6 - num)
}

restar()

/*
En caso de no pasarle valores como parametros se podria asignar 
uno por defecto. Si se pasa el valor al parametro y existe uno 
por defecto se le asignara el valor que se le esta pasando.
*/


// DESTRUCTURACION 

/*
Supongamos que tenemos una funcion a la cual hay que pasarle multiples parametros, podriamos realizarlo pasando un objeto y destructurando ese objeto dentro de la funcion, por ejemplo:
*/

const enviarDatosUsuario = ({nombre, edad, direccion, clienteActivo, colorPelo = "Marron"}) => {
    console.log(nombre, edad, direccion, clienteActivo, colorPelo)
}

const person = {
    nombre: "Carlos", 
    edad: 45,
    direccion: "Caseros 1800",
    clienteActivo: true,
    colorPelo: "Azul"
}
enviarDatosUsuario(person) // recordar poner la invocacion debajo del objeto ya que este no fue inicializado y nos daria error.

/*
Otro dato interesante supongamos que nos llegaran datos que estuvieramos consumiendo de algun lado, y quieramos tener un 
parametro que en caso de no llegarle valor tuviera valor por defecto, esto es lo que estariamos haciendo con colorPelo, 
si no le llega valor el color de pelo sera "Marron", en caso
de que los datos enviados tuvieran ese dato el color seria Azul.
*/

/*
Otro ejemplo, supongamos que tuvieramos una funcion
que tiene 2 valores que son edadMenor y edadMayor,
y quisieramos pasarselos a otra funcion, si quieramos
pasarlos de la manera tradicional no podriamos.
*/

const edades = () => {
    const mayorEdad = 23
    const menorEdad = 17

    return {mayorEdad, menorEdad}
}


const recibirEdades = ({menorEdad, mayorEdad}= edades()) => {
    
    //const {menorEdad, mayorEdad} = edades()
    console.log(menorEdad, mayorEdad)
}

recibirEdades()

/*
Tanto de la forma comentada en la linea 144 como la de la linea 142
es posible desestructurar esos valores que llegan.
*/