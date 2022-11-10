/* Ejercicios con Objetos en JS */

// ej1() // Obj alumno y método que promedia notas 
// ej2() // Obj para calcular el precio neto de un producto
// ej3() // Obj para calcular la densidad de la piedra en kg/m3 y en gr/cc 
// ej4() // Obj que representa a una cuenta bancaria 
// ej5() // Obj ficha de entrenamiento 
// ej6()// Objs bus y conductor 
// ej7() // Objs Artículo y Proveedor
// ej8() // Objs Alumnos 
ej9() // Objs Cliente y Factura 

// Ejercicio 1 - Obj para guardar notas de alumno y método que promedia notas
// Propiedades: nombre, apellido, ingles, prog, html (asignaturas)
// Método: calcular media de las tres asignaturas
function ej1(){
    // Definición de clase Alumno para crear obj de alumnos 
    class Alumno {
        // Definimos constructor de esta clase 
        constructor(nombre, apellido, ingles, prog, html){
            this.nombre = nombre
            this.apellido = apellido
            this.ingles = ingles
            this.prog = prog
            this.html = html
        }
        // Resto de métodos por debajo 
        promediarNotas(){
            let res = (this.ingles + this.prog + this.html) / 3
            return res.toFixed(2)
        }
    }
/*let alumno = {
        "nombre": "Pepe",
        "apellido": "Valiente",
        "ingles": 7.5,
        "prog": 6.75,
        "html": 8,
        "promediarNotas": function(){
            let res = (this.ingles + this.prog + this.html) / 3
            return res.toFixed(2)

             Alternatica del return sin variables adicionales: 
             return ( this.ingles + this.prog + this.html) / 3).toFixed(2)
        }
   }*/
 // Anteriormente, teníamos que escribir cada objeto por separado. 
        let alumno = new Alumno("Pepe", "Valiente", 8, 7.5, 6.75)
        let alumno2 = new Alumno("María", "De la Fuente", 10, 5, 7)
        let alumno3 = new Alumno("Ana", "Meneses", 7, 8, 9)
        // Ahora, podemos instanciar la clase de Alumno y crear objetos de Alumno ^
  
        escribirResultado("Promedio de notas", alumno3.promediarNotas())
}

// Ejercicio 2 - Cálclo del precio neto de un producto aplicando descuento 
function ej2(){
    class Producto{
        // Ejemplo de parámetros por defecto en constructor 
        constructor(precio = 100, descuento = 0){
            this.precio = precio
            this.descuento = descuento
        }
        calcularPrecioNeto(){
            let valorDto = (this.descuento / 100) * this.precio
            return this.precio - valorDto
        }
    }
    /*let producto = {
        "precio": 200,      // €
        "descuento": 30,    // esto es un %
        "calcularPrecioNeto": function(){
            let valorDto = (this.descuento / 100) * this.precio
            return this.precio - valorDto
        }
       
    }*/

    // Objetos producto
    let producto = new Producto()           // 100€     0% dto.
    let producto2 = new Producto(200)       // 200 €    0% dto.
    let producto3 = new Producto(300, 30)   // 300€     30% dto.
    escribirResultado("Calculamos precio neto", producto3.calcularPrecioNeto() + "€")
}

// Ejercicio 3 - Objeto piedra que tiene masa y volumen a partir de lo cual se calcula la densidad 
function ej3(){
    class Piedra{
        constructor(color = "", 
                    origen = "", 
                    materiales = [], 
                    masaGr = 1, 
                    masaKg = 1/1000,
                    volumenCc = 1,
                    volumenM3 = 1/1000000
                    )
        {
            this.color = color;
            this.origen = origen;
            this.materiales = materiales;
            this.masaGr = masaGr;
            this.masaKg = masaKg;
            this.volumenCc = volumenCc;
            this.volumenM3 = volumenM3;
        }
        calcDensidadKgM3(){
            return (this.masaKg / this.volumenM3).toFixed(5); // kg/m3
        }
        calcDensidadGrCc(){
            return (this.masaGr / this.volumenCc).toFixed(5); // gr/cc
        }
    }
    /*let piedra ={
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
    }*/

    /* Creamos objetos de clase Piedra */
    let piedra = new Piedra()
    let piedra2 = new Piedra("gris", "España", [], 100, 0.1, 30, 0.001)

    escribirResultado("Densidad en kg/m3: ", piedra.calcDensidadKgM3() + " kg/m3")
    //escribirResultado("Densidad en gr/cc: ", Piedra.calcDensidadGrCc() + " gr/cc")
}

