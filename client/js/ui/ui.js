// Main UI Object.

/* 
Scans the entire DOM for elements that have a specified id="" attribute.
Attaches jQuery selectors to those elements. As variables named with the element ID, 
which are then attached to the UI object.
 */

function UI () {

    this.globalTimeOut = null;

    this.initializeUI();
}

UI.prototype.initializeUI = () => {
    var currentUI = this;

    currentUI.iterateOverDomElementsAndAttachToUiObject();
    currentUI.notifyOfDuplicates();
    currentUI.attachEventHandlers();    
};

UI.prototype.iterateOverDomElementsAndAttachToUiObject = () => {
    var currentUI = this;

    // Query the DOM for all uniquely identifiable elements by id attribute.
    var currentIdentifiedElements = document.querySelectorAll('*[id]:not([id=""])');

    for (var i=0; i < currentIdentifiedElements.length; i++) {
        var currentElement = currentIdentifiedElements[i];
        currentUI[currentElement.id] = $('#' + currentElement.id);
    }
};

UI.prototype.notifyOfDuplicates = () => {
    let currentUI = this;
    let elements = document.getElementsByTagName('*');
    let count = elements.length;
    let ids = [];

    for(var i=0; i<count; i++) {
        let currentID = elements[i].getAttribute('id');
        if(currentID !== null) {
            if(ids.indexOf(currentID) >= 0) {
                console.log('Duplicate ID detected: ' , currentID); // A duplicate ID has been identified!
            } else {
                ids.push(currentID);
            }
        }
    }
}