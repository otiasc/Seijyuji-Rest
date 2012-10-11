// JavaScript Document
var AC_PUNETAZO = {
	dices:'aF', dif:'6+(dV-aV)/2', cat:'Atacar', name:'Puñetazo', tags:' mano brazo puño cuerpo golpe', bonus:'y1(mano)|y2(brazo)|e1|e2',
	results: new Array(
		'1|10|  Ataque con éxito. <u>Herida leve</u>',
		'0|0|   Ataque fallido.',
		'-3|-1| Ataque fallido. Golpeas en mal sitio. <u>Herida leve en la mano</u>',
		'-10|-4|Ataque fallido. Golpeas en mal sitio. <u>Herida grave (lesión) en la mano</u>'
	),
	fun: function(user, target, result) {
		var text = '';
		if (result>0) {
			text = 'Ataque con éxito. ' + target.name + ' recibe daño de ' + DAMAGE + '% en ' + ATTACKED_BODY_PART;
		}
	}
}

var ALL_ACTIONS = new ActionList();