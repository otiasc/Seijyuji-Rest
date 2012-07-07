/*
	SEIJYUJI GAKUEN JAVA-SCRIPT
	
	>	RELOJ DEL FORO
	Sistema del tiempo
	
	Creado el día 09/06/2012

---------------------------------------------*/
var nextEvents = new Array();

//
//
// constante WEATHER_IMAGES
var WEATHER_IMAGES = new Array();
WEATHER_IMAGES.push({id:'DES', xd:1, xn: 14, alt:'Despejado'});
WEATHER_IMAGES.push({id:'NU1', xd:2, xn: 14, alt:'Nubosidad leve'});
WEATHER_IMAGES.push({id:'NU2', xd:3, xn: 14, alt:'Nubosidad media'});
WEATHER_IMAGES.push({id:'NU3', xd:4, xn: 14, alt:'Nubosidad fuerte'});
WEATHER_IMAGES.push({id:'BOC', xd:5, xn: 14, alt:'Bochorno'});
WEATHER_IMAGES.push({id:'NIB', xd:6, xn: 14, alt:'Niebla'});
WEATHER_IMAGES.push({id:'LL1', xd:7, xn: 14, alt:'Lluvia leve'});
WEATHER_IMAGES.push({id:'LL2', xd:8, xn: 14, alt:'Lluvia moderada'});
WEATHER_IMAGES.push({id:'LL3', xd:9, xn: 14, alt:'Lluvia fuerte'});
WEATHER_IMAGES.push({id:'TOR', xd:10, xn: 10, alt:'Lluvia con relámpagos'});
WEATHER_IMAGES.push({id:'NV1', xd:11, xn: 14, alt:'Nieve leve'});
WEATHER_IMAGES.push({id:'NV2', xd:12, xn: 14, alt:'Nieve moderada'});
WEATHER_IMAGES.push({id:'NV3', xd:13, xn: 13, alt:'Nieve fuerte'});

