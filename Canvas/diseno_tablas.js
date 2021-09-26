var cantidadFilas = document.getElementById("filas");
var cantidadColumnas = document.getElementById("columnas");
var azulMarino = document.getElementById("tablaAguaMarina");
azulMarino.addEventListener("click", tablaMarina);
var beige = document.getElementById("tablaBeige");
beige.addEventListener("click", tablaBeige);
var blanco = document.getElementById("tablaBlanco");
blanco.addEventListener("click", tablaBlanca);
var oscuroAzul = document.getElementById("azulOscuro");
oscuroAzul.addEventListener("click", lineasAzules);
// var oscuroNegro = document.getElementById("negro");
// oscuroNegro.addEventListener("click", lineasNegro);
// var intensoRojo = document.getElementById("rojo");
// intensoRojo.addEventListener("click", lineasRojas);

var estructura = document.getElementById("base");
var ancho = estructura.width;
var extenso = estructura.height;
var lienzo = estructura.getContext("2d");

function dibujaFondo(colorFondo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = colorFondo;
    lienzo.fillStyle = colorFondo;
    lienzo.lineWidth = 2;
    lienzo.moveTo(0, 0);
    lienzo.lineTo(250, 0);
    lienzo.lineTo(250, 100);
    lienzo.lineTo(0, 100);
    lienzo.lineTo(0, 0);
    lienzo.stroke();
    lienzo.fill();
    lienzo.closePath();
}

function dibujaFila(colorTrazo, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = colorTrazo;
    lienzo.lineWidth = 2;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function tablaMarina()
{
    dibujaFondo("#03F5F7");
}

function tablaBeige()
{
    dibujaFondo("beige");
}

function tablaBlanca()
{
    dibujaFondo("whitesmoke");
}

// function calculoLineasVerticales()
// {
//     var espacioVertical = ancho / lineas;
//     for(l = 0; l < lineas; l++)
//     {
//         yiv = ((l * espacioVertical) + 10);
//         yfv = (250 - ((l * espacioVertical)+ 10));
//         dibujaFila(colorTrazo, 0, yiv, 250, yfv);
//     }
// }

// function lineasAzules()
// {
//     var lineas = parseInt(cantidadFilas.value);
//     //var l = 0;
//     var yih, yfh, xiv, xfv;
//     var colorTrazo = "#5E01FF";

//     calculoLineasVerticales();
// }

