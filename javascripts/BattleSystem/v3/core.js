/*--------------------------------------------------------------------\
|                                                                     |
|   SEIJYUJI GAKUEN PRESENTS                                          |
|   NEW BATTLE SYSTEM.                                                |
|                                                                     |
|   VERSION 3                                                         |
|   core.js                                                           |
|                                                                     |
\--------------------------------------------------------------------*/
var g_chosenAction_uniqueId;
var g_chosenAction_name;
var g_chosenTarget_name;
var g_chosenTarget_id;
var g_chosenOptions;

var g_resultsDices;
var g_resultsDificulty;

var aDEFAULT = new Object();
var dDEFAULT = new Object();

var aMODIFIED = new Object();
var dMODIFIED = new Object();

var aOK = false;
var dOK = false;

Array.prototype.unique=function(a){
  return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});

$(document).ready(function(e) {
	$('#home input').click(function(e) {
		$('#home').addClass('disabled');
		$('#actions').removeClass('disabled');
		loadActions();
		$('#searchbox').focus();
    });
	$('#searchbox').keyup(function(e) {
		searchActions($('#searchbox').val());
    });
});

/*------------------------------------------------------------------
                                                                    
                                                                    
	FUNCIONES GET                                                   
		Usadas para obtener los datos de acciones y opciones a      
		partir de sus ID                                            
																	
																	
------------------------------------------------------------------*/


/*	FUNCIÓN getAction (_uniqueId)                       
	  str _uniqueId		ID de la acción                 
	                                                    
	devuelve                                            
	  map: objeto con todos los datos de la acción      
                                                      */
function getAction(_uniqueId) {
	var action = false;
	for (var i=0; i<actions.length; i++) {
		if (actions[i].uniqueId==_uniqueId) {
			action = actions[i]
		}
	}
	return action;
}

/*	FUNCIÓN geOption (_id)                              
	  str _id		ID de la opción                     
	                                                    
	devuelve                                            
	  map: objeto con todos los datos de la opción      
                                                      */
function getOption(_id) {
	// Split id and options                             
	var pos1 = _id.indexOf('('); var pos2 = _id.indexOf(')');
	var optionId = '';
	var params = '';
	if (pos1!=-1 && pos2>pos1) {
		params = new Array();
		params = _id.slice(pos1+1, pos2).split(',');
		
		optionId = _id.slice(0, pos1);
	} else {
		params = new Array();
		optionId = _id;
	}
	
	var option = false;
	var newName;
	for (var i=0; i<battleOptions.length; i++) {
		var cBO = battleOptions[i];
		var pos3 = cBO.id.indexOf('(');
		var cBOid
		
		if (pos3!=-1) {
			cBOid = cBO.id.slice(0, pos3);
		} else {
			cBOid = cBO.id;
		}
		
		
		if (cBOid==optionId) {
			option = cBO;
			var cBOname = cBO.name;
			newName = option.name
			if (params.length>0) {
				for (var j=0; j<params.length; j++) {
					newName = cBOname.replace('[$' + j + ']', $.trim(params[j]) );
				}
			}
		}
	}
	return {name:newName, id:option.id, cat:option.cat, vary:option.vary};
}

/*------------------------------------------------------------------
                                                                    
                                                                    
	FUNCIONES LOAD                                                  
		Usadas para cargar y colocar las acciones y targets dentro  
		de los elementos UL destinados para tal efecto              
																	
																	
------------------------------------------------------------------*/

/*	FUNCIÓN loadActions ()                              
	Carga las acciones y las pone en el #actionList     
                                                      */
function loadActions() {
	$('#actions').removeClass('disabled');
	$('#targets').addClass('disabled');
	$('#options').addClass('disabled');
	
	// Ordenar acciones por categoría                   
	var cCategory = '';
	$('#actionList').html('');
	
	for (var i=0; i<actions.length; i++) {
		var cAction = actions[i];
		
		if (cAction.cat!=cCategory) {
			$('<li></li>').append('<h3>' + cAction.cat + '</h3>').appendTo($('#actionList'));
			cCategory = cAction.cat;
		}
		
		$('<li></li>').append('<a href="javascript:;" onclick="actionChosen(\'' + cAction.uniqueId + '\')">' + cAction.name + '</h3>').appendTo($('#actionList'));
	}
}

/*	FUNCIÓN loadTargets ()                              
	Carga los Target y los pone en el #targetList       
                                                      */
function loadTargets() {
	$('#targetList').html('');
	$('#actions').addClass('disabled');
	$('#targets').removeClass('disabled');
	$('#options').addClass('disabled');
	
	$('#targets').addClass('loading');
	
	$.ajax({
		url: "/memberlist",
		cache: false,
		context: document.body,
		dataType: 'text',
		success: function (data) {
			$('#targets').removeClass('loading');
			
			var h = $(data).contents().find('#memberlist tbody tr .avatar-mini a').each(function(index, element) {
				
			var imgSrc = $(this).children('img').attr('src');
			var text = $(this).text().slice(1);
			var id = $(this).attr('href');
			
			var newLi = $('<li></li>').append(
				$('<a href="javascript:;" onclick="targetChosen(\'' + text + '\', \'' + id + '\')" title="' + text + '"></a>').append($('<img src="' + imgSrc + '" title="' + text + '" alt="' + text + '" />'))
			).appendTo($('#targetList'));
			
			})
		}
	});
}

