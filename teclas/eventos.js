var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    ARR: "w",
    ABJ: "s",
    IZQ: "a",
    DER: "d"
};

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento)
{
//    console.log(evento.keyCode);
//    console.log(evento.key); 
//    console.log(evento);

   switch(evento.keyCode)
   {
       case teclas.DOWN:
        console.log("abajo");
       break; 
       case teclas.UP:
        console.log("arriba");
       break;
       case teclas.LEFT:
        console.log("izquiera");
       break;
       case teclas.RIGHT:
        console.log("derecha");
       break; 
       default:
   }   
   switch(evento.key)
   {
        case teclas.ARR:
            console.log("Arriba con letra");
        break;
        case teclas.ABJ:
            console.log("Abajo con letra");
        break;
        case teclas.IZQ:
            console.log("Izquierda con letra");
        break;
        case teclas.DER:
            console.log("Derecha con letra");
        break;
        // default:
        //     console.log("Otra tecla");
        // break;
   }
}


