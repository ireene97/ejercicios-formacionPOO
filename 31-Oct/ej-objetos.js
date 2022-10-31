/* Ejercicios con Objetos en JS */

// ej1() -- Obj alumno y método que promedia notas 
// ej2() -- Obj para calcular el precio neto de un producto
// ej3() -- Obj para calcular la densidad de la piedra en kg/m3 y en gr/cc 
// ej4() -- Obj que representa a una cuenta bancaria 
// ej5() -- Obj ficha de entrenamiento 
// ej6() -- Objs bus y conductor 
ej7()

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

            // Alternatica del return sin variables adicionales: 
            // retrn ( this.ingles + this.prog + this.html) / 3).toFixed(2)
        }
    }
    escribirResultado("Promedio de notas", alumno.promediarNotas())
}

// Ejercicio 2 - Cálclo del precio neto de un producto aplicando descuento 
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

// Ejercicio 3 - Objeto piedra que tiene masa y volumen a partir de lo cual se calcula la densidad 
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

// Ejercicio 4- Objeto que emula una cuenta de banco con ingresar() y retirar ()
    // consultarSaldo() escribe el saldo actual 
function ej4(){
    let cuenta = {
        "balance": 100.00,         // €
        "ingresar": function(cantidad){
            this.balance += cantidad       
            console.log("Balance actual: " + this.balance)
            return this.balance.toFixed(2) + " €"
        },
        "retirar": function(cantidad){
            if(cantidad > this.balance){
                alert("No se puede retirar esa cantidad")
                return 0
            } else if( cantidad < 0 ){
                alert("No se admiten cantidades negativas")
                return 0 
            }
            this.balance -= cantidad         // limiatos los decimales a 2 
            return cantidad.tofixed(2)
        },
        "consultarBalance": function(){
            return this.balance + " €"
        }
    }
    // escribirResultado("Retirar 50 €: ", "Balance retirado: " + cuenta.retirar(50))
    // escribirResultado("Retirar -1 €: ", cuenta.retirar(-1))
    // escribirResultado("Retirar 200 €: ", cuenta.retirar(200))
    escribirResultado("Ingresamos una cantidad con decimales €: ", cuenta.ingresar(10.12345));

}

// Ej 5 - Ficha de entrenamiento
function ej5(){
    let ficha = {
        "nombre": "Pepe",
        "apellido": "Grande", 
        "sesiones": 0,          // float de km -> 1.56
        "numSesiones": 0,       // int
        "anotarSesion": function(kms){
            // Deberíamos validar que kms no sea negativo 
            if(kms <0 ){
                let msj = "No se pueden registrar valores negativos"
                alert(msj)
                return msj
            }
            this.sesiones += kms    // Guardamos los km de todas las sesiones 
            this.numSesiones += 1   // Incrementamos el contador de sesiones 
            return this.sesiones + "km"
        },
        "calcMedia": function(){
            // Hay que evitar división por creo 
            if (this.sesiones == 0 ){alert("Aún no has realizado una sesión!!"); 
            return "No hay sesiones registradas"
        }
            return (this.sesiones / this.numSesiones).toFixed(2) + " km por sesión"
        }
    }
    // escribirResultado("Anotar -1 km: ", ficha.anotarSesion(-1));    // Debe arrojar alert
    // escribirResultado("Media con 0 sesiones: ", ficha.calcMedia())  // Debe arrojar alert
    escribirResultado("Anotar +10 km: ", ficha.anotarSesion(10));   // Debe retornar '10 km'
    ficha.anotarSesion(20);
    ficha.anotarSesion(70);
    escribirResultado("Calculamos media en ficha de " + ficha.nombre, ficha.calcMedia());     // Debe retornar '10 km por sesión'
    
}