/*	FUNCIÓN loadOptions ()                              
	Carga las opciones y las sitúa en #optionList       
                                                      */
function loadOptions() {
	$('#targetList').html('');
	
	$('#actions').addClass('disabled');
	$('#targets').addClass('disabled');
	$('#options').removeClass('disabled');
	
	$('optionList').html('');
	
	var cAction = getAction(g_chosenAction_uniqueId);
	
	if (cAction.bonus.indexOf('|')!=-1) {
		var bonusArray = cAction.bonus.split('|');
		
		for (var i=0; i<bonusArray.length; i++) {
			var cO = getOption(bonusArray[i]);
		
			$('<li></li>').append('<label><input type="checkbox" id="' + cO.id + '" value="' + cO.vary + ' " /> ' + cO.name + '</label>').appendTo($('#optionList'));
		}
	}
}

/*	FUNCIÓN searchActions (t)                           
		Buscar acciones y las sitúa en #actionList      
                                                      */
function searchActions(t) {
	var term = t.toLowerCase();
	if (term=='') {loadActions()} else {
		// Resultados comprimidos                       
		var searchResults = new Array();
		// Buscar en el nombre de la acción algo igual  
		for (var i=0; i<actions.length; i++) {
			if (actions[i].name.toLowerCase().indexOf(t)==0) {
				searchResults.push(actions[i]);
			}
		}
		
		// Buscar en los tags                           
		for (var i=0; i<actions.length; i++) {
			if (actions[i].tags.toLowerCase().indexOf(' ' + t + ' ')!=-1) {
				searchResults.push(actions[i]);
			}
		}
		
		// Buscar en el nombre de la acción algo que empiece por   
		for (var i=0; i<actions.length; i++) {
			if (actions[i].name.toLowerCase().indexOf(t)!=-1) {
				searchResults.push(actions[i]);
			}
		}
		
		// Eliminar duplicados                          
		searchResults = searchResults.unique();
		
		$('#actionList').html('');
		$('<li></li>').append('<h3>Resultados de búsqueda</h3>').appendTo($('#actionList'));
		for (var j=0; j<searchResults.length; j++) {
			var cAction = searchResults[j];
			$('<li></li>').append('<a href="javascript:;" onclick="actionChosen(\'' + cAction.uniqueId + '\')">' + cAction.name + '</h3>').appendTo($('#actionList'));
		}
	}
}

/*------------------------------------------------------------------
                                                                    
                                                                    
	FUNCIONES CHOSEN                                                
		Se ejecutan cuando se hace clic en una acción o target.     
		Especifican los próximos movimientos                        
																	
																	
------------------------------------------------------------------*/

/*	FUNCIÓN actionChosen (_uniqueId)                    
		Se ejecuta cuando se selecciona una acción      
                                                      */
function actionChosen(uID) {
	$('#actions').addClass('disabled');
	g_chosenAction_uniqueId = uID;
	for (var i=0; i<actions.length; i++) {
		if (actions[i].uniqueId==uID) {
			g_chosenAction_name = actions[i].name;
		}
	}
	
	$('#chosenAction strong').html(g_chosenAction_name);
	loadTargets();
}

/*	FUNCIÓN targetChosen (_name, _id)                   
		Se ejecuta cuando se selecciona un target       
                                                      */
function targetChosen(_name, _id) {
	$('#targets').addClass('disabled');
	g_chosenTarget_name = _name
	$('#chosenTarget strong').html(g_chosenTarget_name);
	g_chosenTarget_id = _id;
	
	loadOptions();
	loadMyData();
	loadTargetData();
	
	calculate();
}

/*------------------------------------------------------------------
                                                                    
                                                                    
	FUNCIONES LOAD___DATA                                           
		Cargan datos externos. Propios y del enemigo                
																	
																	
------------------------------------------------------------------*/

/*	FUNCIÓN loadMyData ()                               
		Carga por AJAX los datos propios                
		Cuando acaba, intenta ejecutar calculate()      
                                                      */
function loadMyData() {
	$.ajax({
		url: "/profile?mode=editprofile",
		cache: false,
		context: document.body,
		dataType: 'text',
		success: function (data) {
			var d2 = $(data).contents();
			aDEFAULT = {
				V : parseInt(d2.find('#profile_field_10_3').attr('value')),
				F : parseInt(d2.find('#profile_field_10_1').attr('value')),
				I : parseInt(d2.find('#profile_field_10_2').attr('value')),
				D : parseInt(d2.find('#profile_field_10_4').attr('value')),
			
				PUN : parseInt(d2.find('#profile_field_10_5').attr('value')),
				DOC : parseInt(d2.find('#profile_field_10_7').attr('value')),
				ESG : parseInt(d2.find('#profile_field_10_6').attr('value')),
				MEM : parseInt(d2.find('#profile_field_10_9').attr('value')),
				FAM : parseInt(d2.find('#profile_field_10_8').attr('value'))
			}
			aOK = true;
			
			calculate();
		}
	});
}

