/*--------------------------------------------------------------------\
|                                                                     |
|   SEIJYUJI GAKUEN PRESENTS                                          |
|   SHEET CHECKER                                                     |
|                                                                     |
|   Comprueba que si se ha modificado la ficha del usuario.           |
|   En caso de que se haya hecho, se puede restaurar hasta el punto   |
|   anterior de guardado                                              |
|                                                                     |
 --------------------------------------------------------------------*/
 
 
var statistics = new Array();
statistics.push({id:1, F:9, V:9, I:9, D:9, PUN:9, ESG:9, FAM:9, MEM:9, MED:0});

function post_check(me) {
	for (var i=0; i<statistics.length; i++) {
		var cs = statistics[i];
		if (cs.id==id) {
			// check
			if (cs.F<me.F || cs.V<me.V || cs.I<me.I || cs.D<me.D || cs.PUN<me.PUN || cs.ESG<me.ESG || cs.FAM<me.FAM || cs.MEM<me.MEM || cs.MED<me.MED) {
				// not valid
				$(this).css('border-right-color', '#F00');
			}
		}
	}
}
