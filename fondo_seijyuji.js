/*
	SEIJYUJI GAKUEN JAVA-SCRIPT
	
	>	FONDO SEIJYUJI
	Establece el nuevo fondo. Después configura el movimiento para el ratón
	
	Creado el día 07/07/2012

---------------------------------------------*/
$(document).ready(function(e) {
	$('<div id="flameBG1">-</div>').appendTo('body');
	var centerX = $(window).width()/2 - 350;
	var centerY = 320;
	
	var rX = 300;
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