// Ejercicio 4- Objeto que emula una cuenta de banco con ingresar() y retirar ()
    // consultarSaldo() escribe el saldo actual 
function ej4(){
    class Cuenta{
        constructor(balance = 0){
            this.balance = balance
        }
        ingresar(cantidad = 0){
            this.balance += cantidad       
            console.log("Balance actual: " + this.balance)
            return this.balance.toFixed(2) + " €"
        }
        retirar(cantidad){
            if(cantidad > this.balance){
                alert("No se puede retirar esa cantidad")
                return 0
            } else if( cantidad < 0 ){
                alert("No se admiten cantidades negativas")
                return 0 
            }
            this.balance -= cantidad         // limiatos los decimales a 2 
            return cantidad.tofixed(2)
        }
        consultarBalance(){
            return this.balance + " €"
        }
    }
    /* let cuenta = {
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
    */

    /* Objetos cuenta de clase Cuenta*/
    let cuenta = new Cuenta()
     //escribirResultado("Retirar 200 €: ", cuenta.retirar(200))
    // escribirResultado("Retirar -1 €: ", cuenta.retirar(-1))
    cuenta.ingresar(120)
    /*cuenta.retirar(1)
    cuenta.retirar(3.50)
    cuenta.retirar(100)
    cuenta.ingresar(19.98)*/
    escribirResultado("Balance actual: ", cuenta.consultarBalance())
    //escribirResultado("Retirar 50 €: ", "Balance retirado: " + cuenta.retirar(50))
    // escribirResultado("Ingresamos una cantidad con decimales €: ", cuenta.ingresar(10.12345));

}

// Ej 5 - Ficha de entrenamiento
function ej5(){
    class Ficha{
        constructor(nombre = "", 
                    apellido = "", 
                    sesiones = 0.0, 
                    numSesiones = 0
                    )
            {
            this.nombre = nombre
            this.apellido = apellido
            this.sesiones = sesiones
            this.numSesiones = numSesiones
        }
        anotarSesion(kms){
            if(kms <0 ){
                let msj = "No se pueden registrar valores negativos"
                alert(msj)
                return msj
            }
            this.sesiones += kms    // Guardamos los km de todas las sesiones 
            this.numSesiones += 1   // Incrementamos el contador de sesiones 
            return this.sesiones + "km"
        }
        calcMedia(){
            if (this.sesiones == 0 ){alert("Aún no has realizado una sesión!!"); 
            return "No hay sesiones registradas"
        }
            return (this.sesiones / this.numSesiones).toFixed(2) + " km por sesión"
        }
    }
    /* let ficha = {
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
    */

    /* Objeto ficha de la clase Ficha*/
    let ficha = new Ficha()
    // Añadimos sesiones -> 100 km y 3 sesiones -> 33.33 km / sesion 
    ficha.anotarSesion(20);
    ficha.anotarSesion(70);
    ficha.anotarSesion(10);

    // escribirResultado("Anotar -1 km: ", ficha.anotarSesion(-1));    // Debe arrojar alert
    // escribirResultado("Media con 0 sesiones: ", ficha.calcMedia())  // Debe arrojar alert
    // escribirResultado("Anotar +10 km: ", ficha.anotarSesion(10));   // Debe retornar '10 km'
    // escribirResultado("Calculamos media en ficha de " + ficha.nombre, ficha.calcMedia());     // Debe retornar '10 km por sesión'
    
}

