/* Calculadora */

function calc(){
    let numA = document.getElementById("myInputA").valueAsNumber, numB = document.getElementById("myInputB").valueAsNumber  //Number
    let operacionesSel = document.getElementById("operaciones"), res = document.getElementById("resultados")                // Select y resultados
    let pos = operacionesSel.options.selectedIndex  // índice seleccionado

    // Llamar a la fn seleccionada
            // posicion -> 0 es Suma, 1 es Resta ... 6 es Logaritmo 10 
    if( posicion === 0 ){ res.innerText = (numA + numB) }
    else if( pos === 1 ){ escribirResultado(resta(numA,numB)) }
    else if( pos === 2 ){ escribirResultado(producto(numA,numB)) }
    else if( pos === 3 ){ escribirResultado(division(numA,numB)) }
    else if( pos === 4 ){ escribirResultado(raizCuadrada( numA )) }
    else if( pos === 5 ){ escribirResultado(potencia(numA,numB)) }
    else                { escribirResultado(log10( numA )) }
}

// Fn para escribir un dato en el textarea
function escribirResultado(num){
    let textarea = document.getElementById("resultados")
    textarea.innerText = String(num)
}
// Funciones para operaciones básicas + - * / ** % sqrt() log()
// Suma 
function suma(a,b){
    return a + b
}
function resta(a,b){
    return a - b
}
function producto(a,b){
    return a * b
}
function division(a,b){
    // Si b (divisor) es cero -> a / 0 da Infinity
    if( b === 0){
        alert("No se puede dividir entre 0!!")
        return NaN
    }
    return a / b
}
function raizCuadrada(num){
    if( num < 0 ){
        alert("No existe la raíz cuadrada de números negativos!!!!")
        return NaN
    }
    return Math.sqrt(num)
}
function potencia(base, exponente){
    if ( base === 0 & exponente === 0 ){
        alert("0 elevado a 0 es indeterminado!!")
        return NaN
    }
    return Math.pow(base, exponente)
}
function log10(num){
    if( num <= 0 ){
        alert("No existe log para números no positivos!!")
        return NaN
    }
    return Math.log10(num)
}
// Botones para realizar cálculos 
// inputs para ingresar datos
// Estilos 