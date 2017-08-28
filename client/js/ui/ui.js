function UI () {

    this.globalTimeOut = null;

    this.initializeUI();
}

UI.prototype.initializeUI = function() {
    var currentUI = this;

    currentUI.iterateOverDomElementsAndAttachToUiObject();
    currentUI.attachEventHandlers();    
};

UI.prototype.iterateOverDomElementsAndAttachToUiObject = function() {
    var currentUI = this;

    // Query the DOM for all uniquely identifiable elements by id attribute.
    var currentIdentifiedElements = document.querySelectorAll('*[id]:not([id=""])');

    for (var i=0; i < currentIdentifiedElements.length; i++) {
        var currentElement = currentIdentifiedElements[i];
        currentUI[currentElement.id] = $('#' + currentElement.id);
    }
};