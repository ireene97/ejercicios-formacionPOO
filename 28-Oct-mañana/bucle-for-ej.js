/* Script para resolver ejercicios de bucle for con JS */

//ej1()     // 1. Cuenta hacia adelante -> introducimos string.slice(0,-2)
//ej2()     // 2. Cuenta atrás 
//ej3()     // 3. Números pares con salto de línea 
//ej4()     // 4. Tabla de multiplicar

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

// 3
/*
Se quiere un bucle que genere una lista con todos los números pares positivos por debajo
del número tecleado por el usuatio. Los números se aparecerán en una ventana alert con cambios de línea (caracter '\n')

Salida 
2
4
6
...
*/

function ej3(){
    let number = solicitarDato()
    // Ej 3
    let texto = ""
    for(let i = 1; i < number; i++){
        if( i % 2 == 0){
            texto += i + "\n"
        }
    }
    escribirSalida(texto, 3)
}

/*
Este script debe escribir la tabla de multiplicar del número que el usuario teclee. 
La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.
Recuerda que el salto de línea es el caracter '\n'

4 x 1 = 4

4 x 2 = 8...
*/
function ej4(){
    let number = solicitarDato();
    //Ej 4
    let texto = "";
    for(let i = 1; i <= 10; i++){
        texto += String(number) + " x " + i + " = " + String(number*i) + "\n";
    }
    escribirSalida(texto, 4)
}

/* 
En este ejercicio mezclamos bucles on condicionales: el usuario escribe un número y 
el script imprimirá (console.log) todos los números menores que al dividirlos por 3 den como resto 2.
Recuerda: un número es múltiplo de N es cuando el dividirlo por N el resto es 0.

Input: 14
Output: 2, 5, 8, 12
*/
function ej5(){
    let number = solicitarDato();
    // Ej 5
    let texto = "";
    for(let i = 1; i < number; i++){
        if( number % i == 2){
            texto += i + ", "
        }
    }
    escribirSalida(texto.slice(0,-2), 5)
}

/**
 * Este script el usuario deberá teclear una letra y un número, 
 * y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado.
 */

function ej6(){
    //
}

/* Funciones Auxiliares */
function solicitarDato(){
    let number = Number(prompt("Introduce un número entero positivo:")) // Si no recibimos número es NaN

    if( isNaN(number) ){ alert("No podemos realizar la iteración") }
    else if ( number < 1 ){ alert("Necesitamos un número positivo") }

    return Math.floor(number); 
}

function escribirSalida(contenido, num){
    let div = document.getElementById(num);
    texto = "Ejercicio " + String(num) + ":\n";
    texto += "-------------\n";
    texto += contenido;
    div.innerText = texto;
}