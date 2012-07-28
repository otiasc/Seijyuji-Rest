/*-------------------------------------------------------------------*\
|                                                                     |
|   SEIJYUJI GAKUEN PRESENTS                                          |
|                                                                     |
|   Coloca el panel de notificaciones en la portada del foro          |
|                                                                     |
|   Aplicable a ÍNDICE                                                |
|                                                                     |
\*-------------------------------------------------------------------*/
var news = new Array();
news.push({
	title:'Evento',
	id:'news-1',
	content:'<span class="newstitle" href="#"><h3>Clase especial</h3><p>Reunión ahora en <a href="http://seijyujigakuen.foroactivo.com/t137-segunda-clase-de-exorcismo-farmacologia-demoniaca-charla">Aula 1106</a></p></span>'
});
news.push({
	title:'¿Y el reloj?',
	id:'news-2',
	content:'<span class="newstitle" href="#"><h3>El día 17 de julio de 2012, el reloj ha muerto</h3><p>Puedes dejar tu mensaje de despedida <a href="http://seijyujigakuen.foroactivo.com/t137-segunda-clase-de-exorcismo-farmacologia-demoniaca-charla">aquí</a></p></span>'
});
news.push({
	title:'Nuevo diseño',
	id:'news-3',
	content:'<a href="#" class="newstitle" href="#"><h3>Sí. Hemos cambiado algunas cosas</h3><p>Y muchas otras que no se ven</p></a>'
});
$(document).ready(function(e) {
	var $forabg = $('<div class="forabg"><div class="inner"><ul class="topiclist news"><li class="header"><dl class="icon"><dd class="dterm"><div class="table-title"><h2>Tablón de anuncios</h2></div></dd></dl></li></ul></div></div>');
	
	
	$('.forabg:first').before($forabg);
	
	var $newsTitles = $('<span></span>');
	var $newsContents = $('<ul class="topiclist news"></ul>');
	
	for (var i=0; i<news.length; i++) {
		var li = $('<li id="' + news[i].id + '"></li>').addClass('row').html(news[i].content);
		li.appendTo($newsContents);
		
		$newsTitles.append(
			$('<a href="javascript:void(0)" id="'+ news[i].id +'-btn" class="newstitle">' + news[i].title + '</a>').attr('onclick', 'news_activate("' + news[i].id + '")')
		);
	}
	
	$newsTitles.appendTo($('ul.topiclist.news li.header .table-title'));
	$newsContents.insertAfter($('.forabg:first ul.topiclist.news'));
	
	news_activate(news[0].id);
});

function news_activate(_id) {
	for (var i=0; i<news.length; i++) {
		$('li#' + news[i].id).hide();
		$('a#' + news[i].id + '-btn').removeClass('selected');
	}
	$('li#' + _id).show();
	$('a#' + _id + '-btn').addClass('selected');
}