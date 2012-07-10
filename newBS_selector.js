/*
	SEIJYUJI GAKUEN JAVA-SCRIPT
	
	>	NEWBS_SELECTOR
	Coloca el sistema de batalla en lugar de los emoticonos
	Actualiza la interfaz de nuevo post
	
	Creado el día 07/07/2012

---------------------------------------------*/
$(document).ready(function(e) {
	//
	// Inicializadores
	$('#message-box .left-box #helpbox').appendTo('#text_editor_controls');
	$('#helpbox').css('display', 'block');
	$('#textarea_content').attr('style', '');
	$('#showBattleSystem').fadeOut(0);
	//
	// Ocultar sistema de Batalla al poner foco sobre textarea
	$('#text_editor_textarea').focusin(function(e) {
		$('#smiley-box').fadeOut('fast');
		$('#showBattleSystem').fadeIn('fast');
	});
	//
	// Mostrar sistema al clicar el botón
	$('#showBattleSystem').click(function(e) {
		$('#smiley-box').fadeIn('fast');
		$('#showBattleSystem').fadeOut('fast');
	});
	//
});