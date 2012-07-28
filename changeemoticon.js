/*--------------------------------------------------------------------
|                                                                     |
|   SEIJYUJI GAKUEN PRESENTS                                          |
|   BATTLE SYSTEM ZERO                                                |
|                                                                     |
|   Sustituye los emoticonos por el sistema de batalla                |
|                                                                     |
 --------------------------------------------------------------------*/
$(document).ready(function(){
	//                                             
	// 1 Comprobar si pertenece al programa BETA   
	var user = $('img#i_icon_mini_logout').attr('title');
	if (user=='Desconectarse [ Admin ]' || user=='Desconectarse [ Ryûji Suguro ]' || user=='Desconectarse [ Okumura Rin ]' || true) {
		$('#smiley-box iframe').attr('src', '/h7-newbattlesystem');
	} else {
		$('#smiley-box iframe').attr('src', '/h4-sistema-de-batalla-entre-usuarios');
	}
});