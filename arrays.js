//fijo en 0 las variables globales a usar dentro del ciclo.
let cantidadServicios= 0;
let eleccionServicio = 0;
let acumulador = 0;
let carrito = [];
let servicioElegido =[];
let newStockserviciosDisponibles =[];

//construyo una clase creadora de objetos
class serviciosturisticos{
    constructor(id, nombre,  precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

//creacion de objetos de la clase servicioturisticos
const Servicio1 = new serviciosturisticos(1, "Hoteles", 400, 10);
const Servicio2 = new serviciosturisticos(2, "Islas", 100, 10);
const Servicio3 = new serviciosturisticos(3, "Botes", 300, 3);

let serviciosDisponibles = [Servicio1, Servicio2, Servicio3];

cicloDeEleccionServicio();

//el usuario ingresa servicio a comprar.
function cicloDeEleccionServicio(){
    let totalAPagar= 0
    while (eleccionServicio != undefined){
        eleccionServicio = prompt(
            `Ingrese el  número o codigo del servicio deseado. 
            - 1: Hoteles, escoger el numero de personas x numero de dias (otorgaremos valor estimado).
            - 2: Islas, escoger el numero de pasadias a disfrutar en un solo dia.
            - 3: Botes, escoger el numero de botes a reservar (maximo tres por persona)
            Ingrese fin para finalizar la eleccion.`
        );

        if (eleccionServicio == "fin"){
            break;
        }

        servicioElegido = serviciosDisponibles.find(
            (servicio) => servicio.id == eleccionServicio,
        );
        console.log(servicioElegido);

        //corroboro que el artículo ingresado sea válido.
        const corroboracionServicioSeleccionado = serviciosDisponibles.some(
            (servicio) => servicio.id == eleccionServicio);
        if(corroboracionServicioSeleccionado == true){
            console.log("El artículo es correcto.")
        }else{
            console.warn("Ingresó un artículo incorrecto.")
            continue; 
        } 

        cantidadServicios = parseInt(prompt ("Ingrese la cantidad de servicio escogido que desea comprar."));
        console.log(cantidadServicios);
        console.log(servicioElegido.stock);
        
        //Agrego al carrito el servicio que eligio el usuario. Primero corroboro que se encuentre disponible la cantidad que desea. 
        let agregarACarrito = addShop(servicioElegido);
        if (agregarACarrito  == false){
            continue
        }
        
        //calculo el total a pagar.
        let parcialAPagar = carrito.reduce((suma,servicio)=>suma+servicio.precio,0);
        totalAPagar = parcialAPagar * cantidadServicios;
        alert("La cantidad total a pagar es $ " + totalAPagar);
    }
    datospaPago(totalAPagar)
}

//le pido al usuario que ingrese la cantidad de servicios que desea adquirir.

function addShop(serviciot){
    if (cantidadServicios <= serviciot.stock){
        carrito.push(serviciot);
        serviciot.stock -= cantidadServicios;
        value = true
    }else{
        alert("El artículo no posee esa cantidad disponible, vuelva a intentarlo.");
        value = false
    }
    
    console.table(carrito);
    console.table(serviciosDisponibles);
    return value
}

function datospaPago(totalAPagar){
    //datos usuario
        let nombreYApellido= prompt("Ingrese su nombre y apellido.");
        let domicorreo= prompt("Ingrese su domicilio completo y ciudad");
        let correo= prompt ("Ingrese su correo de facturacion");
        let formadepago= prompt ("Ingrese su forma de pago (tarjeta, efectivo o transferencia");

        alert(`Los datos ingresados son: servicio a nombre de ${nombreYApellido} domiciliado en ${domicorreo} , y se facturara a su correo ${correo}, el metodo de pago sera ${formadepago}, recuerde que el total a pagar es ${totalAPagar}, si nuestro colaborador(a) NO le entrega la FACTURA, su servicio es GRATIS`);
        // cicloDeEleccionServicio();
}