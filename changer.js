/*-------------------------------------------------------------------*\
|                                                                     |
|   SEIJYUJI GAKUEN PRESENTS                                          |
|   NEW BATTLE SYSTEM.                                                |
|                                                                     |
|	Conversor de dados a resultado                                    |
|	Aplicable a POSTS                                                 |
|                                                                     |
\*-------------------------------------------------------------------*/
$(document).ready(function(e) {
	$('.BSResults').each(function(index, element) {
		var data = $(this).children('.BSData').text();
		var dices = $(this).find('.BSDices .codebox dd');
		
		var chosen_action_uniqueId = data.split('|')[0];
		var chosen_target = data.split('|')[1];
		var chosen_battleOption = data.split('|')[2];
		
		// Buscar la acción   
		var chosen_action = getAction(chosen_action_uniqueId);
		
		// Calcular el resultado de los dados   
		var dicesResult = 0;
		dices.children('img').each(function(index, element) {
			var dice = $(this).attr('src');
			if (dice=='http://i48.servimg.com/u/f48/17/38/25/48/dice_g11.png') {dicesResult+=1}
			if (dice=='http://i48.servimg.com/u/f48/17/38/25/48/dice_r11.png') {dicesResult-=1}
        });
		
		var possibleResults = chosen_action.results;
		
		// Ver uno a uno, cuál es el resultado que se adapta
		var resultString = '';
		for (var i=0; i<possibleResults.length; i++) {
			var cPR = possibleResults[i].split('|');
			var cPR_max = Math.max(parseInt(cPR[0], 10), parseInt(cPR[1], 10));
			var cPR_min = Math.min(parseInt(cPR[0], 10), parseInt(cPR[1], 10));
			
			
			if (dicesResult<=cPR_max && dicesResult>=cPR_min) {
				resultString = cPR[2];
			}
		}
		resultString = $.trim(resultString);
		
		// Sustituir el Todo por sí mismo
		$(this).html('<span style="color:#FFF">Acción <strong>' + chosen_action.name + '</strong> a ' + chosen_target.split('/')[0] +  '.<br /> Resultado: <strong>' + resultString + '</strong></span>');
    });
});