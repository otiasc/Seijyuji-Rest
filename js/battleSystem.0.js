var Action = function(_id, _name, _tags, _dices, _dif, _results) {
	this.id = _id;
	this.name = _name;
	this.tags = _tags;
	this.dices = _dices;
	this.dif = _dif;
	this.results = _results;
}
var Result = function(_min, _max, _text) {
	this.min = _min;
	this.max = _max;
	this.text = _text;
}
