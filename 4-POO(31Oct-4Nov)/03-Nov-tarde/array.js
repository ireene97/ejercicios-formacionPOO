// Script para resolver ejercicios con Arrays

// 1. Array para guardar dias de la semana y al pedir 0-6 lo escribe
function ej1(){
    let el = document.getElementById("ej-1-resultados")
    let input = document.getElementById("input-1").valueAsNumber
    let dias = [
        "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"
    ]
    el.innerText = dias[input]
}

// 2. Array con booleans -> "V" o "F"
    // si recibimos 0-9 -> true o "V"
    // else return false o "F"
function ej2(){
    let el = document.getElementById("ej-2-resultados")
    let input = document.getElementById("input-2").valueAsNumber
    let arr = ["F", "V"]
    if( input >= 0 && input <=9){
        el.innerText = arr[1]
    }else{
        el.innerText = arr[0]
    }
}

// 3. fn sumaLista(arr) -> return de suma de Numbers
function ej3(){
    let el = document.getElementById("ej-3-resultados")
    let num = 0
    let arr = []
    let suma = 0 
    do{
        num = Number(prompt("Introduce número. \n 0 para terminar"))
        arr.push(num)
        suma += num
    }while ( num != 0 )
    el.innerText = "Suma: " + suma
}

// 4. Guardar números en array 
    // Entrada de datos acaba con 0 o char alfanúmerico -> ç r /
    // Se muestra el array, cuántos pares, impares
    // No guardar cosas que no sean Number 
function ej4(){
    let el = document.getElementById("ej-4-resultados")
    let num = 0
    let arr = []
    let esInt = false
    let par = 0 
    let impar = 0 
    do{
        num = Number(prompt("Introduce número. \n\n0 para terminar"))
        esInt = Number.isInteger(num)
        if( esInt && num != 0 ){
            arr.push(num)
            if( num % 2 == 0 ){ par++ }
            else {impar++}
        }
    }while( esInt && num != 0 )
    el.innerText = `Array: [${arr.toString()}]
                    Par: ${par}
                    Impar: ${impar}`

}

// 5. Devolvemos min o índice del mínimo controlando "v" o "i" como segundo param
    // min([4,5,7], 'v') -> 4
    // min([4,5,7], 'i') -> 0
    function ej5(){
        let el = document.getElementById("ej-5-resultados")
        let num = 0;
        let arr = [];
    
        do{
            num = Number(prompt("Ingresa un número:"))
            if( num >= 0 ){
                arr.push(num);
            }
        } while( num >= 0 )
        
        console.log(arr)
        // Pedimos el segundo parámetro
        let param = prompt("Ingresa 'v' o 'i':");
    
        // Vamos a considerar números positivos y 0
        let res = min(arr, param);
    
        el.innerText = `${param}: ${res}`;
    }
    function min(arr, char = 'v'){
        let min = Math.min(...arr);
        if( char == 'v'){
            return min;
        } else if ( char == 'i'){
            return arr.indexOf(min);
        } else {
            alert("Parámetro incorrecto!")
            return NaN;
        }
    }