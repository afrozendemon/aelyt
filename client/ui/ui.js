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
    let currentIdentifiedElements = document.querySelectorAll('*[id]:not([id=""])');

    for (let i=0; i < currentIdentifiedElements.length; i++) {
        let currentElement = currentIdentifiedElements[i];
        currentUI[currentElement.id] = $('#' + currentElement.id);
    }
};