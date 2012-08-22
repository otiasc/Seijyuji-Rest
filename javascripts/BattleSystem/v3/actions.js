/*-------------------------------------------------------------------*\
|                                                                     |
|   SEIJYUJI GAKUEN PRESENTS                                          |
|   NEW BATTLE SYSTEM.                                                |
|                                                                     |
|   listado de acciones                                               |
|                                                                     |
\*-------------------------------------------------------------------*/
var actions = new Array();

actions.push({uniqueId:'A1', dices:'aF', dif:'6+(dV-aV)/2', cat:'Atacar', name:'Puñetazo', tags:' mano brazo puño cuerpo golpe', bonus:'y1(mano)|y2(brazo)|e1|e2', results: new Array(
	'1|10|  Ataque con éxito. <u>Herida leve</u>',
	'0|0|   Ataque fallido.',
	'-3|-1| Ataque fallido. Golpeas en mal sitio. <u>Herida leve en la mano</u>',
	'-10|-4|Ataque fallido. Golpeas en mal sitio. <u>Herida grave (lesión) en la mano</u>'
)});
actions.push({uniqueId:'A2', dices:'aF', dif:'6+(dV-aV)', cat:'Atacar', name:'Aplastar con la mano (enemigos pequeños)', tags:' mano puño cuerpo espachurrar apretar', bonus:'y1(mano)|y2(mano)|e0|e1|e2', results: new Array(
	'1|10|  Aplastas al enemigo',
	'0|0|   Ataque fallido',
	'-10|-1|Aplastas al enemigo pero este te hace daño'
)});
actions.push({uniqueId:'A3', dices:'aF', dif:'6+(dV-aV)/2', cat:'Atacar', name:'Patada', tags:' pie pierna cuerpo golpe ', bonus:'y1(pie)|y2(pierna)|e1|e2', results: new Array(
	'1|10|  Ataque con éxito. <u>Herida leve</u>',
	'0|0|   Ataque fallido.',
	'-3|-1| Ataque fallido. Golpeas en mal sitio. <u>Herida leve en el pie</u>',
	'-10|-4|Ataque fallido. Golpeas en mal sitio. <u>Herida grave (lesión) en la pierna</u>'
)});
actions.push({uniqueId:'A4', dices:'aF', dif:'5+(dV-aV)/2', cat:'Atacar', name:'Pisotón', tags:' pie pierna cuerpo golpe ', bonus:'', results: new Array(
	'1|10|  Ataque con éxito. <u>Herida leve</u>',
	'0|0|   Ataque fallido.',
	'-3|-1| Ataque fallido. Golpeas en mal sitio. <u>Herida leve en el pie</u>',
	'-10|-4|Ataque fallido. Golpeas en mal sitio. <u>Herida grave (lesión) en la pierna</u>'
)});
actions.push({uniqueId:'A5', dices:'aF', dif:'6+(dF-aF)', cat:'Atacar', name:'Empujar', tags:' mano brazo cuerpo ', bonus:'', results: new Array(
	'3|10|  Ataque con éxito. Desplazas al enemigo y cae al suelo',
	'1|2|   Ataque con éxito. Desplazas al enemigo',
	'0|0|   Ataque fallido.',
	'-1|-2| Ataque fallido. Retrocedes tú',
	'-3|-10|Ataque fallido. Desequilibras y caes al suelo'
)});
actions.push({uniqueId:'A6', dices:'aF', dif:'8+(dV-aV)', cat:'Atacar', name:'Cabezazo', tags:' cabeza cara cuerpo ', bonus:'', results: new Array(
	'3|10|  Ataque con éxito. Herida leve al enemigo',
	'1|2|   Ataque con éxito. Herida leve a ambos jugadores',
	'0|0|   Ataque fallido. Te haces una herida leve en la cabeza',
	'-1|-10|Ataque fallido. Te haces una herida leve en la cabeza y te caes al suelo'
)});
actions.push({uniqueId:'A7', dices:'aF', dif:'6+(dF-aF)', cat:'Atacar', name:'Agarrar', tags:' mano coger cuerpo ', bonus:'', results: new Array(
	'3|10|  Ataque con éxito. Herida leve al enemigo',
	'1|2|   Ataque con éxito. Herida leve a ambos jugadores',
	'0|0|   Ataque fallido. Te haces una herida leve en la cabeza',
	'-1|-10|Ataque fallido. Te haces una herida leve en la cabeza y te caes al suelo'
)});
actions.push({uniqueId:'A8', dices:'aF', dif:'6+(dF-aF)/2', cat:'Atacar', name:'Codazo', tags:' brazo cuerpo ', bonus:'', results: new Array(
	'1|10|  Ataque con éxito. Herida leve',
	'0|0|   Ataque fallido',
	'-1|-10|Ataque fallido. Te haces una herida leve en el codo'
)});
actions.push({uniqueId:'A9', dices:'aF', dif:'6+(dF-aF)/2', cat:'Atacar', name:'Rodillazo', tags:' pierna cuerpo ', bonus:'', results: new Array(
	'1|10|  Ataque con éxito. Herida leve',
	'0|0|   Ataque fallido',
	'-1|-10|Ataque fallido. Te haces una herida leve en la rodilla'
)});
actions.push({uniqueId:'A10', dices:'1+aESG', dif:'6+(dV-aV)/3', cat:'Atacar', name:'Apuñalar', tags:' arma blanca cuchillo daga knight ', bonus:'', results: new Array(
	'1|10|  Ataque con éxito. <u>Herida leve</u>',
	'0|0|   Ataque fallido.',
	'-1|-3| Ataque fallido. El arma se queda clavada en suelo o pared. Para recuperarla realizar acción: <u>Otras/Recuperar arma</u>',
	'-4|-5| Ataque fallido. Hieres al compañero más cercano en lugar no crítico. <u>Herida leve</u>',
	'-6|-10|Ataque fallido. Te hieres a ti mismo en la pierna. <u>Herida leve en pierna</u>'
)});
actions.push({uniqueId:'A11', dices:'aESG', dif:'6+(dV-aV)/3', cat:'Atacar', name:'Espada', tags:' arma blanca espada knight ', bonus:'', results: new Array(
	'2|10|  Ataque con éxito. <u>Herida grave</u>',
	'0|1|   Ataque fallido.',
	'-1|-3| Ataque fallido. El arma se queda clavada en suelo o pared. Para recuperarla realizar acción: <u>Otras/Recuperar arma</u>',
	'-4|-10|Ataque fallido. Hieres al compañero más cercano en lugar no crítico. <u>Herida grave</u>'
)});
actions.push({uniqueId:'A12', dices:'aF-3', dif:'7+(dV-aV)/3', cat:'Atacar', name:'Arma contundente (mazo)', tags:' martillo mazo porra ', bonus:'', results: new Array(
	'2|10|  Ataque con éxito. <u>Herida grave en lugar crítico</u>',
	'1|1|   Ataque con éxito. <u>Herida grave</u>',
	'0|0|   Ataque fallido.',
	'-1|-3| Ataque fallido. Te hieres a ti mismo. <u>Herida grave</u>',
	'-4|-4| Ataque fallido. Hieres al compañero más cercano. <u>Herida leve</u>',
	'-5|-10|Ataque fallido. Hieres al compañero más cercano. <u>Herida grave</u>'
)});
actions.push({uniqueId:'A13', dices:'aF', dif:'6+(dV-aV)/2', cat:'Atacar', name:'Usar arma ligera (lanza)', tags:' javalina krik vara palo golpe ', bonus:'', results: new Array(
	'3|10|  Ataque con éxito. <u>Herida grave en lugar crítico</u>',
	'1|2|   Ataque con éxito. <u>Herida grave</u>',
	'0|0|   Ataque fallido.',
	'-1|-3| Ataque fallido. Te hieres a ti mismo. <u>Herida grave</u>',
	'-4|-10|Ataque fallido. Hieres al compañero más cercano. <u>Herida leve</u>'
)});
actions.push({uniqueId:'A14', dices:'aF', dif:'5-aPUN+dV/2', cat:'Atacar', name:'Lanzar arma ligera (lanza)', tags:' javalina krik vara paro lanzamiento ', bonus:'', results: new Array(
	'3|10|  Ataque con éxito. Das en la diana [u]Herida grave en lugar crítico[/u]',
	'1|2|   Ataque con éxito. Clavas el objeto pero en otro sitio [u]Herida grave[/u]',
	'0|0|   Ataque fallido. El arma cae cerca del enemigo. Para recuperarlo realizar la acción [u]Otras/Buscar objeto en suelo[/u]',
	'-1|-3| Ataque fallido. No se sabe dónde cae el arma. Para recuperarlo realizar la acción [u]Otras/Buscar objeto en suelo[/u]',
	'-4|-10|Ataque fallido. Hieres a un compañero. [u]Herida grave[/u]'
)});
actions.push({uniqueId:'A15', dices:'aF+2', dif:'5-aPUN+dV/3', cat:'Atacar', name:'Arma de fuego automática', tags:' ametralladora dragoon ', bonus:'', results: new Array(
	'3|10|  Ataque con éxito. <u>Herida grave en varios lugares</u>',
	'1|2|   Ataque con éxito. <u>Herida leve en varios lugares</u>',
	'0|0|   Ataque fallido.',
	'-1|-3| Ataque fallido. Te lesionas la mano. <u>Herida grave</u>',
	'-4|-10|Ataque fallido. Hieres al compañero más cercano. <u>Herida grave</u>'
)});
actions.push({uniqueId:'A16', dices:'aF+1', dif:'7-aPUN+dV/2', cat:'Atacar', name:'Arma de fuego manual', tags:' pistola revólver escopeta dragoon ', bonus:'', results: new Array(
	'5|10|  Ataque con éxito. <u>Herida grave en lugar crítico</u>',
	'1|4|   Ataque con éxito. <u>Herida grave</u>',
	'0|0|   Ataque fallido.',
	'-1|-1| Ataque fallido. Te hieres la mano. <u>Herida leve</u>',
	'-2|-3| Ataque fallido. Te lesionas la mano. <u>Herida grave</u>',
	'-4|-10|Ataque fallido. Hieres al compañero más cercano. <u>Herida grave</u>'
)});
actions.push({uniqueId:'A17', dices:'1+aESG', dif:'6+(dV-aV)/2', cat:'Atacar', name:'Espada demoníaca', tags:' espada demonio arma knight ', bonus:'', results: new Array(
	'5|10|  Ataque con éxito. <u>Herida muy grave en lugar crítico</u>',
	'1|4|   Ataque con éxito. <u>Herida muy grave</u>',
	'0|0|   Ataque fallido.',
	'-1|-3| Ataque fallido. El arma se queda clavada en suelo o pared. Para recuperarla realizar acción: <u>Otras/Recuperar arma[/u>',
	'-4|-4| Ataque fallido. Hieres al compañero más cercano. <u>Herida muy grave</u>',
	'-5|-10|Se rompe'
)});
actions.push({uniqueId:'A18', dices:'aF*3', dif:'15-aD*3', cat:'Atacar', name:'Llamas demoníacas', tags:' demonio llamas ', bonus:'', results: new Array(
	'3|10|  Provocas quemaduras graves en el objetivo. Herida grave',
	'1|2|   Fuego en el enemigo. Herida leve',
	'0|0|   Ataque fallido. Provocas una llama cerca de ti',
	'-1|-1| Ataque fallido. Provocas un incendio a tu alrededor',
	'-2|-3| Ataque fallido. Quemas a un compañero',
	'-4|-6| Ataque fallido. Quemas a un compañero y pierdes el control de ti mismo',
	'-7|-20|Provocas una Noche Azul. Consecuencias desconocidas'
)});
actions.push({uniqueId:'A19', dices:'aF', dif:'6-(aPUN+dV)/2', cat:'Atacar', name:'Lanzar objeto', tags:' lanzar ', bonus:'', results: new Array(
	'3|10|  Ataque con éxito. Das en la diana <u>Herida en lugar crítico (según peso de objeto)</u>',
	'1|2|   Ataque con éxito. Das con el objeto <u>Herida leve (según peso de objeto)</u>',
	'0|0|   Ataque fallido. El objeto cae cerca del enemigo. Para recuperarlo (si se desea) realizar la acción <u>Otras/Buscar objeto en suelo</u>',
	'-1|-5| Ataque fallido. No se sabe dónde cae el arma. Para recuperarlo (si se desea) realizar la acción <u>Otras/Buscar objeto en suelo</u>',
	'-6|-10|Ataque fallido. Hieres a un compañero. <u>Herida leve</u>'
)});
actions.push({uniqueId:'A20', dices:'5', dif:'4+dV/2', cat:'Atacar', name:'Agua bendita', tags:' dios santa ', bonus:'', results: new Array(
	'2|10|  Ataque con éxito. Das solo en la diana',
	'1|1|   Ataque con éxito. Dejas rastro entre tu objetivo y tú',
	'0|0|   Das a tu objetivo y a tu alrededor',
	'-1|-1| Empapas a un compañero',
	'-2|-10|Empapas a un compañero y su alrededor'
)});
actions.push({uniqueId:'A21', dices:'aMEM+2', dif:'5-aI', cat:'Atacar', name:'Versos fatales cortos', tags:' aria memoria ', bonus:'', results: new Array(
	'10|10| +10 aciertos. Necesitas acumular 7 aciertos para terminar los versos. Cuando acabe: herida leve-grave a todos los enemigos',
	'9|9|   +9 aciertos. Necesitas acumular 7 aciertos para terminar los versos. Cuando acabe: herida leve-grave a todos los enemigos',
	'8|8|   +8 aciertos. Necesitas acumular 7 aciertos para terminar los versos. Cuando acabe: herida leve-grave a todos los enemigos',
	'7|7|   +7 aciertos. Necesitas acumular 7 aciertos para terminar los versos. Cuando acabe: herida leve-grave a todos los enemigos',
	'6|6|   +6 aciertos. Necesitas acumular 7 aciertos para terminar los versos. Cuando acabe: herida leve-grave a todos los enemigos',
	'5|5|   +5 aciertos. Necesitas acumular 7 aciertos para terminar los versos. Cuando acabe: herida leve-grave a todos los enemigos',
	'4|4|   +4 aciertos. Necesitas acumular 7 aciertos para terminar los versos. Cuando acabe: herida leve-grave a todos los enemigos',
	'3|3|   +3 aciertos. Necesitas acumular 7 aciertos para terminar los versos. Cuando acabe: herida leve-grave a todos los enemigos',
	'2|2|   +2 aciertos. Necesitas acumular 7 aciertos para terminar los versos. Cuando acabe: herida leve-grave a todos los enemigos',
	'1|1|   +1 aciertos. Necesitas acumular 7 aciertos para terminar los versos. Cuando acabe: herida leve-grave a todos los enemigos',
	'0|0|   +0 aciertos. Necesitas acumular 7 aciertos para terminar los versos. Cuando acabe: herida leve-grave a todos los enemigos',
	'-1|-10|Versos interrumpidos. El exorcista debe empezar'
	
)});
actions.push({uniqueId:'A22', dices:'aMEM+2', dif:'5-aI', cat:'Atacar', name:'Versos fatales largos', tags:' aria memoria ', bonus:'', results: new Array(
	'10|10| +10 aciertos. Necesitas acumular 15 aciertos para terminar los versos. Cuando acabe: herida grave-muy grave a todos los enemigos',
	'9|9|   +9 aciertos. Necesitas acumular 15 aciertos para terminar los versos. Cuando acabe: herida grave-muy grave a todos los enemigos',
	'8|8|   +8 aciertos. Necesitas acumular 15 aciertos para terminar los versos. Cuando acabe: herida grave-muy grave a todos los enemigos',
	'7|7|   +7 aciertos. Necesitas acumular 15 aciertos para terminar los versos. Cuando acabe: herida grave-muy grave a todos los enemigos',
	'6|6|   +6 aciertos. Necesitas acumular 15 aciertos para terminar los versos. Cuando acabe: herida grave-muy grave a todos los enemigos',
	'5|5|   +5 aciertos. Necesitas acumular 15 aciertos para terminar los versos. Cuando acabe: herida grave-muy grave a todos los enemigos',
	'4|4|   +4 aciertos. Necesitas acumular 15 aciertos para terminar los versos. Cuando acabe: herida grave-muy grave a todos los enemigos',
	'3|3|   +3 aciertos. Necesitas acumular 15 aciertos para terminar los versos. Cuando acabe: herida grave-muy grave a todos los enemigos',
	'2|2|   +2 aciertos. Necesitas acumular 15 aciertos para terminar los versos. Cuando acabe: herida grave-muy grave a todos los enemigos',
	'1|1|   +1 aciertos. Necesitas acumular 15 aciertos para terminar los versos. Cuando acabe: herida grave-muy grave a todos los enemigos',
	'0|0|   +0 aciertos. Necesitas acumular 15 aciertos para terminar los versos. Cuando acabe: herida grave-muy grave a todos los enemigos',
	'-1|-10|Versos interrumpidos. El exorcista debe empezar'
)});
actions.push({uniqueId:'A23', dices:'5', dif:'8-aD', cat:'Atacar', name:'Invocar familiar', tags:' tamer invocación invocar convocar convoca ', bonus:'', results: new Array(
	'6|10|  Invocación conseguida. Además el familiar ataca.',
	'1|5|   Invocación conseguida',
	'0|-10| Invocación no conseguida'
)});
actions.push({uniqueId:'A24', dices:'aFAM', dif:'8-aD', cat:'Atacar', name:'Atacar con familiar', tags:' tamer ', bonus:'', results: new Array(
	'+1|10| Ataque conseguido. <u>Daño dependiendo del ataque</u>',
	'0|0|   Ataque fallido',
	'-1|-3| Tu familiar se descontrola. Debes realizar una tirada de <u>Tamer/Recuperar control de familiar</u>',
	'-4|-4| El familiar se vuelve contra ti. <u>Te provoca una herida leve</u> Debes realizar una tirada de <u>Tamer/Recuperar control de familiar</u>',
	'-5|-10|El familiar se vuelve contra ti. <u>Te provoca una herida grave</u> Debes realizar una tirada de <u>Tamer/Recuperar control de familiar</u>'
)});

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

