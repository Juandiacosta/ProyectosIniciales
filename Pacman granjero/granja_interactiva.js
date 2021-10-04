
var fondo = {
    url: "tile.png",
    cargaOK: false
};

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var pollo = {
    url: "pollo.png",
    cargaOK: false
};

var pacman = {
    url: "pacman.png",
    cargaOK: false,
};

var pacmanBueno = {
    url: "pacman_bueno.png",
    cargaOK: false,
};

document.addEventListener("keydown", muevePacman);
document.addEventListener("keyup", muevePacmanDirecciones);
var base = document.getElementById("base_de_dibujo");
var plano = base.getContext("2d");
var xPacman = 20;
var yPacman = 10; 

function muevePacman(evento)
{
    var movimiento = 10;

    var teclas = {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39 
    };

    switch(evento.keyCode){
        case teclas.UP:
            yPacman = yPacman - movimiento;
            dibujar();
            break;
        case teclas.DOWN:
            yPacman = yPacman + movimiento;
            dibujar();
            break;
        case teclas.RIGHT:
            xPacman = xPacman + movimiento;
            dibujar();
            break;
        case teclas.LEFT:
            xPacman = xPacman - movimiento;
            dibujar();
            break;
        default:
    }
}

function muevePacmanDirecciones(evento)
{
    var movimiento = 10;
    
    //console.log(evento);
    var direcciones = 
    {
        ARRIBA: "w",
        ABAJO: "s",
        IZQUIERDA: "a",
        DERECHA: "d"
    };

    switch(evento.key)
    {
        case direcciones.ARRIBA:
            yPacman = yPacman - movimiento;
            dibujar();
            break;
        case direcciones.ABAJO:
            yPacman = yPacman + movimiento;
            dibujar();
            break;
        case direcciones.DERECHA:
            xPacman = xPacman + movimiento;
            dibujar();
            break;
        case direcciones.IZQUIERDA:
            xPacman = xPacman - movimiento;
            dibujar();
            break;
        default:
    }
}


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

pacman.imagen = new Image();
pacman.imagen.src = pacman.url;
pacman.imagen.addEventListener("load", cargarPacman);

pacmanBueno.imagen = new Image();
pacmanBueno.imagen.src = pacmanBueno.url;
pacmanBueno.imagen.addEventListener("load", cargarPacmanBueno);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarPollos()
{
    pollo.cargaOK = true;
    dibujar();
}

function cargarPacman()
{
    pacman.cargaOK = true;
    dibujar();
}

function cargarPacmanBueno()
{
    pacmanBueno.cargaOK = true;
    dibujar();
}

var cantidadVacas = aleatoriedad(200, 350);
var cantidadPollos = aleatoriedad(200, 350);

function dibujar()
{
    if(fondo.cargaOK)
    {
        plano.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK)
    {
        console.log(cantidadVacas);
        for(v = 0; v <= cantidadVacas; v++)
        {
            var x1 = aleatoriedad(0, 1);
            var y1 = aleatoriedad(4.5, 21);
            x1 = x1 * 20;
            y1 = y1 * 20;
            plano.drawImage(vaca.imagen, x1, y1);
            var x2 = aleatoriedad(5, 6);
            var y2 = aleatoriedad(15, 21);
            x2 = x2 * 20;
            y2 = y2 * 20;
            plano.drawImage(vaca.imagen, x2, y2);
            var x3 = aleatoriedad(10, 11);
            var y3 = aleatoriedad(20, 21);
            x3 = x3 * 20;
            y3 = y3 * 20;
            plano.drawImage(vaca.imagen, x3, y3);
        }
    }
    if(pollo.cargaOK)
    {
        console.log(cantidadPollos);
        for(var c = 0; c <= cantidadPollos; c++)
        {
            var x1 = aleatoriedad(10, 22);
            var y1 = aleatoriedad(4.4, 6);
            x1 = x1 * 20;
            y1 = y1 * 20;
            plano.drawImage(pollo.imagen, x1, y1);
            var x2 = aleatoriedad(15, 22);
            var y2 = aleatoriedad(7, 13);
            x2 = x2 * 20;
            y2 = y2 * 20;
            plano.drawImage(pollo.imagen, x2, y2);
            var x3 = aleatoriedad(19, 22);
            var y3 = aleatoriedad(14, 22);
            x3 = x3 * 20;
            y3 = y3 * 20;
            plano.drawImage(pollo.imagen, x3, y3);
        }
    }
    if(pacmanBueno.cargaOK)
    {
        plano.drawImage(pacmanBueno.imagen, 310, 410);
    }
    if(pacman.cargaOK)
    {
        plano.drawImage(pacman.imagen, xPacman, yPacman);
        while(xPacman == 310 && yPacman == 410)
        {
            alert("Felicidades, atrapaste al Pacman");
            break;
        }
    }
}

function aleatoriedad(min, max)
{
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}