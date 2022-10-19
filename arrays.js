function solicitarnombre () {
  let nombreIngresado = prompt ("Ingrese su nombre por favor")
  alert ("Bienvenido a Kuishi Travel Agency, " + nombreIngresado)
  }
  
  solicitarnombre ();
  
  const Hotel = 400
  const Islas = 100
  const botes = 300
  
  function solicitarpedido () {
  let cantidadApedir = parseInt(prompt("Ingresa el numero de productos o servicio que va a reservar"))
  
  
  //console.log(`El costo de tu pedido es de $${total}.`);
  
  
  
  let opcion = prompt ("Escoger producto o servicio /Presione 1 para Hoteles, Presione 2 Para Islas y Presione 3 para botes/")
  
  if (opcion==1) {
      let total= cantidadApedir * Hotel
      alert ("El costo estimado es de " + total)
  }else if (opcion==2) {
      let total= cantidadApedir * Islas
      alert ("El costo estimado es de " + total)
  }else {
      if (opcion==3){
      let total= cantidadApedir * botes
      alert ("El costo estimado es de " + total)
      }else {
      alert ("Opcion erronea /Recuerde presione 1 para Hoteles, Presione 2 Para Islas y Presione 3 para botes/")
      }
  }
  
  
  }
  solicitarpedido ()
  