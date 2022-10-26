/* Calculadora */ 

function calc(){
    let numA = document.getElementById("myInputA")
    let numB = document.getElementById("myInputB")    
    
    numA = numA.valueAsNumber // número
    numB = numB.valueAsNumber // número

    /*let res1 = suma(Number(numA.value), Number(numB.value))
    let res2 = resta(Number(numA.value), Number(numB.value))
    let res3 = producto(Number(numA.value), Number(numB.value))
    let res4 = division(Number(numA.value), Number(numB.value))
    let res5 = raizCuadrada(Number(numA.value))
    let res6 = potencia(Number(numA.value), Number(numB.value))   
    let res7 = log10(Number(numA.value))
    
    console.log ("Resultados:")
    console.log ("Suma: " + res1)
    console.log ("Resta: " + res2)
    console.log ("Producto: " + res3)
    console.log ("División: " + res4)
    console.log ("Raíz Cuadrada: " + res5)
    console.log ("Potencia: " + res6)
    console.log ("Logaritmo 10: " + res7)*/

        // Tomar valores del select cuando se llame calc()
        let operacionesSel = document.getElementById("operaciones")
        let posicion = operacionesSel.options['selectedIndex']
        // posicion -> 0 es Suma, 1 es Resta....
        
        // Llamar a la fn seleccionada
        if(posicion === 0 ){
            let res = suma(numA, numB)
            escribirResultado(res)
            console.log("Suma: " + res)
        } else if( posicion === 1){
            let res = resta(numA, numB)
            escribirResultado(res)
            console.log("Resta: " + res)
        } else if( posicion === 2){
            let res = producto(numA, numB)
            escribirResultado(res)
            console.log("Producto: " + res)
        } else if( posicion === 3){
            let res = division(numA, numB)
            escribirResultado(res)
            console.log("División: " + res)
        } else if( posicion === 4){
            let res = raizCuadrada(numA, numB)
            escribirResultado(res)
            console.log("Raíz cuadrada: " + res)
        } else if( posicion === 5){
            let res = potencia(numA, numB)
            escribirResultado(res)
            console.log("Potencia: " + res)
        } else{
            let res = log10(numA)
            escribirResultado(res)
            console.log("Logaritmo: " + res)
        } 
    
        // Escribir resultado en textarea

    
    }  

// Fn para escribir un dato en el textarea
function escribirResultado(num){
    let textarea = document.getElementById("resultados")
    textarea.innerText = String(num)
}
// Funciones para operaciones básicas + - * / ** % sqrt() log() 
// Suma 
function suma(a, b){
    return a + b;
}
// Resta
function resta(a, b){
    return a - b;
}
// Producto
function producto(a, b){
    return a * b;
}
// División
function division(a, b){
    // Si b (divisor) es cero -> a / 0 da Infinity
    if( b === 0 ){
        alert("No se puede dividir por cero!!!")
        return NaN;
    } 
    return a / b;
}
// Raíz cuadrada -> math.sqrt (num)
function raizCuadrada(num){
    if (num < 0 ){
        alert("No existe la raíz cuadrada de números negativos!!!")
        return NaN
    }
    return Math.sqrt(num)
}


// Potencia -> Math.pow(base, exponente)
function potencia(base, exponente){
    if ( base === 0 & exponente === 0 ){
        alert("0 elevado a 0 es indeterminado!!!")
        return NaN
    }
    return Math.pow(base, exponente)
}
// Log -> Math.log(num)
function log10(num){
    if( num <= 0){
        alert("No existe log para números no positivos!!!")
        return NaN
    } 
    return Math.log10(num)
}

// Botones para realizar cálculos
// inputs para ingresar datos
// Estilos