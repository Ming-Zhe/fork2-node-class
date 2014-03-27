var Class = function(argv) {
  if (typeof argv['initialize'] === 'undefined')
    return function(){};
  
  var constructor = argv['initialize'];
  return constructor;
}

var Foo = Class({initialize: constructor});
Foo();

module.exports = Class;