var cantidadFilas = document.getElementById("filas");
var cantidadColumnas = document.getElementById("columnas");
var azulMarino = document.getElementById("tablaAguaMarina");
azulMarino.addEventListener("click", tablaMarina);
var beige = document.getElementById("tablaBeige");
beige.addEventListener("click", tablaBeige);
var blanco = document.getElementById("tablaBlanco");
blanco.addEventListener("click", tablaBlanca);
var oscuroAzul = document.getElementById("azulOscuro");
oscuroAzul.addEventListener("click", filasAzules);
var oscuroNegro = document.getElementById("negro");
oscuroNegro.addEventListener("click", filasNegras);
var intensoRojo = document.getElementById("rojo");
intensoRojo.addEventListener("click", filasRojas);
var probando = document.getElementById("rojo");
probando.addEventListener("click", pruebaRapida)

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

function dibujaFilas(color, x_arranque, y_arranque, x_final, y_final)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth =2;
    lienzo.moveTo(x_arranque, y_arranque);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

function filasAzules()
{
    var cantFilas = parseInt(cantidadFilas.value);
    var yi, yf;
    var espaciovertical = extenso / cantFilas;

    for(l = 0; l < cantFilas; l++)
    {
        yi = l * espaciovertical;
        yf = l * espaciovertical;
        dibujaFilas("#5E01FF", 0, yi, 250, yf);
    }

    dibujaFilas("#5E01FF", 0, 99, 250, 99);
    dibujaFilas("#5E01FF", 0, 1, 250, 1);
}

function filasNegras()
{
    var cantFilas = parseInt(cantidadFilas.value);
    var yi, yf;
    var espaciovertical = extenso / cantFilas;

    for(l = 0; l < cantFilas; l++)
    {
        yi = l * espaciovertical;
        yf = l * espaciovertical;
        dibujaFilas("black", 0, yi, 250, yf);
    }    

    dibujaFilas("black", 0, 99, 250, 99);
    dibujaFilas("black", 0, 1, 250, 1);
}

function filasRojas()
{
    var cantFilas = parseInt(cantidadFilas.value);
    var yi, yf;
    var espaciovertical = extenso / cantFilas;

    for(l = 0; l < cantFilas; l++)
    {
        yi = l * espaciovertical;
        yf = l * espaciovertical;
        dibujaFilas("#F7095C", 0, yi, 250, yf);
    }    

    dibujaFilas("#F7095C", 0, 99, 250, 99);
    dibujaFilas("#F7095C", 0, 1, 250, 1);
}

function pruebaRapida()
{
    // var xx = 1;
    // var yy = 2;
    // var z = xx + yy;
    // alert(z);
    alert("Si funciona 🙌")
}
