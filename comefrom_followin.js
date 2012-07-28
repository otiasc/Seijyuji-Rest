/*
	SEIJYUJI GAKUEN JAVA-SCRIPT
	
	>	COME FROM & FOLLOW IN
	Sitúa las funcionalidades de "Vengo de" y "Voy a"
	
	Creado el día 07/07/2012

---------------------------------------------*/
function getLink(_direction) {
	// Poner el botón con el estado "loading"
	$('#' + _direction + ' img').attr('src', 'http://i48.servimg.com/u/f48/17/38/25/48/ajax-l10.gif');
	
	// Variable currentPost. ID del post actual. 0 si el post aún no se ha escrito
	var currentPost = 0;
	
	// Variable mode. Modo de entrada (newtopic, reply o editpost
	var mode = $('.submit-buttons input[name=mode]').val();
	
	// Variable userName. Nombre de usuario de la persona que postea
	var userName;
	
	// Variable returnLink. Enlace correcto resultado del cálculo
	var returnLink = false;
	
	if (mode=='newtopic' || mode=='reply') {
		currentPost = 0;
	} else if (mode=='editpost') {
		currentPost = parseInt($('.submit-buttons input[name=p]').val(), 10);
	}
	
	// Maquinaria AJAX
	//
	// El primer AJAX consiste en obtener del propio perfil el nombre de usuario
	$.ajax({
		url: '/profile?mode=editprofile',
		cache: false,
		context: document.body,
		dataType: 'text',
		success: function (data) {
			userName = $(data).contents().find('input[name=username]').val();
			// Una vez se tiene el nombre de usuario, buscar las estadísticas
			$.ajax({
				url: '/spa/' + userName,
				cache: false,
				context: document.body,
				dataType: 'text',
				success: function(data) {
					// Dependiendo del movimiento, realizar una acción u otra
					
					if (_direction=="comefrom" && currentPost==0) {
						// "Vengo de" + post nuevo => Obtener el último post realizado, es decir, primer hijo
						var found=false;
						$(data).contents().find('#main-content .search.post.row1').each(function(index, element) {
							
							var valid = isValid( $(this).find('.postprofile dd:eq(2) .postdetails').attr('href') );
							var fullLink = $(this).find('.postbody h2.h3 a').attr('href');
							var linkId = parseInt(fullLink.slice(fullLink.indexOf('#')+1), 10);
							
							if (!found && valid) {
								returnLink = fullLink;
								found = true;
							}
						});
					} else if (_direction=='comefrom' && currentPost!=0) {
						// "Vengo de" + post que no es nuevo => Obtener el inmediato anterior a él
						var found=false;
						$(data).contents().find('#main-content .search.post.row1').each(function(index, element) {
							// Buscar en cada post
							var valid = isValid( $(this).find('.postprofile dd:eq(2) .postdetails').attr('href') );
							var fullLink = $(this).find('.postbody h2.h3 a').attr('href');
							var linkId = parseInt(fullLink.slice(fullLink.indexOf('#')+1), 10);
							
							if (linkId<currentPost && !found && valid) {
								found = true;
								returnLink = fullLink;
							}
                        });
					} else if (_direction=='followin' && currentPost!=0) {
						// "Sigo en" + post que no es nuevo => Obtener el siguiente a él
						$(data).contents().find('#main-content .search.post.row1').each(function(index, element) {
							// Buscar en cada post
							var valid = isValid( $(this).find('.postprofile dd:eq(2) .postdetails').attr('href') );
							var fullLink = $(this).find('.postbody h2.h3 a').attr('href');
							var linkId = parseInt(fullLink.slice(fullLink.indexOf('#')+1), 10);
							
							if (linkId>currentPost && valid) {
								returnLink = fullLink;
							}
                        });
					} else {
						returnLink = false;
					}
					
					//
					// Poner en el cuadro de texto el correspondiente valor
					var initial = $('#text_editor_textarea').val();
					var final;
					if (returnLink) {
						returnLink = 'http://seijyujigakuen.foroactivo.com' + returnLink;
					}
					if (_direction=='comefrom' && returnLink) {
						final = 'Viene de: ' + returnLink + '\n\n' + initial;
					} else if (_direction=='followin' && returnLink) {
						final = initial + '\n\nSigue en: ' + returnLink;
					} else {
						final = initial;
					}
					
					$('#comefrom img').attr('src', 'http://i48.servimg.com/u/f48/17/38/25/48/minibu10.png');
					$('#followin img').attr('src', 'http://i48.servimg.com/u/f48/17/38/25/48/minibu11.png');
					
					$('#text_editor_textarea').val(final);
					
					$('#text_editor_textarea').caretToEnd();
				}
			});
		}
	});

}


function isValid(_link) {
	var forumId = parseInt(_link.slice(2, _link.indexOf('-')), 10);
	if (forumId==74 || forumId==3 || forumId==22 || forumId==21 || forumId==75) {
		return false;
	} else {
		return true;
	}
}