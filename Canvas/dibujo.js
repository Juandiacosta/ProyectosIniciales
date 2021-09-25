var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("Ilustración"); //Trae un elemento del documento HTML mediante su ID, en este caso la etiqueta canvas
var ancho = d.width;
var lienzo = d.getContext('2d'); //Trae el contexto para el dibujo, en este caso 2d


function dibujoTrazo(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath(); //Activa el lapiz
    lienzo.strokeStyle = color; //define el color del trazo
    lienzo.lineWidth = 1; //Define el grosor en pixeles de la línea
    lienzo.moveTo(xinicial, yinicial); //Posiciona el lapiz en el punto inicial
    lienzo.lineTo(xfinal, yfinal); //Traza la linea hacia otra coordenada
    lienzo.stroke(); //Permite que el trazo quede
    lienzo.closePath(); //Cierra el camino, se pueda trazar varias lineas antes de cerrarlo
}

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var l = 0;
    //var lineas = 30;
    var yi, xf;
    var trazado = "#BF28B5"
    var espacio = ancho / lineas;

    //dibujoTrazo("#BF28B5", 10, 300, 220, 10);

    while(l < lineas)
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujoTrazo(trazado, 0, yi, xf, 300);
        l++;
        console.log("Linea " + l);
        //yi = 10 *l
        //xf = 10 * (l + 1)
    }

    dibujoTrazo("yellow", 1, 1, 1, 299);
    dibujoTrazo("yellow", 1, 299, 299, 299);

    for(l = 0; l < lineas; l++) 
    {
        yi = 300 - (l * espacio);
        xf = 300 - ((l * espacio) + 10);
        dibujoTrazo(trazado, 300, yi, xf, 0);
        //yi = 300 - (l * 10)
        //xf = 300 - ((l * 10) + 10)
    }   

    dibujoTrazo("yellow", 1, 1, 299, 1);
    dibujoTrazo("yellow", 299, 299, 299, 1);
}
