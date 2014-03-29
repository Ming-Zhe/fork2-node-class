var Class = function (param, parent){

	var construct
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

	// this.constructor.prototype.getA = function() {
	// 	return this.a;
	// };
	// this.constructor.prototype.getB = function() {
	// 	return this.b;
	// };

	for(var key in param){
		if(key != 'initialize'){
			construct.prototype[key] = param[key];
		}
	}
	// var parentP = parent.prototype;
	// var paramP = param.prototype;
	// for(var i in parentP){
	// 	paramP[i] = parentP[i];
	// }
	// console.log(construct);
	return construct;
}



  var A = Class({
    a: function() {
      return 1;
    }
  });

  var B = Class({
    b: function() {
      return 2;
    }
  },A);

  var b = new B();

  console.log(b.a);

module.exports = Class;



