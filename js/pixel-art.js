var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// GUIA 1.1: VARIABLES GLOBALES
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var mouseClickeado = false;


// GUIA 1.2: CREACION PALETA DE COLORES
function generarPaletaDeColores(){

  for (var i = 0; i<nombreColores.length; i++){
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = "color-paleta";
    nuevoDiv.style.background = nombreColores[i];
    paleta.appendChild(nuevoDiv);
  }

};

// GUIA 1.3: CREACION GRILLA DE PIXELES

function generarGrillaDePixeles(){

  for (var i = 0; i<=1750; i++){
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = "pixel-grilla";
    grillaPixeles.appendChild(nuevoDiv);
  }

};

// GUIA 2.1: IDENTIFICAR EL COLOR SELECCIONADO

paleta.addEventListener('click', cambiarColorPaleta);

function cambiarColorPaleta( e ) {
    document.getElementById('indicador-de-color').style.background = e.target.style.background;
};


// GUIA 2.2: PINTAR UN PIXEL EN LA GRILLA 

grillaPixeles.addEventListener('click', cambiarColorDelPixelEnLaGrilla);

function cambiarColorDelPixelEnLaGrilla( e ) {
    e.target.style.background = document.getElementById('indicador-de-color').style.background;
};

// GUIA 2.3 FUNCIONALIDAD RUEDA DE COLORES
// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    document.getElementById('indicador-de-color').style.background = colorActual;

  })
);

// GUIA 2.4: DETECTAR SI EL MOUSE ESTA CLICKEADO

$('#grilla-pixeles').mousedown(indicarMouseClickeado);
$('#grilla-pixeles').mouseup(indicarMouseDesclickeado);

function indicarMouseClickeado(){
  mouseClickeado = true;
};

function indicarMouseDesclickeado(){
  mouseClickeado = false;
};

// GUIA 2.5 PINTAR EN MOVIMIENTO

$("#grilla-pixeles").mouseover(cambiarColorVariosPixelesEnGrilla);

function cambiarColorVariosPixelesEnGrilla(e){
    if (mouseClickeado) {
      $(e.target).css('background-color', $('#indicador-de-color').css('background-color'))
    };
};


// GUIA 3.1 BORRAR GRILLA DE PIXELES
$('#borrar').click( function() {
    $('.pixel-grilla').animate( {"background-color":"white"}, 1500 )
});

// GUIA 3.2 CARGAR IMAGEN DE SUPERHEROES

$('.imgs').click( function(e) {
    switch($(e.target).attr('id')) {
      case "batman":
        cargarSuperheroe(batman);
        break;
      case "wonder":
        cargarSuperheroe(wonder);
        break;
      case "flash":
        cargarSuperheroe(flash);
        break;
      case "invisible":
        cargarSuperheroe(invisible);
        break;
    }
});

// GUIA 3.3 GUARDAR EL PIXEL ART EN .PNG
$('#guardar').click(
  guardarPixelArt
);

// INICILIZAR
$(document).ready( function() {
  generarGrillaDePixeles();
  generarPaletaDeColores();
});