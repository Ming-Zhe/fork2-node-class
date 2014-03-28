var Class = function(param) {
  if (typeof param['initialize'] === 'undefined')
    return function(){};
  
  var constructor = param['initialize'];
  constructor.prototype.getA = function() {
  	return this.a;
  };
  constructor.prototype.getB = function() {
  	return this.b;
  };
  // console.log(constructor);
  return constructor;
}

// var constructor = function(a,b) {
//     this.a = a;
//     this.b = b;
//   };
// var Foo = Class({initialize: constructor});
// Foo();

var Foo = Class({
    initialize: function(a,b) {
      this.a = a;
      this.b = b;
    },

    getA: function() {
      return this.a;
    },

    getB: function() {
      return this.b;
    }
  });

var foo = new Foo(1,2);
var num = foo.getA;
// console.log(foo.getA);

module.exports = Class;









