/*--------------------------------------------------------------------
|                                                                     |
|   SEIJYUJI GAKUEN PRESENTS                                          |
|   BETA                                                              |
|                                                                     |
|   Configura las páginas para que sean BETA                          |
|                                                                     |
 --------------------------------------------------------------------*/
$(document).ready(function(e) {
	// Comprobar que el Usuario está en modo Beta
	var user = $('img#i_icon_mini_logout').attr('title');
	if (user=='Desconectarse [ Admin ]' || user=='Desconectarse [ Ryûji Suguro ]' || user=='Desconectarse [ Okumura Rin ]') {
		// Lo está
		
		// Beta 1                                     
		// Situar botones de "Vengo de" y "voy a"     
		var mode = $('.submit-buttons input[name=mode]').val();
		if (mode) {
			// Situar botones de "Vengo de", "voy a"
			$('#text_editor_controls #text_edit').append('<button class="button2" id="comefrom" onclick="getLink(\'comefrom\'); return false;" type="button" title="Viene de"><img src="http://i48.servimg.com/u/f48/17/38/25/48/minibu10.png" /><span>Vengo de</span></button>');
			if (mode=='editpost') {
				$('#text_editor_controls #text_edit').append('<button class="button2" id="followin" onclick="getLink(\'followin\'); return false;" type="button" title="Sigue en"><img src="http://i48.servimg.com/u/f48/17/38/25/48/minibu11.png" /><span>Sigo en</span></button>');
			}
		}
	}
});