actions.push({uniqueId:'C1', dices:'10', dif:'aDOC', cat:'Curar', name:'Curar herida normal', tags:' doctor herida medicina cura ', bonus:'', results: new Array(
	'1|10|  Cura la parte dañada',
	'0|0|   Falla la curación',
	'-1|-1| Hieres al cuerpo dañado. <u>La herida se agrava (si es leve pasa a grave, si es grave pasa a muy grave)</u>',
	'-2|-2| Hieres al cuerpo dañado. <u>La herida pasa a muy grave (si ya estaba en muy grave, se daña una parte sana)</u>',
	'-3|-10|Una parte sana se daña. <u>Herida grave</u>'
)});
actions.push({uniqueId:'C2', dices:'10', dif:'aDOC', cat:'Curar', name:'Curar herida espiritual', tags:' doctor herida medicina cura masho ', bonus:'', results: new Array(
	'1|10|  Cura la parte dañada',
	'0|0|   Falla la curación',
	'-1|-1| Hieres al cuerpo dañado. <u>La herida se agrava (si es leve pasa a grave, si es grave pasa a muy grave)</u>',
	'-2|-2| Hieres al cuerpo dañado. <u>La herida pasa a muy grave (si ya estaba en muy grave, se daña una parte sana)</u>',
	'-3|-10|Una parte sana se daña. <u>Herida grave</u>'
)});

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

