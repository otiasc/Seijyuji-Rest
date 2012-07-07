/*
	SEIJYUJI GAKUEN JAVA-SCRIPT
	
	>	BETA
	Pone en beta el tema BETA
	
	Creado el día 07/07/2012

---------------------------------------------*/
$(document).ready(function(e) {
	var tit = $('input[name=subject]').val();
	if (tit.indexOf('Tema beta')==0) {
		// EL TEMA ES BETA
		//
		// Escribir el newStyle
		$("<link/>", {
			rel: "stylesheet",
			type: "text/css",
			href: "https://raw.github.com/otiasc/Seijyuji-Rest/master/newStyle.css"
		}).appendTo("head");
		
		// Cambiar la helpbox de sitio
		$('#message-box .left-box #helpbox').appendTo('#text_editor_controls');
		$('#helpbox').css('display', 'block');
		$('#textarea_content').attr('style', '');
		$('#showBattleSystem').fadeOut(0);
		//
		// Ocultar sistema de Batalla
		$('#text_editor_textarea').focusin(function(e) {
			$('#smiley-box').fadeOut('fast');
			$('#showBattleSystem').fadeIn('fast');
		});
		//
		// Mostrar sistema de batalla
		$('#showBattleSystem').click(function(e) {
			$('#smiley-box').fadeIn('fast');
			$('#showBattleSystem').fadeOut('fast');
		});
		//
		// Situar botones de "Vengo de", "voy a"
		$('#text_editor_controls #text_edit').append('<button class="button2" onclick="comefrom(); return false;" type="button" title="Viene de"><img src="http://illiweb.com/fa/wysiwyg/help.png" /><span>Viene de</span></button>');
	}
});