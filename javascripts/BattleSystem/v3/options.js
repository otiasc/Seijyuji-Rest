/*

	SEIJYUJI GAKUEN PRESENTS
	NEW BATTLE SYSTEM.
	
	VERSION 3
	Options
			
*/

/*

	battleOptions
	Matriz que incluye las opciones de batalla.
	str	category	categoría de las opciones
	str	name		nombre de la opción
	str vary		cómo afecta la opción en las propiedades

*/
var battleOptions = new Array();
battleOptions.push({id: 'y1', cat:'Tú', vary:'aF*=0.75', name:'Herida leve en [$0]'});
battleOptions.push({id: 'y2', cat:'Tú', vary:'aF*=0.5', name:'Herida grave en [$0]'});

battleOptions.push({id: 'y3', cat:'Tú', vary:'aV*=0.75', name:'No puedes correr'});
battleOptions.push({id: 'y4', cat:'Tú', vary:'aV*=0', name:'No puedes moverte'});

battleOptions.push({id: 'e0', cat:'Enemigo', vary:'dV*=0.5', name:'El enemigo no te ve'});
battleOptions.push({id: 'e1', cat:'Enemigo', vary:'dV*=0.75', name:'Al enemigo le cuesta moverse'});
battleOptions.push({id: 'e2', cat:'Enemigo', vary:'dV*=0', name:'El enemigo no puede moverse'});
battleOptions.push({id: 'e3', cat:'Enemigo', vary:'aPUN*=0.75; aV*=0', name:'El enemigo está lejos'});
battleOptions.push({id: 'e4', cat:'Enemigo', vary:'aPUN*=0.5; aV*=0', name:'El enemigo está muy lejos'});
battleOptions.push({id: 'e5', cat:'Enemigo', vary:'aPUN*=0; aV*=0', name:'El enemigo no se ve'});
battleOptions.push({id: 'e6', cat:'Enemigo', vary:'aPUN*=0.25', name:'El enemigo se mueve'});

battleOptions.push({id: 'e4', cat:'Enemigo', vary:'dif+=1', name:'Necesitas bastante agua (garrafa)'});
battleOptions.push({id: 'e4', cat:'Enemigo', vary:'dif+=2', name:'Necesitas mucha agua (barril)'});

battleOptions.push({id: 'o1', cat:'Otros', vary:'aF-=1', name:'El objeto a levantar pesa mucho'});