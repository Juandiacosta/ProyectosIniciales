var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
    // ARR: "w",
    // ABJ: "s",
    // IZQ: "a",
    // DER: "d"
};

document.addEventListener("keydown", dibujarTeclado);
var pizarra = document.getElementById("area_de_dibujo");
var cuadro = pizarra.getContext("2d");
var x = 150; //Variable inicial en x
var y = 150; //Variable inicial en y

dibujoTrazo("red", 149, 149, 151, 151, cuadro);

function dibujoTrazo(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath(); //Activa el lapiz
    lienzo.strokeStyle = color; //define el color del trazo
    lienzo.lineWidth = 3; //Define el grosor en pixeles de la línea
    lienzo.moveTo(xinicial, yinicial); //Posiciona el lapiz en el punto inicial
    lienzo.lineTo(xfinal, yfinal); //Traza la linea hacia otra coordenada
    lienzo.stroke(); //Permite que el trazo quede
    lienzo.closePath(); //Cierra el camino, se pueda trazar varias lineas antes de cerrarlo
}

function dibujarTeclado(evento)
{
   var colorcito = "brown";
   var movimiento = 10;
   switch(evento.keyCode)
   {
       case teclas.DOWN:
        dibujoTrazo(colorcito, x, y, x, y + movimiento, cuadro);
        y = y + movimiento;
       break; 
       case teclas.UP:
        dibujoTrazo(colorcito, x, y, x, y - movimiento, cuadro);
        y = y - movimiento;
       break;
       case teclas.LEFT:
        dibujoTrazo(colorcito, x, y, x - movimiento, y, cuadro);
        x = x - movimiento;
       break;
       case teclas.RIGHT:
        dibujoTrazo(colorcito, x, y, x + movimiento, y, cuadro);
        x = x + movimiento;
       break; 
       default:
   }   
//    switch(evento.key)
//    {
//         case teclas.ARR:
//             console.log("Arriba con letra");
//         break;
//         case teclas.ABJ:
//             console.log("Abajo con letra");
//         break;
//         case teclas.IZQ:
//             console.log("Izquierda con letra");
//         break;
//         case teclas.DER:
//             console.log("Derecha con letra");
//         break;
//         // default:
//         //     console.log("Otra tecla");
//         // break;
//    }
}

// document.addEventListener("mousedown", valorMouse);

// function valorMouse(evento)
// {
//     console.log(evento.which);
//     alert("Funciono");
// }

// document.addEventListener("keyup", dimeTecla);

// function dimeTecla(evento)
// {
//     console.log(evento);
// }


