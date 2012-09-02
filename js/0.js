// All scripts initializer
$(document).ready(function(e) {
	if (location.search) {var s = location.pathname + location.search} else {var s = location.pathname}
	
	/*
		Inicializador de todas las páginas
	*/
	$(document.body).addClass('notIndexPage');
	
	if (s.indexOf('/Seijyuji-Rest/')==0) {
		s = s.slice(15);
	}
	
	if (!s || s=='' || s=='/' || s=='/index.html') {
		/*
			índice
		*/
		$('#logo-desc').indexHeaderTicker('.newsTickerSource', '', [
			'http://i38.servimg.com/u/f38/17/38/25/48/01rin10.jpg',
			'http://i38.servimg.com/u/f38/17/38/25/48/02fore10.jpg',
			'http://i38.servimg.com/u/f38/17/38/25/48/03rins10.jpg',
			'http://i38.servimg.com/u/f38/17/38/25/48/00seij10.jpg'
		]);
		$(document).hasSubforums();
		$('.forabg .forums .row').hasNewMessages();
		$(document.body).removeClass('notIndexPage');
		$(document.body).addClass('indexPage');
		
		activatePage('miniguide');
	} else if (s=='/search') {
		/*
			/search
		*/
	} else if (s=='/groups') {
		/*
			/groups
		*/
	} else if (s.indexOf('/profile')==0) {
		/*
			perfil
		*/
		$('#profile_field_2_12').objectField();
	} else if (s.indexOf('/u')==0) {
		/*
			Usuario
		*/
		$('#field_id12 .field_uneditable').objectField();
	} else if (s.indexOf('/c')==0) {
		/*
			Categoría
		*/
	} else if (s.indexOf('/f')==0) {
		/*
			Subforo
		*/
	} else if (s.indexOf('/t')==0) {
		/*
			Tema
		*/
	}
});