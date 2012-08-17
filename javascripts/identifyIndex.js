/*--------------------------------------------------------------------\
|                                                                     |
|   SEIJYUJI GAKUEN JAVASCRIPT                                        |
|---------------------------------------------------------------------|
|   | ÍNDICE | SUBFOROS | TEMAS | GALERÍA | PORTAL |                  |
|   |   X    |    X     |       |         |        |                  |
|---------------------------------------------------------------------|
|                                                                     |
|   Configura el diseño general del foro identificando el índice      |
|                                                                     |
 --------------------------------------------------------------------*/

$(document).ready(function(e) {
	var u = location.pathname.slice(location.pathname.lastIndexOf('/'));
	// Distinguir entre subforo/categoría e índice  
	if (u.indexOf('index.html')==0 || u.indexOf('/index.html')==0 || u=='/' || u=='' || !u) {
		// Si es índice poner la clase indexPage
		$(document.body).addClass('indexPage');
		
	} else {
		// En caso contrario pasar  
		$(document.body).addClass('notIndexPage');
	}
	//  Quitar el margen innecesario de los forabg                  
	$('.forabg .dterm div:not(.newStyleSubforums)').css('margin-left', 0);
	
	// Convertir el título del foro en un div por si acaso          
	$('.forabg li.row a.forumtitle').each(function(index, element) {
		$(this).html($('<div></div>').text($(this).text()));
    });
	
	// Mover la imagen de la descripción (newStyleDesc) al título   
	$('.forabg li.row .newStyleDesc').each(function() {
		var img = $(this).find('img');
		var url = img.attr('src');
		
		$(this).css('background-image', 'url(' + url + ')');
		$(this).css('background-position', 'left top');
		$(this).css('background-repeat', 'no-repeat');
		$(this).appendTo($(this).parents('.dterm').find('a.forumtitle').attr('title', img.attr('title')));
		img.remove();
	});
});