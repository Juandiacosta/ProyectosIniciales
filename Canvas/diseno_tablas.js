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
var azulColumna = document.getElementById("azulOscuro");
azulColumna.addEventListener("click", columnaAzul);
var negroColumna = document.getElementById("negro");
negroColumna.addEventListener("click", columnaNegra); 
var rojaColumna = document.getElementById("rojo");
rojaColumna.addEventListener("click", columnaRoja);
//var probando = document.getElementById("rojo");
//probando.addEventListener("click", pruebaRapida)

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
    lienzo.lineTo(400, 0);
    lienzo.lineTo(400, 300);
    lienzo.lineTo(0, 300);
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
        dibujaFilas("#5E01FF", 0, yi, 400, yf);
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
        dibujaFilas("black", 0, yi, 400, yf);
    }    

    dibujaFilas("black", 0, 299, 399, 299);
    dibujaFilas("black", 0, 1, 399, 1);
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
        dibujaFilas("#F7095C", 0, yi, 400, yf);
    }    

    dibujaFilas("#F7095C", 0, 299, 399, 299);
    dibujaFilas("#F7095C", 0, 1, 399, 1);
}

//function pruebaRapida()
//{
    // var xx = 1;
    // var yy = 2;
    // var z = xx + yy;
    // alert(z);
    //alert("Si funciona 🙌")
//}

function dibujaColumnas(color, x_arranque, y_arranque, x_final, y_final)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 2;
    lienzo.moveTo(x_arranque, y_arranque);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

function columnaAzul()
{
    var cantColumnas = parseInt(cantidadColumnas.value);
    var  xi, xf;
    var espacioHorizontal = ancho / cantColumnas;

    for(l = 0; l < cantColumnas; l++)
    {
        xi = l * espacioHorizontal;
        xf = l * espacioHorizontal;
        dibujaColumnas("#5E01FF", xi, 0, xf, 300);
    }
    dibujaColumnas("#5E01FF", 299, 1, 299, 1);
    dibujaColumnas("#5E01FF", 399, 1, 399, 299);
}

function columnaNegra()
{
    var cantColumnas = parseInt(cantidadColumnas.value);
    var  xi, xf;
    var espacioHorizontal = ancho / cantColumnas;

    for(l = 0; l < cantColumnas; l++)
    {
        xi = l * espacioHorizontal;
        xf = l * espacioHorizontal;
        dibujaColumnas("black", xi, 0, xf, 300);
    }
    dibujaColumnas("black", 299, 1, 299, 1);
    dibujaColumnas("black", 399, 1, 399, 299);
}

function columnaRoja()
{
    var cantColumnas = parseInt(cantidadColumnas.value);
    var  xi, xf;
    var espacioHorizontal = ancho / cantColumnas;

    for(l = 0; l < cantColumnas; l++)
    {
        xi = l * espacioHorizontal;
        xf = l * espacioHorizontal;
        dibujaColumnas("#F7095C", xi, 0, xf, 300);
    }
    dibujaColumnas("#F7095C", 299, 1, 299, 1);
    dibujaColumnas("#F7095C", 399, 1, 399, 299);
}