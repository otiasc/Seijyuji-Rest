/*--------------------------------------------------------------------\
|                                                                     |
|   SEIJYUJI GAKUEN PRESENTS                                          |
|   AFILIADOS                                                         |
|                                                                     |
|   Configura el banner de afiliados                                  |
|                                                                     |
 --------------------------------------------------------------------*/

$(document).ready(function(e) {
	$('#main').append('<div id="afilitybar"><h3>Afiliados de élite / <a href="/h8-">Más afiliados</a></h3><ul id="afilitylist"></ul></div>');
	
	var afiliates = new Array();
	afiliates.push({h:'/', t:'Afiliados', i:'http://i48.servimg.com/u/f48/17/38/25/48/afilia10.jpg'});
	afiliates.push({h:'/', t:'Afiliados', i:'http://i48.servimg.com/u/f48/17/38/25/48/afilia10.jpg'});
	afiliates.push({h:'/', t:'Afiliados', i:'http://i48.servimg.com/u/f48/17/38/25/48/afilia10.jpg'});
	afiliates.push({h:'/', t:'Afiliados', i:'http://i48.servimg.com/u/f48/17/38/25/48/afilia10.jpg'});
	afiliates.push({h:'/', t:'Afiliados', i:'http://i48.servimg.com/u/f48/17/38/25/48/afilia10.jpg'});
	afiliates.push({h:'/', t:'Afiliados', i:'http://i48.servimg.com/u/f48/17/38/25/48/afilia10.jpg'});
	afiliates.push({h:'/', t:'Afiliados', i:'http://i48.servimg.com/u/f48/17/38/25/48/afilia10.jpg'});
	afiliates.push({h:'/', t:'Afiliados', i:'http://i48.servimg.com/u/f48/17/38/25/48/afilia10.jpg'});
	afiliates.push({h:'/', t:'Afiliados', i:'http://i48.servimg.com/u/f48/17/38/25/48/afilia10.jpg'});
	afiliates.push({h:'/', t:'Afiliados', i:'http://i48.servimg.com/u/f48/17/38/25/48/afilia10.jpg'});
	
	afiliates.push({h:'/', t:'Afiliados', i:'http://i48.servimg.com/u/f48/17/38/25/48/afilia10.jpg'});
	afiliates.push({h:'/', t:'Afiliados', i:'http://i48.servimg.com/u/f48/17/38/25/48/afilia10.jpg'});
	afiliates.push({h:'/', t:'Afiliados', i:'http://i48.servimg.com/u/f48/17/38/25/48/afilia10.jpg'});
	afiliates.push({h:'/', t:'Afiliados', i:'http://i48.servimg.com/u/f48/17/38/25/48/afilia10.jpg'});
	afiliates.push({h:'/', t:'Afiliados', i:'http://i48.servimg.com/u/f48/17/38/25/48/afilia10.jpg'});
	afiliates.push({h:'/', t:'Afiliados', i:'http://i48.servimg.com/u/f48/17/38/25/48/afilia10.jpg'});
	afiliates.push({h:'/', t:'Afiliados', i:'http://i48.servimg.com/u/f48/17/38/25/48/afilia10.jpg'});
	afiliates.push({h:'/', t:'Afiliados', i:'http://i48.servimg.com/u/f48/17/38/25/48/afilia10.jpg'});
	afiliates.push({h:'/', t:'Afiliados', i:'http://i48.servimg.com/u/f48/17/38/25/48/afilia10.jpg'});
	afiliates.push({h:'/', t:'Afiliados', i:'http://i48.servimg.com/u/f48/17/38/25/48/afilia10.jpg'});
	
	afiliates.push({h:'/', t:'Afiliados', i:'http://i48.servimg.com/u/f48/17/38/25/48/afilia10.jpg'});
	afiliates.push({h:'/', t:'Afiliados', i:'http://i48.servimg.com/u/f48/17/38/25/48/afilia10.jpg'});
	
	for (var i=0; i<afiliates.length; i++) {
		var cur = afiliates[i];
		$('#afilitylist').append('<li><a href="' + cur.h + '">' + '<img src="' + cur.i + '" alt="' + cur.t + '" />' + '</a></li>');
	}
});