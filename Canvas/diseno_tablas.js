var cantidadFilas = document.getElementById("filas");
var cantidadColumnas = document.getElementById("columnas");
var azulMarino = document.getElementById("tablaAguaMarina");
azulMarino.addEventListener("click", tablaMarina);
var beige = document.getElementById("tablaBeige");
beige.addEventListener("click", tablaBeigin);
var blanco = document.getElementById("tablaBlanco");
blanco.addEventListener("click", tablaBlanca);
var oscuroAzul = document.getElementById("azulOscuro");
oscuroAzul.addEventListener("click", lineasAzules);
var oscuroNegro = document.getElementById("negro");
oscuroNegro.addEventListener("click", lineasNegro);
var intensoRojo = document.getElementById("rojo");
intensoRojo.addEventListener("click", lineasRojas);

var estructura = document.getElementById("base");
var ancho = estructura.width;
var extenso = estructura.height;
var lienzo = estructura.getContext('2d');

function dibujaFila(colorTrazo, xinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    // lienzo.fillStyle = colorFondo;
    lienzo.strokeStyle = colorTrazo;
    lienzo.lineWidt = 2;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujaFondo(colorFondo)
{
    lienzo.beginPath();
    
    lienzo.closePath();
}

function tablaMarina()
{
    dibujaFondo("#03F5F7");
}

