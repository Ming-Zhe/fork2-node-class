var Class = function (param, parent){

	var construct;
	if (typeof param['initialize'] === 'undefined')
		construct = function(){};
	else
		construct = param['initialize'];

	if (parent){
		for (var key in parent.prototype){
			construct.prototype[key] = parent.prototype[key];
		}
		construct.__super__ = parent;
	}else{
		construct.__super__ = Object;
	}
	for(var key in param){
		if(key != 'initialize'){
			construct.prototype[key] = param[key];
		}
	}

  	construct.prototype.super = function(){
	    res = construct.__super__.prototype[arguments[0]].apply(this, [].slice.call(arguments, 1));
	    return res;
  	}

	// construct.prototype.super = function(){
	// 	if (!arguments){
	// 		return construct.__super__.prototype['self'].apply(this,[].slice.call(arguments, 1));
	// 	}
	// 	if (arguments.length == 1){
	// 		return construct.__super__.prototype[arguments[0]];
	// 	}
	// }
	
	construct.prototype.constructor = construct;
	return construct;
}


module.exports = Class;