// Ej 6 - Bus y conductor, bajar y subir pasajeros 
function ej6(){
    class Conductor{
        constructor(nombre = "Conductor por defecto", licencia = 1234){
            this.nombre = nombre
            this.licencia = licencia
        }
        toString(){
            return "Conductor: " + this.nombre + ", con número de licencia" + this.licencia
        }
    }
    class Bus{
        constructor(
                    linea = "",
                    empresa = "",
                    capacidad = 40,
                    pasajeros = 0,
                    conductor = new Conductor("Pepe", 9087)
                    )
        {
            this.linea = linea
            this.empresa = empresa
            this.capacidad = capacidad
            this.pasajeros = pasajeros
            this.conductor = conductor
        }
        subir(pasajerosQueSuben){
            if(pasajerosQueSuben >= this.capacidad){
                this.pasajeros = this.capacidad         // 50-> 40
                return this.pasajeros
            } else if(this.pasajeros + pasajerosQueSuben >= this.capacidad){
                this.pasajeros = this.capacidad         // 39 + 39 = 78 -> NO
                return this.pasajeros
            }
                // 10 + 11 = 21 -> SI
                this.pasajeros += pasajerosQueSuben
                return this.pasajeros
        }
        bajar(pasajerosQueBajan){
            if( pasajerosQueBajan >= this.capacidad){ 
                this.pasajeros = 0 
                return this.pasajeros}      // 100 -> 0
            else if( pasajerosQueBajan > this.pasajeros) { 
                this.pasajeros = 0      // Hay 21 y bajan 50 -> 0
                return this.pasajeros
            }      
            this.pasajeros -= pasajerosQueBajan
            return this.pasajeros
        }

    }
    /* let bus = {
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
    } */

    /* Objeto de clase Bus con objeto Conductor en una propiedad*/
    let bus = new Bus
    // bus.capacidad = 100
    /* En consola podemos ver el valor de this.pasajeros antes de cada return */
    //escribirResultado("Suben 25 pasajeros: ", bus.subir(25)); // 25
    //escribirResultado("Suben 35 pasajeros: ", bus.subir(35)); // 25 + 35 -> capacidad -> 40
    //escribirResultado("Bajan 45 pasajeros: ", bus.bajar(45)); // 0
    
    // Comprobamos que el conductor está asignado
    //escribirResultado("Nombre del conductor: ", bus.conductor.nombre);      // José
    // escribirResultado("Licencia del conductor: ", bus.conductor.licencia)   // 1234

     escribirResultado("Bajan 100", bus.bajar(100)); // 0
     escribirResultado("Suben 35", bus.subir(35))    // 35
     escribirResultado("Bajan 34", bus.bajar(40));   // 0

    // escribirResultado("Bajan 100", bus.bajar(100)); // 0
    // escribirResultado("Suben 35", bus.subir(200))   // 40
    // escribirResultado("Bajan 40", bus.bajar(50));   // 0
}

// Ej 7 - Artículo y proveedor 
function ej7(){
    class Proveedor{
        constructor(
            nombre = "Tecnoshop",
            telefono = "(+34) 123 456 789",
            email = "tcn@tecno.com"
            )
        {
            this.nombre = nombre;
            this.telefono = telefono;
            this.email = email;
        }
        datos(){
            return "-> El teléfono del " + this.nombre + " es " + this.telefono + " con email: " + this.email;
        }
    }
    class Articulo{
        constructor(
            nombre = "Artículo por defecto", 
            precio = 0.99, 
            proveedor = new Proveedor("Proveedor por defecto", "123456789", "email@mail.com")
            )
        {
            this.nombre = nombre;
            this.precio = precio;
            this.proveedor = proveedor;
        }
        datos(){
            return "Artículo: " + this.nombre + "\nCon precio: " + this.precio + " €.";
        }
        telefono(){
            return this.proveedor;
        }
        datosProveedor(){
            return this.proveedor.datos();
        }
    }
    // let articuloPlantilla = {
    //     "nombreArticulo": "Producto 123",
    //     "precio": 100.00,
    //     "proveedor": {
    //         "nombreProveedor": "Proveedor 12345",
    //         "email": "test@test.com",
    //         "telefono": "(+34) 123 456 789"
    //     },
    //     "telefono": function(){
    //         return {
    //             "nombre": this.proveedor.nombreArticulo,
    //             "telefono": this.proveedor.telefono
    //         }
    //     }
    // }
    
    /*let articulo = {
        "nombreArticulo": "Monitor",
        "precio": 200.00,
        "proveedor": {
            "nombreProveedor": "Tecnoshop",
            "email": "tcn@tecno.com",
            "telefono": "(+34) 123 456 789"
        },
        "telefono": function(){
            console.log("Teléfono de " + this.proveedor.nombreProveedor + " es " + this.proveedor.telefono);
            return {
                "nombreProveedor": this.proveedor.nombreProveedor,
                "telefonoProveedor": this.proveedor.telefono
            }
        },
        "datosProveedor": function(){
            return "XYZ El teléfono del " + this.proveedor.nombreProveedor + " es " + this.proveedor.telefono;
        }
    }
    */

    // Escribimos datos de un artículo por defecto
    // escribirResultado("Artículo por defecto: ", new Articulo().datos())

    // Escribimos un artículo por defecto con Proveedor personalizado (sobreescrito)
    escribirResultado(
        "Datos proveedor asignado (sobreescrito):", 
        new Articulo(undefined, undefined, new Proveedor("Nuevo Proveedor", "098", "Email@test.com")).datosProveedor()
    )

    // Escribimos datos del Proveedor del artículo sobreescrito y Proveedor sobreescrito
    /*
    escribirResultado(
        "Datos por defecto del proveedor asignado del artículo por defecto: ", 
        new Articulo("nombre", 1, new Proveedor("pepito", "123", "mail")).datosProveedor()
        )
    */

    // Escribimos datos de un artículo creado en la llamada de escribirResultado
    // escribirResultado("String formateado en método: ", new Articulo("Mi Artículo #1121", 300).datos())

    // Escribimos datos de un nuevo Proveedor
    // escribirResultado("Datos del Proveedor: ", new Proveedor("Pepe", "1212", "email123").datos())
}