/*	FUNCIÓN loadTargetData ()                           
		Carga por AJAX los datos propios                
		Cuando acaba, intenta ejecutar calculate()      
                                                      */
function loadTargetData() {
	$.ajax({
		url: g_chosenTarget_id,
		cache: false,
		context: document.body,
		dataType: 'text',
		success: function (data) {
			var d2 = $(data).contents();
			dDEFAULT = {
				V : parseInt(d2.find('#field_id3 dd').text()),
				F : parseInt(d2.find('#field_id1 dd').text()),
				I : parseInt(d2.find('#field_id2 dd').text()),
				D : parseInt(d2.find('#field_id4 dd').text()),
			
				PUN : parseInt(d2.find('#field_id5 dd').text()),
				DOC : parseInt(d2.find('#field_id7 dd').text()),
				ESG : parseInt(d2.find('#field_id6 dd').text()),
				MEM : parseInt(d2.find('#field_id9 dd').text()),
				FAM : parseInt(d2.find('#field_id8 dd').text())
			}
			dOK = true;
			
			calculate();
		}
	});
}

/*------------------------------------------------------------------
                                                                    
                                                                    
	FUNCIÓN calculate                                               
		Calcula el resultado de la acción escogida para el objetivo 
		seleccionado                                                
																	
																	
------------------------------------------------------------------*/
function calculate() {
	$('#submit_bar button').html('<img src="http://i48.servimg.com/u/f48/17/38/25/48/ajax-l10.gif" />');
	// Primero comprueba si está todo cargado                       
	if (aOK && dOK) {
		// Obtenemos las ecuaciones de la acción                    
		var chosenAction = getAction(g_chosenAction_uniqueId);
		
		// Obtenemos las opciones elegidas desde el DOM             
		var chosenOptions = '';
		g_chosenOptions = '';
		$('#optionList input[type=checkbox]').each(function(index, element) {
			if ($(this).attr('checked')) {
				g_chosenOptions += $(this).attr('id') + ',';
				chosenOptions += $(this).val() + ';';
			}
	    });
		
		// Creamos un archivo temporal                              
		var aV = aDEFAULT.V; var aF = aDEFAULT.F; var aI = aDEFAULT.I; var aD = aDEFAULT.D;
		var dV = dDEFAULT.V; var dF = dDEFAULT.F; var dI = dDEFAULT.I; var dD = dDEFAULT.D;
		
		var aPUN = aDEFAULT.PUN; var aDOC = aDEFAULT.DOC; var aESG = aDEFAULT.ESG; var aMEM = aDEFAULT.MEM; var aFAM = aDEFAULT.FAM;
		var dPUN = dDEFAULT.PUN; var dDOC = dDEFAULT.DOC; var dESG = dDEFAULT.ESG; var dMEM = dDEFAULT.MEM; var dFAM = dDEFAULT.FAM;
		
		// Ejecutamos las opciones                                  
		
		eval(chosenOptions);
		
		// Obtenemos los dados y dificultad de la acción escogida   
		
		g_resultsDices = eval(chosenAction.dices);
		g_resultsDificulty = eval(chosenAction.dif);
		
		$('#submit_bar button').html('Pegar código');
	}
}


/*------------------------------------------------------------------
                                                                    
                                                                    
	FUNCIÓN pastecode                                               
		Pega el código BBCode+HTML en el cuadro de texto principal  
																	
																	
------------------------------------------------------------------*/
function pasteCode() {
	calculate();
	var copyString = '\n[hr]';
	copyString += '<span class="BSResults">';
	
	copyString += '<span class="BSData">'
	copyString += g_chosenAction_uniqueId;
	copyString += '|';
	copyString += g_chosenTarget_name + g_chosenTarget_id;
	copyString += '|';
	copyString += g_chosenOptions.slice(0,-1);
	copyString += '</span>';
	
	copyString += '<span class="BSDices">'
	if (g_resultsDificulty>15) {g_resultsDificulty=15}
	if (g_resultsDificulty<1) {g_resultsDificulty=1}
	
	if (g_resultsDices<0) {g_resultsDices=0}
	g_resultsDices = Math.round(g_resultsDices);
	
	copyString += '[roll=\"NEW_GENERIC' + parseInt(g_resultsDificulty,10) + '\"]' + g_resultsDices + '[/roll]';
	copyString += '[hide][size=18]El resultado de la tirada [b]solo aparecerá al enviar el post[/b]. Puede variar respecto a lo que se ve en la previsualización.[/size]\n';
	copyString += '[size=18][b]No se debe editar el post[/b] ya que el resultado de la tirada puede cambiar[/size][/hide]';
	copyString += '</span>';
	
	copyString += '</span>';
	
	var t = $(parent.document).find('#text_editor_textarea').val();
	$(parent.document).find('#text_editor_textarea').val(t + copyString);
	$(parent.document).find('input[name=disable_html]').attr('checked', false);

}