//
// constante WEEKDAYS_REDUCED
var WEEKDAYS_REDUCED= new Array('DOMINGO', 'LUN', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO');

//
//
// constante MONTHS
var MONTHS = new Array('ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE');

//
//
//
var HELP_BUBBLES = new Array('Usada para rolear, solo válida dentro el foro', 'Usada en el mundo real');

//
//
//
// FUNCIÓN clock_start(). Inicia el reloj
function clock_getForumTime() {
	//
	// Hora actual REAL
	var realNow = new Date();
	var forumNow = clock_realtimeToForumtime(realNow);
	
	return forumNow;
}
/*

	FUNCIÓN clock_getWeather(when)
	Devuelve el tiempo que hace en la fecha especificada en date
		date when	Objeto fecha
	
	Devuelve
		str weather	cadena que toma valores DES NU1 NU2 NU3 DLL NIB LL1 LL2 LL3 NV1 NV2 NV3

*/
function clock_getWeather(when) {
	//
	// Obtener día, mes y año
	var y = when.getUTCFullYear();
	var m = when.getUTCMonth()+1;
	var d = when.getUTCDate();
	
	if (m<10) {m = '0' + m}
	if (d<10) {d = '0' + d}
	var compose = y + '-' + m + '-' + d;
	//
	//
	// Recorrer todos los sky hasta descubrir el día del que hablamos hoy
	var weatherToday = '';
	var weatherNow = '';
	for (var i=0; i<sky.length; i++) {
		if (sky[i].date==compose) {
			weatherToday = sky[i].weather;
		}
	}
	//
	// Si no hay tiempo, obtener el último
	if (weatherToday=='') {
		weatherToday == sky[sky.length-1].weather;
	}
	//
	// Obtener el tiempo del día de hoy
	var j = Math.floor(when.getHours() / 6);
	weatherNow = weatherToday.split('-')[j];
	
	return weatherNow;
}
function clock_getTemperature(when) {
	//
	// Obtener día, mes y año
	var y = when.getUTCFullYear();
	var m = when.getUTCMonth()+1;
	var d = when.getUTCDate();
	
	if (m<10) {m = '0' + m}
	if (d<10) {d = '0' + d}
	var compose = y + '-' + m + '-' + d;
	
	//
	// Obtener las horas y minutos
	var mm = when.getUTCMinutes();
	var hh = when.getUTCHours();
	//
	//
	// Recorrer todos los sky hasta descubrir el día del que hablamos hoy
	var maxYesterday = 0;
	var maxToday = 0;
	var minToday = 0;
	var minTomorrow = 0;
	for (var i=1; i<sky.length; i++) {
		if (sky[i].date==compose) {
			minToday = parseInt(sky[i].temps.split(',')[0]);
			maxToday = parseInt(sky[i].temps.split(',')[1]);
			maxYesterday = parseInt(sky[i-1].temps.split(',')[1]);
			if (i!=sky.length-1) {
				minTomorrow = parseInt(sky[i+1].temps.split(',')[0]);
			}
		}
	}
	//
	// Si no hay tiempo, obtener el último
	if (maxToday==minToday) {
		maxYesterday = parseInt(sky[sky.length-1].temps.split(',')[2]);
		minToday = parseInt(sky[sky.length-1].temps.split(',')[0]);
		maxToday = parseInt(sky[sky.length-1].temps.split(',')[1]);
		minTomorroy = parseInt(sky[sky.length-1].temps.split(',')[0]);
	}
	//
	// Comprobar en qué franja se encuentra
	var temperature = 0;
	if (hh<2) {
		var p = (hh+9)/11;
		temperature = maxYesterday + (minToday - maxYesterday)*p
	} else if (hh<15) {
		var p = (hh-2)/13;
		temperature = minToday + (maxToday - minToday)*p
	} else {
		var p = (hh-15)/11;
		temperature = maxToday + (minTomorrow - maxToday)*p
	}
	return Math.round(temperature);
}
/*


*/
function clock_getTemperatureMaxMin(when) {
	var y = when.getUTCFullYear();
	var m = when.getUTCMonth()+1;
	var d = when.getUTCDate();
	
	if (m<10) {m = '0' + m}
	if (d<10) {d = '0' + d}
	var compose = y + '-' + m + '-' + d;
	
	//
	// Obtener las horas y minutos
	var mm = when.getUTCMinutes();
	var hh = when.getUTCHours();
	//
	//
	// Recorrer todos los sky hasta descubrir el día del que hablamos hoy
	var maxYesterday = 0;
	var maxToday = 0;
	var minToday = 0;
	var minTomorrow = 0;
	for (var i=1; i<sky.length; i++) {
		if (sky[i].date==compose) {
			minToday = parseInt(sky[i].temps.split(',')[0]);
			maxToday = parseInt(sky[i].temps.split(',')[1]);
		}
	}
	return 'Mín ' + minToday + 'º' + ' | Máx ' + maxToday + 'º';
}
/*

	FUNCIÓN clock_isDay(when)
	¿Es de día o es de noche?
		date when	Objeto fecha
	
	Devuelve
		true	si es de día (when está entre amanecer y anochecer)
		false	si es de noche
*/
function clock_isDay(when) {
	//
	// Obtener día, mes y año
	var y = when.getUTCFullYear();
	var m = when.getUTCMonth()+1;
	var d = when.getUTCDate();
	
	if (m<10) {m = '0' + m}
	if (d<10) {d = '0' + d}
	var compose = y + '-' + m + '-' + d;
	//
	//
	// Recorrer todos los sky hasta descubrir el día del que hablamos hoy
	var dawnToday = new Date();
	var fallToday = new Date();
	var isDay = false;
	for (var i=0; i<sky.length; i++) {
		if (sky[i].date==compose) {
			dawnToday = new Date(sky[i].date + 'T' + sky[i].dawn + ':00Z');
			fallToday = new Date(sky[i].date + 'T' + sky[i].fall + ':00Z');
			
			if (when>dawnToday && when < fallToday) {isDay = true;}
		}
	}
	return isDay;
}
/*

	FUNCIÓN clock_getNextSkyEvent(when)
	Obtiene el siguiente acontecimiento celeste (amanecer, anochecer, mediodía y medianoche)
	
*/
function clock_getNextSkyEvent(when) {
	//
	// Obtener día, mes y año
	var y = when.getUTCFullYear();
	var m = when.getUTCMonth()+1;
	var d = when.getUTCDate();
	if (m<10) {m = '0' + m}
	if (d<10) {d = '0' + d}
	var compose = y + '-' + m + '-' + d;
	//
	//
	// Recorrer todos los sky hasta descubrir el día del que hablamos hoy
	var nextSkyEvent = '';
	var nextSkyEventTime = 0;
	
	for (var i=0; i<sky.length; i++) {
		if (sky[i].date==compose) {
			var dawnToday = new Date(sky[i].date + 'T' + sky[i].dawn + ':00Z');
			var fallToday = new Date(sky[i].date + 'T' + sky[i].fall + ':00Z');
			
			var middayToday = new Date(sky[i].date + 'T12:00:00Z');
			var midnightToday = new Date(sky[i].date + 'T23:59:59Z');
			// ¿El siguiente evento es amanecer?
			if (when<dawnToday) {
				nextSkyEvent = 'AMANECER';
				nextSkyEventTime = dawnToday;
			} else if (when<middayToday) {
				nextSkyEvent = 'MEDIODÍA';
				nextSkyEventTime = middayToday;
			} else if (when<fallToday) {
				nextSkyEvent = 'ATARDECER';
				nextSkyEventTime = fallToday;
			} else {
				nextSkyEvent = 'MEDIANOCHE';
				nextSkyEventTime = midnightToday;
			}
		}
	}
	
	var realLapse = clock_forumtimeToRealtime(nextSkyEventTime) - new Date();
	
	var h = parseInt(realLapse/1000/3600);
	var m = parseInt(realLapse/1000/60)%60;
	var s = parseInt(realLapse/1000)%60;
	
	if (m<10) {m='0' + m}
	if (s<10) {s='0' + s}
	
	return (nextSkyEvent + ' EN ' + h + ':' + m + ':' + s);
	
}
/*

	FUNCIÓN clock_realtimeToForumtime(realNow)
	Convierte realNow (hora real) en hora del foro
*/
function clock_realtimeToForumtime(realNow) {
	var forumNow = new Date();
	for (var i=1; i<clocks.length; i++) {
		// Comprobar a qué intervalo pertenece
		var realMax = new Date(clocks[i].real);
		var realMin = new Date(clocks[i-1].real);
		
		var forumMax = new Date(clocks[i].forum);
		var forumMin = new Date(clocks[i-1].forum);
		if (realNow<=realMax && realNow>realMin) {
			// Pertenece al intervalo entre «i-1» e «i»
			// Calcular la hora del foro.
			// Para ello, se hace una regla de tres entre la diferencia de horas del foro y la diferencia de horas en la realidad
			var percent = (realNow - realMin)/(realMax - realMin);
			var forumNow = new Date(forumMin.getTime() + (forumMax - forumMin) * percent);
			
			var multiplier = (realMax - realMin)/(forumMax - forumMin);
		}
	}
	//
	// Si el intervalo al que pertenece no existe
	var i = clocks.length-1;
	if (realNow > new Date(clocks[i].real)) {
		var realMax = new Date(clocks[i].real);
		var realMin = new Date(clocks[i-1].real);
		
		var forumMax = new Date(clocks[i].forum);
		var forumMin = new Date(clocks[i-1].forum);
		
		var percent = (forumNow - forumMin)/(forumMax - forumMin);
		var forumNow = new Date(forumMin.getTime() + (forumMax - forumMin) * percent);
	}
	return forumNow;
}
/*

	FUNCIÓN clock_forumtimeToRealtime(when)
	Convierte when (hora del foro) en hora real

*/
function clock_forumtimeToRealtime(forumNow) {
	for (var i=1; i<clocks.length; i++) {
		// Comprobar a qué intervalo pertenece
		var realMax = new Date(clocks[i].real);
		var realMin = new Date(clocks[i-1].real);
		
		var forumMax = new Date(clocks[i].forum);
		var forumMin = new Date(clocks[i-1].forum);
		if (forumNow<=forumMax && forumNow>forumMin) {
			// Pertenece al intervalo entre «i-1» e «i»
			// Calcular la hora del foro.
			// Para ello, se hace una regla de tres entre la diferencia de horas del foro y la diferencia de horas en la realidad
			var percent = (forumNow - forumMin)/(forumMax - forumMin);
			var realNow = new Date(realMin.getTime() + (realMax - realMin) * percent);
			
			var multiplier = (realMax - realMin)/(forumMax - forumMin);
		}
	}
	var i = clocks.length-1;
	if (forumNow > new Date(clocks[i].forum)) {
		var realMax = new Date(clocks[i].real);
		var realMin = new Date(clocks[i-1].real);
		
		var forumMax = new Date(clocks[i].forum);
		var forumMin = new Date(clocks[i-1].forum);
		
		var percent = (forumNow - forumMin)/(forumMax - forumMin);
		var realNow = new Date(realMin.getTime() + (realMax - realMin) * percent);
	}
	return realNow;
}

/*

	FUNCIÓN clock_update()
		Actualiza el reloj

*/
function clock_update() {
	// Obtener la hora y tiempo actuales en el foro
	var forumNow = clock_realtimeToForumtime(new Date());
	var weatherNow = clock_getWeather(forumNow);
	var isDay = clock_isDay(forumNow);
	var nextEventText = clock_getNextSkyEvent(forumNow);
	
	
	// Cosas sobre la hora
	var h = forumNow.getUTCHours();
	var m = forumNow.getUTCMinutes();
	if (h<10) {h = '0' + h}
	if (m<10) {m = '0' + m}
	$('#clock_date a').text(WEEKDAYS_REDUCED[forumNow.getUTCDay()] + ' ' + h + ':' + m);
	
	// Cosas sobre el tiempo atmosférico
	var iconX = 0;
	for (var i=0; i<WEATHER_IMAGES.length; i++) {
		if (WEATHER_IMAGES[i].id==weatherNow) {
			if (isDay) {iconX = WEATHER_IMAGES[i].xd}
			else {iconX = WEATHER_IMAGES[i].xn}
		}
	}
	$('#clock_weather').css('background-position', '-' + iconX*24-2 + 'px -1px');
	$('#clock_extra').text(nextEventText);
}
/*

	FUNCIÓN clock_start()
		Escribe los HTML necesarios en el foro

*/
function clock_start() {
	var h = '';
	h += '<span id="clock">';
	h += '<div id="clock_weather"><img src="http://illiweb.com/fa/empty.gif" /></div>';
	h += '<div id="clock_title">HORA SEIJYUJI <a href="#" class="help_button" id="h0">[?]</a></div>';
	h += '<div id="clock_date"><a href="/h5-calendario">MIÉ 08:00AM</a></div>';
	h += '<div id="clock_extra">AMANECER en 72:34:45<br /> </div>';
	h += '</span>';
	
	$('#logo-desc').append(h);
	
	$('body').append('<span class="bubble disabled" id="help_bubble">Es la hora usada para rolear, solo válida dentro del foro</span>');
}
/*

	FUNCIÓN agenda_start()
		Inicializa la agenda

*/
function agenda_start() {
	// Obtener la hora y tiempo actuales en el foro
	var forumNow = clock_realtimeToForumtime(new Date());
	// Obtener la meteo actual
	
	// Crear el calendario de este mes
	// 1. Semana primera.
	//
	// Número de huecos que tiene la primera semana
	var firstDay = new Date();
	firstDay.setUTCFullYear(forumNow.getUTCFullYear());
	firstDay.setUTCMonth(forumNow.getUTCMonth());
	firstDay.setUTCDate(1);
	var firstWeekGap = firstDay.getDay()-2;
	if (firstWeekGap<0) {firstWeekGap+=7}
	
	
	$('#eventscalendar tbody').html('');
	var firstWeek = $('<tr></tr>');
	var currentDate = 0;
	for (var j=0; j<7; j++) {
		if (j<=firstWeekGap) {
			$('<td></td>').text('').appendTo(firstWeek);
		} else {
			currentDate = j-firstWeekGap;
			$('<td id="day' + currentDate + '"></td>').text(currentDate).appendTo(firstWeek);
		}
	}
	$('#eventscalendar tbody').append(firstWeek);
	
	for (var i=0; i<4; i++) {
		var weekElement = $('<tr></tr>');
		for (var j=0; j<7; j++) {
			currentDate++;
			firstDay.setDate(currentDate);
			if (firstDay.getMonth()==forumNow.getMonth()) {
				$('<td id="day' + currentDate + '"></td>').text(currentDate).appendTo(weekElement);
			} else {
				$('<td></td>').text('').appendTo(weekElement);
			}
		}
		$('#eventscalendar tbody').append(weekElement);
	}
	
	$('#eventscalendar td#day' + forumNow.getUTCDate()).addClass('dayToday');
	
	//
	//
	// Obtener los próximos eventos
	nextEvents = new Array();
	for (var i=0; i<agenda.length; i++) {
		if (new Date(agenda[i].end)>forumNow && (new Date(agenda[i].start)).getUTCMonth()==forumNow.getUTCMonth()) {
			nextEvents.push(agenda[i]);
		}
	}
	//
	//
	//
	$('#events').html('');
	for (var i=0; i<nextEvents.length; i++) {
		var day = new Date(nextEvents[i].start).getUTCDate();
		var d;
		if (day<10) {d = '0' + day} else {d = day}
		var newEvent = $('<li></li>');
		var newA = $('<a href="javascript:void(0)" onclick="agenda_setEvent(' + i + ')"></a>')
			.append('<div class="date">' + d  + '</div>')
			.append('<div class="description">' + nextEvents[i].title  + '</div>');
		newEvent.append(newA);
		$('td#day' + day).addClass('dayWithEvent').html('<a href="javascript:void(0)" onclick="agenda_setEvent(' + i + ')">' + day + '</a>');
		
		$('#events').append(newEvent);
	}
	//
	//
	//
	agenda_setEvent(0);
}
/*

	FUNCIÓN agenda_setEvent(n)

*/
function agenda_setEvent(id) {
	var d = (new Date(nextEvents[id].start)).getUTCDate();
	var m = (new Date(nextEvents[id].start)).getUTCMonth();
	var y = (new Date(nextEvents[id].start)).getUTCFullYear();
	
	$('#currentEvent_date').text( d );
	$('#currentEvent_month').html( '<b>' + MONTHS[m] + '</b>' + y );
	$('#currentEvent_title').text(nextEvents[id].title);
	$('#currentEvent_title2').text(nextEvents[id].title2);
	$('#currentEvent_desc').html(nextEvents[id].desc);
	
	var aux2 = clock_forumtimeToRealtime(new Date(nextEvents[id].start));
	
	var d2 = aux2.getDate();
	var m2 = aux2.getMonth();
	var y2 = aux2.getFullYear();
	
	$('#currentEvent_realdate').text(d2);
	$('#currentEvent_realmonth').html( '<b>' + MONTHS[m2] + '</b>' + y2 );
	
	$('#currentEvent_extrainfo').html('');
	for (var i=0; i<nextEvents[id].info.length; i++) {
		var t1 = nextEvents[id].info[i].split('|')[0];
		var t3 = nextEvents[id].info[i].split('|')[1];
		if (t3=='TIME') {
			var t2 = new Date(nextEvents[id].info[i].split('|')[2]);
		} else {
			var t2 = nextEvents[id].info[i].split('|')[2];
		}
		
		var tex1, tex2, tex;
		if (t3=='TIME') { 
			if (t2.getUTCDate()==d) {
				var h, m;
				h = t2.getUTCHours(); if (h<10) {h='0' + h}
				m = t2.getUTCMinutes(); if (m<10) {m='0' + m}
				tex1 = h + ":" + m;
			} else {
				var h, m;
				h = t2.getUTCHours(); if (h<10) {h='0' + h}
				m = t2.getUTCMinutes(); if (m<10) {m='0' + m}
				tex1 = t2.getUTCDate() + '/' + t2.getUTCMonth() + '/' + t2.getUTCFullYear() + ', ' + h + ":" + m;
			}
			
			var t2b = clock_forumtimeToRealtime(t2);
			if (t2b.getTime()==d2) {
				var h, m;
				h = t2b.getHours(); if (h<10) {h='0' + h}
				m = t2b.getMinutes(); if (m<10) {m='0' + m}
				tex2 = h + ":" + m;
			} else {
				var h, m;
				h = t2b.getHours(); if (h<10) {h='0' + h}
				m = t2b.getMinutes(); if (m<10) {m='0' + m}
				tex2 = t2b.getDate() + '/' + MONTHS[t2b.getMonth()] + '/' + t2b.getFullYear() + ', ' + h + ":" + m;
			}
			tex = '<span class="forumtime">' + tex1 + '</span>' + '<span class="realtime">' + tex2 + '</span>';
			
		} else {
			tex = t3;
		}
		
		$('<li></li>').html(t1 + ': ' + tex).appendTo('#currentEvent_extrainfo');
	}
}

/*

	FUNCIÓN agenda_update()
		Actualiza la agenda

*/
function agenda_update() {
	// Obtener la hora y tiempo actuales en el foro
	var forumNow = clock_realtimeToForumtime(new Date());
	var weatherNow = clock_getWeather(forumNow);
	var isDay = clock_isDay(forumNow);
	//
	// obtener temperatura actual
	var temperatureNow = clock_getTemperature(forumNow);
	//
	//
	$('#temperatureNow').text(temperatureNow + 'º');
	var temperatureMaxMin = clock_getTemperatureMaxMin(forumNow);
	$('#temperatureToday').text(temperatureMaxMin);
	
	var iconX = 0;
	for (var i=0; i<WEATHER_IMAGES.length; i++) {
		if (WEATHER_IMAGES[i].id==weatherNow) {
			if (isDay) {iconX = WEATHER_IMAGES[i].xd}
			else {iconX = WEATHER_IMAGES[i].xn}
		}
	}
	$('#weatherNow').css('background-position', '-' + iconX*70-2 + 'px -24px');
}

function agenda_toggle(what) {
	$('#expandedEvent').removeClass('chosen_forum');
	$('#expandedEvent').removeClass('chosen_real');
	$('#expandedEvent').addClass('chosen_' + what);
}
$(document).ready(function(e) {
	clock_start();
	clock_update();
	agenda_start();
	agenda_update();
	
	$('.help_button').mouseenter(function(e) {
		$('#help_bubble').removeClass('disabled');
		var helpId = $(this).attr('id').slice(1);
		$('#help_bubble').text(HELP_BUBBLES[helpId]);
		
		$('#help_bubble').css('top', $(this).offset().top - $('#help_bubble').height() - 6);	
		$('#help_bubble').css('left', 0);
		
		if ( $(this).offset().left < $(window).width()/2 ) {
			$('#help_bubble').css('left', $(this).offset().left);
		} else {
			$('#help_bubble').css('left', $(this).offset().left - $('#help_bubble').width() + $(this).width());
		}
    });
	$('.help_button').mouseout(function(e) {
		$('#help_bubble').addClass('disabled');
	});
	
	$('#clock').mouseenter(function(e) {
		$('#clock').addClass('toggle');
		$('#clock').animate({marginTop:-65, height:40, width:145});
    });
	$('#clock').mouseleave(function(e) {
		$('#clock').removeClass('toggle');
		$('#clock').animate({marginTop:-55, height:30, width:145});
    });
	
	setInterval('clock_update()', 1000);
});