// Ej 8 - Alumnos
function ej8(){
    class Alumno{
        //
        constructor(
                    nombre = "Nombre",
                    apellido = "Apellido por defector",
                    matricula = 10000,
                    calificacion = 0.00
        ){
            this.nombre = nombre
            this.apellido = apellido
            this.matricula = matricula
            this.calificacion = calificacion
        }
        calificar(nota){
            this.calificacion = nota
            return this.calificacion
        }
        datos(){
            return "Alumnx: " + this.nombre + ", " + this.apellido + " con matrícula: " + this.matricula + " tiene nota: " + this.calificacion
        }
    }

    /* Objs alumno creados por separado (sin clase)
    let alumno1 = {
        "nombre":"María",
        "apellido":"De la Fuente",
        "matricula": 12345,
        "calificacion": 1,
        "calificar": function(nota){
            this.calificacion = nota
            return this.calificacion
        },
        "datos": function(){
            return "Alumnx " + this.nombre + " " + this.apellido + " con matricula " + this.matricula + "tiene nota: " + this.calificacion
        } 
    }
    let alumno2 = {
        "nombre": "Pepe",
        "apellido": "Valiente",
        "matricula": 12358,
        "calificacion": 1,
        "calificar": function(nota){
            this.calificacion = nota;
            return this.calificacion;
        },
        "datos": function(){
            return "Alumnx " + this.nombre + " " + this.apellido + " con matrícula " + this.matricula + " tiene nota: " + this.calificacion;
        }
    }
    let alumno3 = {
        "nombre": "Juanito",
        "apellido": "Martínez",
        "matricula": 25698,
        "calificacion": 1,
        "calificar": function(nota){
            this.calificacion = nota;
            return this.calificacion;
        },
        "datos": function(){
            return "Alumnx " + this.nombre + " " + this.apellido + " con matrícula " + this.matricula + " tiene nota: " + this.calificacion;
        }
    }
    let alumno4 = {
        "nombre": "Ana",
        "apellido": "Gómez",
        "matricula": 34587,
        "calificacion": 1,
        "calificar": function(nota){
            this.calificacion = nota;
            return this.calificacion;
        },
        "datos": function(){
            return "Alumnx " + this.nombre + " " + this.apellido + " con matrícula " + this.matricula + " tiene nota: " + this.calificacion;
        }
    }*/

    let alumno1 = new Alumno("María", "Pérez", 12345, 6.5)
    let alumno2 = new Alumno("Pepe", "García", 56789, 8)
    let alumno3 = new Alumno("Manuel", "Valiente", 58465, 9)
    let alumno4 = new Alumno("Teresa", "Meneses", 25165, 7)
    
    // Asignamos notas
    // alumno1.calificar(7)
    // alumno2.calificar(5)
    // alumno3.calificar(8)
    // alumno4.calificar(10)

    // Usamos string datos para guardar todas las salidas
    let datos = alumno1.datos()
    datos += "\n\n" + alumno2.datos()
    datos += "\n\n" + alumno3.datos()
    datos += "\n\n" + alumno4.datos()

    escribirResultado("Notas de los alumnos: ", datos)
}
    

