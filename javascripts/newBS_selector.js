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
	$('#message-box .left-box #helpbox').appendTo('#text_editor_controls');
	$('#format-buttons').append('<a href="javascript:;" id="showBattleSystem">Mostrar sistema de batalla</a>');
	$('#helpbox').css('display', 'block');
	$('#textarea_content').attr('style', '');
	$('#showBattleSystem').fadeOut(0);
	$('#smiley-box iframe').attr('src', '/h7-newbattlesystem');
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