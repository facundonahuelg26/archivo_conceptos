/********************   VAR      ************* */
var numUno = 1
var numUno = 2

console.log(numUno)

/*
Primer inconveniente de usar var, se puede declarar la misma variable
en multiples lugares del codigo, si el primer valor asignado
era importante en el codigo la redeclaracion le pasara un nuevo 
valor.
*/ 


/********************   LET      ************* */


let numeroDos = 7
//let numeroDos = 8 Sacar los slash arrojara el error por consola.

/*
Redeclarar una misma variable con let arrojara un error en 
consola. Lo que si es posible con una variable declarado con let
es modificar su valor, ejemplo:
*/

let numeroTres = 9
numeroTres = 145

/*
Otro inconveniente de usar var, el ambito de aplicacion.
Ejemplo:
*/

var num = 100

if(num){
    var num = 200
    console.log(num)
}
console.log(num)

/*Dentro de la condicion del if, la variable num se modifico a 200, y luego fuera del if continuo con el valor que adquirio dentro del if.

Si estas variables fueran declaradas con let nos permitiria tener
una variable global llamada num con valor de 100, y una variable local restringida al ambito de aplicacion del if con valor 200.

SCOPE:
Este tema de las variables tiene que ver justamente con el scope.
El scope de una variable hace referencia al lugar donde esta va a vivir , o podrá ser accesible.

Podríamos decir también que scope es el alcance que determina la accesibilidad de las variables en cada parte de nuestro código. 

¿Para que tener en cuenta el Scope?
El scope delimita que va hacer cada parte de nuestro codigo, sin que las demas partes puedan interferir asi tenemos mas control sobre nuestro codigo y menos errores.
*/


/*CONSTANTES */

const n = 15

/*
No se pueden ni redeclarar ni tampoco modificar su valor si el valor fuera numerico, string o booleano. Si el string es convertido a array podran agregarse o quitarse elementos.
En el caso de los arrays se pueden agregar o quitar valores
con distintas funciones como push. Lo mismo en el caso de los objetos.
*/