function ej9(){
    class Cliente{
        constructor(
                    nombre = "Cliente",
                    apellido = "Apellido",
                    dni = "12345678A",
                    direccion = "Dirección",
                    telefono = "+34 656 53 63 48",
                    email = "email@cliente.com",
        ){
            this.nombre = nombre
            this.apellido = apellido
            this.dni = dni
            this.direccion = direccion
            this.email = email
            this.telefono = telefono
            this.whatsapp = "123456789"
        }
    }
    class Factura {
        constructor(
            idCliente = 1, 
            importeTotal= 0.00,
            estado = "no emitida"
            ){
                this.idCliente = idCliente
                this.importeTotal = importeTotal
                this.estado = estado
                this.clientesArray = [
                    new Cliente("Pepe", "Pérez", "12345678A", "Calle sin nombre 098", "juan@perez.com", "+34 123456789"),
                    new Cliente("Carla", "Gómez", "12345589B", "Calle con nombre 100", "ana@perez.com", "586456789"),
                    new Cliente("Ramiro", "Ramos", "47856985Z", "Av. del Manzanares 123", "maria@perez.com", "001-145-236-789")
                    /*{"nombre": "Cliente 1", "teléfono": "123"},
                    {"nombre": "Cliente 1"},
                    {"nombre": "Cliente 3"}*/
                ]
            }
            pagar(){
                this.estado = "pagada"
                return "La factura de " + this.importeTotal + " está '" + this.estado + "'"
            }
            imprimir(){
                this.estado = "pendiente";
                return "La factura está de " + this.importeTotal + " está '" + this.estado + "'";
            }
            datosClienteExt(clienteExt){
                // Recibimos el cliente desde "fuera" del objeto
                return "Nombre: " + clienteExt.nombre + ", " + "Apellido: " + clienteExt.apellido;
            }
            datosClienteInt(){
                let clienteInt = this.clientesArray[this.idCliente];
                return "Nombre: " + clienteInt.nombre + ", " + "Apellido: " + clienteInt.apellido;
            }
        }
    /* Obj cliente 1-3
    let cliente1 = {
        "nombre": "Juan", 
        "apellido": "Pérez", 
        "DNI": "12345678A",
        "direccion": "Calle sin nombre 098",
        "email": "juan@perez.com",
        "telefono": "+34 123456789"
    }
    let cliente2 = {
        "nombre": "Ana", 
        "apellido": "Pérez", 
        "DNI": "12345678A",
        "direccion": "Calle sin nombre 098",
        "email": "ana@perez.com",
        "telefono": "+34 123456789"
    }
    let cliente3 = {
        "nombre": "María", 
        "apellido": "Pérez", 
        "DNI": "12345678A",
        "direccion": "Calle sin nombre 098",
        "email": "maria@perez.com",
        "telefono": "+34 123456789"
    }*/
    
    
    /* Factura
    let factura = {
        "idCliente": 1,       // 0, 1, 2
        "importeTotal": 100,    // Asignamos importe en cada caso
        "estado": "no emitida", // pendiente o pagada
        "pagar": function(){
            this.estado = "pagada"
            console.table({"idCliente": this.idCliente, "importeTotal": this.importeTotal, "estado": this.estado});
            return "La factura está '" + this.estado + "'."
        },
        "imprimir": function(){
            this.estado = "pendiente";
            // arrayClientes[0] -> cliente1
            // arrayClientes[1] -> cliente2
            // arrayClientes[2] -> cliente3
            console.table(arrayClientes[this.idCliente]) // por defecto es cliente1
            console.table({"idCliente": this.idCliente, "importeTotal": this.importeTotal, "estado": this.estado});
            return "La factura está '" + this.estado + "' de pago.";
        }
    }*/
    
    let arrayClientes = 
    [new Cliente("Pepe", "Pérez","65987452A","Calle sin nombre 098","juan@perez.com","+34 656536348"), 
    new Cliente("Pablito", "Pérez", "64875421A", "Calle con nombre 100", "ana@perez.com","693548712"), 
    new Cliente("Carla", "Pérez", "12345678A", "Calle Falsa 123", "maria@perez.com","658-242-321")]  // "lista" de clientes

//escribirResultado("Emitimos factura ", new Factura(0).imprimir())
//escribirResultado("Emitimos factura ", new Factura(0).datosClienteExt(clientesArray[0]))
//escribirResultado("Emitimos factura ", new Factura(0).datosClienteInt(clientesArray[0]))
escribirResultado("Pagamos factura: ", new Factura(0, 300).pagar())

// escribirResultado("Pagamos factura: ", factura.pagar())
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
