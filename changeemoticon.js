/*--------------------------------------------------------------------
|                                                                     |
|   SEIJYUJI GAKUEN PRESENTS                                          |
|   BATTLE SYSTEM ZERO                                                |
|                                                                     |
|   Sustituye los emoticonos por el sistema de batalla                |
|                                                                     |
 --------------------------------------------------------------------*/
$(document).ready(function(e) {
	//
	// Inicializadores
	$('div#message-box div.left-box span#helpbox').appendTo('div#text_editor_controls');
	$('div#format-buttons').append('<a href="javascript:;" id="showBattleSystem">Mostrar sistema de batalla</a>');
	$('span#helpbox').css('display', 'block');
	$('div#textarea_content').attr('style', '');
	$('a#showBattleSystem').fadeOut(0);
	$('div#smiley-box iframe').attr('src', '/h7-newbattlesystem');
	//
	// Ocultar sistema de Batalla al poner foco sobre textarea
	$('textarea#text_editor_textarea').focusin(function(e) {
		$('div#smiley-box').fadeOut('fast');
		$('a#showBattleSystem').fadeIn('fast');
	});
	//
	// Mostrar sistema al clicar el botón
	$('a#showBattleSystem').click(function(e) {
		$('div#smiley-box').fadeIn('fast');
		$('a#showBattleSystem').fadeOut('fast');
	});
	//
});