// Ej 6
function ej6(){
    let bus = {
        "linea": "Línea 1",
        "empresa": "movement",
        "capacidad": 40, 
        "pasajeros": 0,
        "conductor": {
            "nombre": "José",
            "licencia": 1234
        },
        "subir": function(pasajerosQueSuben){
            // Comprobamos capacidad 
            if(pasajerosQueSuben >= this.capacidad){
                this.pasajeros = this.capacidad         // 50-> 40
                console.log(this.pasajeros)
                return this.pasajeros
            } else if(this.pasajeros + pasajerosQueSuben >= this.capacidad){
                this.pasajeros = this.capacidad         // 39 + 39 = 78 -> NO
                console.log(this.pasajeros)
                return this.pasajeros
            }
                // 10 + 11 = 21 -> SI
                this.pasajeros += pasajerosQueSuben
                console.log(this.pasajeros)
                return this.pasajeros
        },
        "bajar": function(pasajerosQueBajan){
           // Las restas negativas son 0 
            if( pasajerosQueBajan >= this.capacidad){ 
                this.pasajeros = 0 
                console.log(this.pasajeros)
                return this.pasajeros}      // 100 -> 0
            else if( pasajerosQueBajan > this.pasajeros) { 
                this.pasajeros = 0      // Hay 21 y bajan 50 -> 0
                console.log(this.pasajeros)
                return this.pasajeros
            }      
            this.pasajeros -= pasajerosQueBajan
            console.log(this.pasajeros)
            return this.pasajeros
        }
    }
    /* En consola podemos ver el valor de this.pasajeros antes de cada return */
    escribirResultado("Suben 25 pasajeros: ", bus.subir(25)); // 25
    escribirResultado("Suben 35 pasajeros: ", bus.subir(35)); // 25 + 35 -> capacidad -> 40
    escribirResultado("Bajan 45 pasajeros: ", bus.bajar(45)); // 0
    
    // Comprobamos que el conductor está asignado
    // escribirResultado("Nombre del conductor: ", bus.conductor.nombre);      // José
    // escribirResultado("Licencia del conductor: ", bus.conductor.licencia)   // 1234

    // escribirResultado("Bajan 100", bus.bajar(100)); // 0
    // escribirResultado("Suben 35", bus.subir(35))    // 35
    // escribirResultado("Bajan 40", bus.bajar(40));   // 0

    // escribirResultado("Bajan 100", bus.bajar(100)); // 0
    // escribirResultado("Suben 35", bus.subir(200))   // 40
    // escribirResultado("Bajan 40", bus.bajar(50));   // 0
}

// Ej 7 
function ej7(){
   // let articuloPlantilla = {
    //    "nombreProd": "Televisor 4K",
    //    "precio": 450.00,
    //    "proveedor":{   
    //        "nombreProv":"Sharp",
    //        "email": "sharp@es.com",
   //         "telefono": "(+34) 656 536 348"
    //    },
   //     "telefono": function(){
    //        return {
    //            "nombre": this.proveedor.nombreProv,
    //            "telefono": this.proveedor.telefono
    //        }
    //    }
    //}
    let articulo1 = {
        "nombreProd": "Monitor",
        "precio": 200.00,
        "proveedor":{   
            "nombreProv":"TecnoShop",
            "email": "tcn@tecno.com",
            "telefono": "(+34) 656 536 348"
        },
        "telefono": function(){
            console.log("Teléfono de " + this.proveedor.nombreProv + " es " + this.proveedor.telefono)
            return {
                "nombreProv": this.proveedor.nombreProv,
                "telefonoProveedor": this.proveedor.telefono
            }
        }
    }
    // escribirResultado("Datos del Proveedor: ", JSON.stringify(articulo1.telefono()))
    // escribirResultado("Datos del Proveedor: ", "Tlf de " + articulo1.telefono().nombreProv + " es " + articulo1.telefono().telefonoProveedor)
    let nombre = articulo1.telefono().nombreProv
    let tlf = articulo1.telefono().telefonoProveedor
    
    escribirResultado("Datos del Proveedor: ", "Teléfono de " + nombre + " es " + tlf)

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
