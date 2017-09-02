// Commonly used UI functions.

UI.prototype.functions = {};

UI.prototype.functions.displayLoader = (element) => {
	var currentUI = this;

	element.html('<i class="fa fa-refresh fa-spin fa-fw fa-2x"></i>');
};

UI.prototype.functions.delay = (() => {
	var currentUI = this;

    var timer = 0;

    return function(callback, ms){
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
    };

})();