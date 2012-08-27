/*

	SHOP-SYSTEM CORE
	-Herramientas para la confirmación de compra y uso
	
*/
/* 

	CLASE Converter
		str CONVERSION: constante de modificación
		int LENGTH: longitud de la constante de modificación
	
	Métodos:
		toNumber(_string): convierte un string en número
		toString(_int): convierte un número en string

*/

var Converter = function() {};
Converter.CONVERSION = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
Converter.LENGTH = Converter.CONVERSION.length;

Converter.toNumber = function(_string) {
	var number = 0;
	for (var i=0; i<_string.length; i++) {
		number += Converter.CONVERSION.indexOf(_string.charAt(i)) * Math.pow(Converter.LENGTH, _string.length - i - 1);
	}
	return number;
}

Converter.toString = function(_number) {
	var string = '';
	var number = parseInt(_number, 10);
	var rest = number;
	var maxIndex = Math.floor(Math.log(number)/Math.log(Converter.LENGTH));

	for (var i=0; i<=maxIndex; i++) {
		var n = rest/Math.pow(Converter.LENGTH, (maxIndex-i));
		string += Converter.CONVERSION.charAt(Math.floor(n)).toString();
		rest -= Math.pow(Converter.LENGTH, (maxIndex-i)) * Math.floor(n);
	}
	
	return string;
}



/*
	CLASE Item
		int id: ID del item
		str name: Nombre del item
		str description: Descripción del item
		str image: Imagen del item
*/

var Item = function(_id, _name, _description, _image, _moreData) {
	this.id = parseInt(_id);
	this.name = _name;
	this.description = _description;
	this.image = _image;
	if (!_moreData) {
		this.moreData = {};
	} else {
		this.moreData = _moreData;
	}
}

/*
	CLASE HistoryStep
		str action
		Item item
		int prize
		int thread
		int post
*/
var HistoryStep = function(_action, _prize, _thread, _post) {
	if (!_prize) {_prize=0}
	if (!_thread) {_thread=0}
	if (!_post) {_post=0}
	
	this.action = _action;
	this.prize = _prize;
	this.thread = _thread;
	this.post = _post;
}

/*
	CLASE ItemList


*/
var ItemList = Array;

ItemList.prototype.prize = 0;
ItemList.prototype.addItem = function(_item, _amount) {
	if (!_amount) {_amount = 1}
	for (var i=0; i<_amount; i++) {
		this.push(_item);
	}
}

ItemList.prototype.removeItem = function(_item, _amount) {
	if (!_amount) {_amount = 1}
	var toClear = _amount;
	var i = 0;
	while (i<this.length && toClear>0) {
		if (this[i]==_item) {
			this.splice(i, 1);
			toClear--;
		} else {
			i++;
		}
	}
}

ItemList.prototype.getItemFromId = function(_id) {
	var it;
	for (var i=0; i<this.length; i++) {
		if (this[i].id==_id) {
			it = this[_id];
		}
	}
	return it;
}

ItemList.prototype.getString = function() {
	var subArray = new Array();
	for (var i=0; i<this.length; i++) {
		var a = this[i].id;
		if (!subArray[a]) {subArray[a]=1} else {subArray[a]+=1}
	}
	var str = '';
	for (var j=0; j<subArray.length; j++) {
		if (subArray[j]) {
			str += Converter.toString(j) + '/' + Converter.toString(subArray[j]) + '|';
		}
	}
	return str.slice(0,-1);
}


ItemList.fromString = function(str) {
	var arr = str.split('|');
	var r = new ItemList();
	for (var i=0; i<arr.length; i++) {
		var id = Converter.toNumber(arr[i].split('/')[0]);
		var amount = Converter.toNumber(arr[i].split('/')[1]);
		r.addItem(ALL_ITEMS.getItemFromId(id), amount);
	}
	return r;
}