actions.push({uniqueId:'D1', dices:'5', dif:'8-aV', cat:'Defensa', name:'Alejarse del enemigo', tags:' defensa lejos huir correr ', bonus:'', results: new Array(
	'1|10|  Consigues alejarte',
	'0|0|   No consigues alejarte lo suficiente',
	'-1|-10|Tropiezas y caes al suelo'
)});
actions.push({uniqueId:'D2', dices:'5', dif:'7-aV', cat:'Defensa', name:'Esquivar al enemigo', tags:' esquivar defensa apartar ', bonus:'', results: new Array(
	'1|10|  Consigues esquivar',
	'0|0|   No consigues esquivar',
	'-1|-10|Tropiezas y caes al suelo'
)});
actions.push({uniqueId:'D3', dices:'5', dif:'6+(dV-aV)/2', cat:'Defensa', name:'Soltarse del enemigo', tags:' defensa soltar ', bonus:'', results: new Array(
	'1|10|  Consigues soltarte',
	'0|0|   No consigues soltarte',
	'-1|-10|Al forcejear te dañas. No te sueltas. [u]Herida leve[/u]'
)});

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

actions.push({uniqueId:'O1', dices:'1+aI', dif:'6', cat:'Otras', name:'Buscar objeto en el suelo', tags:' buscar suelo perdido ', bonus:'', results: new Array(
	'1|10| Recuperado',
	'0|-10|No recuperado'
)});
actions.push({uniqueId:'O2', dices:'aF', dif:'7', cat:'Otras', name:'Recuperar arma', tags:' buscar suelo perdido ', bonus:'', results: new Array(
	'1|10| Recuperado',
	'0|-10|No recuperado'
)});
actions.push({uniqueId:'O3', dices:'aF+1', dif:'6', cat:'Otras', name:'Levantarse del suelo', tags:' levantar suelo caído tumbado ', bonus:'', results: new Array(
	'1|10|  Conseguido',
	'0|0|   No te levantas',
	'-1|-10|No te levantas y resultas herido'
)});
actions.push({uniqueId:'O4', dices:'5', dif:'6', cat:'Otras', name:'Pedir refuerzos', tags:' llamar solicitar ayuda', bonus:'', results: new Array(
	'1|10| Ayuda conseguida',
	'0|-10|Ayuda no conseguida'
)});