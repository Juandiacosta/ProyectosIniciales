var bosquejo = document.getElementById("baseGranja");
var cuadro = bosquejo.getContext("2d");

var wallpaper = {
    url: "tile.png",
    cargaOK: false
};

var vaca = {
    url: "vaca.png",
    cargaOK: false
    //imagen
};

var pollo = {
    url: "pollo.png",
    cargaOK: false
    //imagen
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
    //imagen
};

var cantidadVacas = aleatoriedad(40, 50);
var cantidadPollos = aleatoriedad(40, 50);
var cantidadCerdos = aleatoriedad(40, 50);


wallpaper.imagen = new Image(); //No dar importancia al mensaje de la propiedad no existe en el tipo
wallpaper.imagen.src = wallpaper.url;
wallpaper.imagen.addEventListener("load", cargarWallpaper);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarWallpaper()
{
    wallpaper.cargaOK = true;
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

function cargarCerdos()
{
    cerdo.cargaOK = true;
    dibujar();
}

function dibujar()
{
    if(wallpaper.cargaOK)
    {
        cuadro.drawImage(wallpaper.imagen, 0, 0);
    }
    if(vaca.cargaOK)
    {
        console.log(cantidadVacas);
        for(var v = 0; v < cantidadVacas; v++)
        {
            var x = aleatoriedad(0, 5);
            var y = aleatoriedad(3, 5.5);
            var x = x * 84;
            var y = y * 50.4;
            cuadro.drawImage(vaca.imagen, x, y);
        }
    }
    if(pollo.cargaOK)
    {
        console.log(cantidadPollos);
        for(var p = 0; p < cantidadPollos; p++)
        {
            var x = aleatoriedad(0, 7);
            var y = aleatoriedad(4, 4.7);
            var x = x * 60;
            var y = y * 85;
            cuadro.drawImage(pollo.imagen, x, y);
        }
    }
    if(cerdo.cargaOK)
    {
        console.log(cantidadCerdos);
        for(var c = 0; c < cantidadCerdos; c++)
        {
            var x = aleatoriedad(0, 5);
            var y = aleatoriedad(0.2, 6);
            var x = x * 84;
            var y = y * 17.2;
            cuadro.drawImage(cerdo.imagen, x, y);
        }
    }
}

function aleatoriedad(min, max)
{
    resultado = Math.floor(Math.random() * (max - min + 1)) + min; //Operación para hallar números aleatorios dentro de un rango
    //console.log(Math.random());
    return resultado;
}

