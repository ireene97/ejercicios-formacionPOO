// Ejercicio 1 - 20 oct

// Ejemplo de if y else

let esDia20 = true
    console.log("Antes del bucle if")
if (esDia20 == true) {
    console.log("Es dia 20!");
} else {
    console.log("No es día 20 :(")
}
    console.log("Despues del bucle if")

/* 

- Pedir un dato al usuario y comprobar si es mayor de edad
- Comprobar qué día es y sacar un mensajeA personalizado en cada caso
- Pedir dos datos para realizar una división -> comprobar que el divisor (segundo número en a / b sería la b) no es cero 


a / 0 // Infinity -> no es número

*/

/**************
 * a. Pedir un dato al usuario y comprobar si es mayor de edad
**************/

let edad = Number(prompt("Ingresa tu edad:")) // devuelve número o NaN
let mensajeA;
if ( edad > 18 ) {
    //Lo que ejecutamos en caso de true
    console.log("Bienvenido a la página!")
    mensajeA = "Bienvenido a la página!"
} else if ( edad == 18){
    // (Opcional) Podemos usar >= en el if anterior
    console.log("Enhorabuena tienes 18 años!")
    mensajeA = "Acabas de cumplir 18 años"
}
else if ( edad < 18) { 
    // Lo que ejecutamos en caso de false
    console.error("No puedes acceder por ser menor de edad") //prueba tambien con warn
    mensajeA = "No puedes acceder por ser menor de edad"
} else {
    //NaN
    console.log("Vaya, hemos recibido Nan :(")
    // Volvemos a pedir la edad (opcional)
    edad= Number (prompt ("Ingresa tu edad: en número"))
    // Recibimos el dato y SALIMOS del bucle
    // No se escribe ninguno de los mensajes anteriores
    // No se valida este valor recibido -> esto podría causar problemas
    mensajeA = "Gracias!"
}

let a = document.getElementById("sol-a") //<div id="sol-a" class="sol"></div>
a.innerText = mensajeA;

/***************
 * b. Comprobar qué día es y sacar un mensajeA personalizado en cada caso
 ***************/

let dia = prompt("Escribe el día de la semana:")  //Recibimos texto
let mensajeB
// Alternativa
// dia = dia.toLowerCase()  // Podemos manipular el string para que sea en minúsculas
// Solo habría que comprobar condición en minúsculas

// Modificamos este código para comprobar días con minúscula 
if ( dia == 'Lunes' || dia == 'lunes') { // let result = text.toLowerCase();
    console.log("Los lunes son lo mejor!")
    mensajeB = "Los lunes son lo mejor!"
} else if ( dia == 'Martes' || dia == 'martes' ){
    console.log("Buh, martes")
    mensajeB = "Buh, martes"
} else if ( dia == 'Miércoles' || dia == 'miercoles' || dia == 'Miercoles' || dia == 'miércoles' ) {
    console.log("Un día más cerca del viernes")
    mensajeB = "Un día más cerca del viernes"
} else if ( dia == 'Jueves' || dia == 'jueves' ) {
    console.log("Ya casi es viernes!")
    mensajeB = "Ya casi es viernes!"
} else if ( dia == 'Viernes' || dia == 'viernes' ){
    console.log("Por fin es VIERNES!!!")
    mensajeB = "Por fin es VIERNES!!!"
} else if ( dia == 'Sábado' || dia == 'sábado' || dia == 'Sabado' || dia == 'sabado' ){
    console.log("zzz...")
    mensajeB = "zzz..."
} else if ( dia == 'Domingo' || dia ==  'domingo' ){ //(dia == 'Domingo') || ( dia == 'domingo')
    console.log("Es domingo!")
    mensajeB = "Es domingo!"
} else {
// Este mensaje aparece en caso de cualquier falta ortográfica
    console.log("No es un día válido")
}

let b = document.getElementById("sol-b")
b.innerText = mensajeB;

/*
if ( dia == 'asdf'){
    console.log("asdf")
}
*/

/************
* c. Pedir dos datos para realizar una división -Z comprobar que el divisor (segundo numero en a / b sería la b) no es cero
*************/

// a / 0 // Infinity -> no es número

let dividendo = Number(prompt("Ingresa el dividendo:"))
let divisor = Number(prompt("Ingresa el divisor:"))
let mensajeC
let resultado
if ( divisor == 0 ){
    // Explicamos por qué no podemos realizar la operación
    mensajeC = "No podemos dividir por cero. Acaba mal"
} else {
    // Realizamos la operación
    resultado = dividendo / divisor
    mensajeC = "Resultado: " + resultado
}

let c = document.getElementById("sol-c")
c.innerText = mensajeC;