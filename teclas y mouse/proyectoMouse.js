var plano = document.getElementById("base_de_dibujo");
var base = plano.getContext("2d");
var posicion = plano.getBoundingClientRect(); //Trae el left y el top con respecto a donde esta el canvas, coordenadas del Canvas
var boton = document.getElementById("botoncito");
boton.addEventListener("click", borrado);
var x = 0, y = 0, dibujando = false, color = "#C0392B", grosor = 2;

function defcolor(c)
{
    color = c;
}

function defgrosor(g)
{
    grosor = g;
}

plano.addEventListener("mousedown", function(e){ //Lo que ocurre mientras se tiene oprimido el click
    x = e.clientX - posicion.left; //Se le resta a la coordenada de la pantalla las coordenadas en x del canvas
    y = e.clientY - posicion.top; //Se le resta a la coordenada de la pantalla las coordenadas en y del canvas
    dibujando = true; //Cuando da click se empieza a dibujar
});

plano.addEventListener("mousemove", function(e){ //Lo que ocurre cuando se mueve el mouse mientras se tiene oprimido el click
    if(dibujando === true){ //El tripe igual, iguala valor y tipo
        dibujar(x, y, e.clientX - posicion.left, e.clientY - posicion.top);
        x = e.clientX - posicion.left;
        y = e.clientY - posicion.top;
    }
});

plano.addEventListener("mouseup", function(e){ //Lo que ocurre cuando se suelta el click, deja de dibujar
    if(dibujando === true){
       dibujar(x, y, e.clientX - posicion.left, e.clientY - posicion.top);
       x = 0;
       y = 0;
       dibujando = false;
    }
});

function dibujar(x1, y1, x2, y2){
    base.beginPath();
    base.strokeStyle = color;
    base.lineWidth = grosor;
    base.moveTo(x1, y1);
    base.lineTo(x2, y2);
    base.stroke();
    base.closePath();
}

function borrado()
{
    base.beginPath();
    base.strokeStyle = "white";
    base.fillStyle = "white";
    base.moveTo(0, 0);
    base.lineTo(1350, 0);
    base.lineTo(1350, 600);
    base.lineTo(0, 600);
    base.lineTo(0, 0);
    base.stroke();
    base.fill();
    base.closePath();
}