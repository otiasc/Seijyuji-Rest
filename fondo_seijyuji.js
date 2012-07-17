/*-------------------------------------------------------------------*\
|                                                                     |
|   SEIJYUJI GAKUEN PRESENTS                                          |
|                                                                     |
|   Sitúa el fondo #flameBG. Crea el script para que aparezca y       |
|	desaparezca                                                       |
|   Aplicable a TODAS LAS PÁGINAS                                     |
|                                                                     |
\*-------------------------------------------------------------------*/
$(document).ready(function(e) {
	$('<div id="flameBG1">-</div>').appendTo('body');
	var centerX = $(window).width()/2 - 350;
	var centerY = 400;
	
	var rX = 200;
	var rY = 40;
	
	$(document).mousemove(function(e) {
		// Distancias del cursor respecto al centro
		var dX = Math.abs(e.pageX - centerX), dY = Math.abs(e.pageY - centerY);
		
		var pX = dX/rX;
		var pY = dY/rY;
		
		var p = Math.sqrt(pX*pX + pY*pY);
		
		// Alphas X e Y
		var alpha = 1 - p;
		
		$('#flameBG1').css('opacity', alpha);
	});
});