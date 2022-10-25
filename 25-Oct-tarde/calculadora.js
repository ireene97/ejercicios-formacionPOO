// Calculadora

let calculadora = document.getElementById("calculadora")
let suma = document.getElementById("suma")
let resta = document.getElementById("resta")
let producto = document.getElementById("producto")
let division = document.getElementById("division")

calculadora.innerText += "Resultados: \n"



calculadora.innerText += suma (10, 20)
calculadora.innerText += "\n"
calculadora.innerText += resta(50, 10)
calculadora.innerText += "\n"
calculadora.innerText += producto (11, 11)
calculadora.innerText += "\n"
calculadora.innerText += division (100, 50)


// + - * / 

function suma (a, b){
    // Se espera que a y b sean números
    let resultado = a + b
    return resultado
}
function resta (a, b){
    
    let resultado = a - b
    return resultado
}
function producto (a, b){
    
    let resultado = a * b
    return resultado
}
function division (a, b){
    // No se puede dividir por cero -> considerar ese caso
    let resultado = a / b
    return resultado
}

// Ejercicio -> colocamos cada resultado en su caja (div)


