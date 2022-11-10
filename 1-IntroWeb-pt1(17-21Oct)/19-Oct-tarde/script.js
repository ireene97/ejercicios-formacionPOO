console.log("Ejercicio 2")
console.log("-----------")


/* Suma */
let suma = document.getElementById("suma") //<p id="sum"   class="inline">Suma: </p>
let a = Number(prompt("Introduce primer operando:"))
let b = Number(prompt("Introduce segundo operando:"))
let resultado = a + b;
console.log("Suma:" + resultado)
suma.innerText += resultado // 'Suma:' + 36 ----> 'Suma:36'
                            //suma.innerText = suma.innerText + resultado

/****************************/
// let str = suma.innerText // 'Suma:'
// resultado = a + b //  36
// let newStr = str + resultado   //'suma:36'
// suma.innerText = newStr      //'Suma:36'
/***************************/


/* Resta */
let resta = document.getElementById("resta") //<p id="resta" class="inline">Resta: </p>
// para que te lo pida en cada operación
/*a = Number(prompt("Introduce primer operando:"))
b = Number(prompt("Introduce segundo operando:"))*/
resultado = a - b;
console.log("Resta:" + resultado)
resta.innerText += resultado

/* Multiplicación */
let prod = document.getElementById("prod") //<p id="prod"  class="inline">Producto: </p>

resultado = a * b;
console.log("Multiplicación:" + resultado)
prod.innerText += resultado

/* División */
let divi = document.getElementById("divi") //<p id="divi"  class="inline">División: </p>

resultado = a / b;
console.log("División:" + resultado)
divi.innerText += resultado