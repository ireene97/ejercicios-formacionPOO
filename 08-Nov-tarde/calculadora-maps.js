/* Calculadora */

function calc(){
    let numA = document.getElementById("myInputA")
    let numB = document.getElementById("myInputB")

    numA = numA.valueAsNumber   // número
    numB = numB.valueAsNumber   // número

    // Tomar valores del select cuando se llame calc()
    let operacionesSel = document.getElementById("operaciones")     // select
    // let posicion = operacionesSel.options.selectedIndex  // equivalente a la sig línea
    let posicion = operacionesSel.options['selectedIndex']  // entero, posición en array 
    // posicion -> 0 es Suma, 1 es Resta ... 6 es Logaritmo 10 

    // Llamar a la fn seleccionada
    if( posicion === 0 ){
        let res = suma(numA, numB)
        escribirResultado(res)
        console.log("Suma: " + res)
    } else if( posicion === 1 ){
        let res = resta(numA, numB)
        escribirResultado(res)
        console.log("Resta: " + res)
    }
}