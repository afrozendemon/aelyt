// Commonly used UI functions will be stored here.

UI.prototype.functions = {};

UI.prototype.functions.delay = (function(){
    var currentUI = this;

    var timer = 0;

    return function(callback, ms){
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
    };

})();