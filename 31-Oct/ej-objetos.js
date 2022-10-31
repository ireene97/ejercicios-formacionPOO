/* Ejercicios con Objetos en JS */

// ej1() // Obj alumno y método que promedia notas 
// ej2()
ej3()

// Ejercicio 1 - Obj para guardar notas de alumno y método que promedia notas
// Propiedades: nombre, apellido, ingles, prog, html (asignaturas)
// Método: calcular media de las tres asignaturas

function ej1(){
    let alumno = {
        "nombre": "Pepe",
        "apellido": "Valiente",
        "ingles": 7.5,
        "prog": 6.75,
        "html": 8,
        "promediarNotas": function(){
            let ingles = this.ingles
            let prog = this.prog
            let html = this.html
            let res = (ingles + prog + html) / 3
            return res.toFixed(2)
        }
    }
    escribirResultado("Promedio de notas", alumno.promediarNotas())
}

function ej2(){
    let producto = {
        "precio": 200,      // €
        "descuento": 30,    // esto es un %
        "calcularPrecioNeto": function(){
            let valorDto = (this.descuento / 100) * this.precio
            return this.precio - valorDto
        }
    }
    escribirResultado("Calculamos precio neto", producto.calcularPrecioNeto() + "€")
}

function ej3(){
    let piedra ={
        "color": "grisáceo",
        "origen": "Islas volcánicas",
        "materiales": ["silicio", "calcio"],
        "masaKg": 1.5,    // kg
        "masaGr": 1.5 * 1000,
        "volumenCc": 1000,
        "volumenM3": 0.001,
        "calcDensidadKgM3": function(){
        // densidad = masa (kg) / volumen (m3)
            return (this.masaKg / this.volumenM3).toFixed(5)    // kg/m3
        },
        "calcDensidadGrCc": function(){
        // densidad = masa (gr) / volumen (cc)    
            return (this.masaGr / this.volumenCc).toFixed(3)    // gr/cc
        }
    }
    // escribirResultado("Densidad en kg/m3: ", piedra.calcDensidadKgM3() + " kg/m3")
    escribirResultado("Densidad en gr/cc: ", piedra.calcDensidadGrCc() + " gr/cc")
}


// Funciones auxiliares
function escribirResultado(op, res){
    let div = document.getElementById("resultado")
    let descripcion = ""
    let resultado = ""
    // Lo que hemos calculado
    descripcion += "Operación realizada: " + op + "\n\n"
    // Resultado
    resultado += "Resultado:\n\n" + res 
    // Escribimos en el div 
    div.innerText = descripcion
    div.innerText += resultado
}
