/* Script para resolver ejercicios de bucle for con JS */

//ej1()     // 1. Cuenta hacia adelante -> introducimos string.slice(0,-2)
//ej2()     // 2. Cuenta atrás 
//ej3()     // 3. Números pares con salto de línea 
ej4()

// 1
/*
Usando un bucle for escribir un script que pida valor entero y 
muestre en pantalla una lista de números desde el 0 al valor tecleado. 
Los números se seprarán por comas. 

Salida: 0, 1, 2, 3, 4, 5
*/

function ej1(){
let number = number(prompt("Introduce un número entero positivo:"))     // Si no recibimos número es NaN 

if( isNaN(number) ){alert("No podemos realizar la interacción") }
else if ( number < 1 ){ alert("Necesitamos un número positivo") }

number = Math.floor(number) // 2.5 -> 2 redondeo a la baja 

// Ejercicio 1 
let texto = ""
for(let i = 0; i < number; i++ ){
    texto += i + ","
}
//

// quitar coma -> usamos slice (0,-2) para quitar los 2 últimos caracteres
escribirSalida(texto.slice(0,-2),1)
}

// 2 
/*
Se trata de que dado un número entero el script muestre una cuenta atrás,
es decir, una lista de numeros separados por coma desde el número tecleado hasta el 0.

Salida: 
5, 4, 3, 2, 1
*/

function ej2(){
    let number = Number(prompt("Introduce un número entero positivo"))  // Si no recibimos número es NaN

    if( isNaN(number)){alert("No podemos realizar la iteración")}
    else if ( number < 1 ){ alert("Necesitamos un número positivo" ) }

    number = Math.floor(number) // 2.5 -> 2 redondeo a la baja 

    //Ej 2 
    let texto=""
    for(let i = number; i > 0; i--){
        texto += i + ", "
    }
    //

    escribirSalida(texto.slice(0,-2), 2)
}

