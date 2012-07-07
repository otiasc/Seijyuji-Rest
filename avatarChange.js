/*
	SEIJYUJI GAKUEN JAVA-SCRIPT
	
	>	Cambiar avatares a temas y/o categorías
	
	
	Creado el día 20/06/2012

---------------------------------------------*/
/*

	MATRIZ avatarCollection
	Contiene la colección de avatares con respecto a temas/categorías
		str type	tipo. Admite dos variables: "t" y "f", según sea "tema" o "foro"
		int id		id del tema o foro
		str url		URL de la imagen
		str name	nombre de admin

*/
var acForum = new Array();
acForum.push({id:74, url:'http://i48.servimg.com/u/f48/17/38/25/48/cath10.jpg', name:'Catherine'});

var acThread = new Array();
acThread.push({id:64, url:'http://i48.servimg.com/u/f48/17/38/25/48/cath10.jpg', name:'??'});
acThread.push({id:61, url:'http://i48.servimg.com/u/f48/17/38/25/48/cath10.jpg', name:'??'});

/*

	FUNCIÓN getThreadName()
	Obtiene la url del tema actual
*/
function getThreadName() {
	var h = location.pathname;
	var regExp = /^\/t([0-9]+)(-|p)(.*)$/;
	if (h.match(regExp)) {
		return h.replace(regExp, '$1');
	} else {
		return 0;
	}
}

/*

	FUNCIÓN getForumName()
	Obtiene la url del tema actual
*/
function getForumName() {
	var h = $('.topic-actions .pathname-box a.nav:last').attr('href');
	var regExp = /^\/f([0-9]+)(-|p)(.*)$/;
	if (h.match(regExp)) {
		return h.replace(regExp, '$1');
	} else {
		return 0;
	}
}

/*

	FUNCIÓN changeAvatar(img, name)
	Cambia el avatar de admin
	str img		url del avatar nuevo
	str name	nombre del avatar nuevo
	
*/

function changeAvatar(img, name) {
	$('.post .postprofile dt a[href="/u1"] img').attr('src', img);
	$('.post .postprofile dt strong a[href="/u1"]').each(function(index, element) {
        $(this).text(name);
    });
}

$(document).ready(function(e) {
	var currT = parseInt(getThreadName(), 10);
	var currF = parseInt(getForumName(), 10);
	
	for (var i=0; i<acForum.length; i++) {
		var cac = acForum[i];
		if (cac.type=='t' && cac.id==currF) {
			changeAvatar(cac.url, cac.name);
		}
	}
	
	for (var i=0; i<acThread.length; i++) {
		var cac = acThread[i];
		if (cac.type=='t' && cac.id==currT) {
			changeAvatar(cac.url, cac.name);
		}
	}
});