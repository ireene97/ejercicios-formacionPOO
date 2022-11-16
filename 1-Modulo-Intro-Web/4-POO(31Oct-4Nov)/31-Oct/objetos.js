/* Script para practicar los objetos en JS */

/* Resumen de Objetos */

let obj = {
    "atributo": "Valor del atributo",
    "nombreDelMetodo": function(){alert("Mensaje desde método")},
    "otraPropiedad": "Valor de la otra propiedad",
    "escribirAtributos": function(){ console.log("atributo: " + this.atributo)},
    "escribirOtraPropiedad": function(){ console.log("otra propiedad: " + this.otraPropiedad)
    }
}

/* Calculadora con + - * / */

let calc = {
    "operaciones": "Suma, Resta, Producto, Division",
    "operadores": "+ - * /",
    "suma": function(a,b){ console.log( a + b ) },
    "resta": function(a,b){ console.log( a - b) },
    "prod": function(a,b){ console.log( a * b ) },
    "divi": function(a,b){ console.log( a / b) }
}
/********************/

