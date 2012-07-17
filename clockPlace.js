/*-------------------------------------------------------------------*\
|                                                                     |
|   SEIJYUJI GAKUEN PRESENTS                                          |
|                                                                     |
|   Sitúa el nuevo reloj, debajo de la cabecera del foro              |
|   Obtiene los datos del reloj del script clock.js                   |
|                                                                     |
|   Aplicable a TODAS LAS PÁGINAS                                     |
|                                                                     |
\*-------------------------------------------------------------------*/

$(document).ready(function(e) {
	// Basic start  
	$('<div id="clock"></div>').insertAfter($('#logo-desc'));
	
	// Extended clock assets   
	$('#clock').append($('<div id="extendedClock"></div>'));
	$('#extendedClock').append($('<div id="forumTimeBar"><span>13:00</span></div>'));
	$('#extendedClock').append($('<div id="timeline"></div>'));
	$('#extendedClock').append($('<div id="realTimeBar"><span>01:00</span></div>'));
	
	
});