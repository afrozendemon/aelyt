function UI () {

    console.log('Iniitalizing Application UI');

    // DOM Element Initialization
    this.playButton = $('#playButton');
    this.stopButton = $('#stopButton');
    this.output = $('#output');
    this.searchBar = $('#searchBar');

    this.globalTimeOut = null;

    this.initializeUI();
   
}

UI.prototype.initializeUI = function() {
    var currentUI = this;

    currentUI.attachEventHandlers();
};

UI.prototype.attachEventHandlers = function() {
    var currentUI = this;

    currentUI.playButton.on('click', function(){
        console.log('playing...');
    
        var url = 'https://www.youtube.com/watch?v=7-qGKqveZaM';
        var id = '7-qGKqveZaM'
    
        ytdl.getInfo(id, (err, info) => {
            if (err) throw err;
            currentUI.output.html('<pre><code>' + JSON.stringify(info,null,2) + '</pre></code>');
          });	
    
    });
    
    currentUI.searchBar.keyup(function(){
        var input =  $.trim(this.value);
    
        currentUI.functions.delay(function(){
            console.log(input);
        }, 2500);
        
    });    


    currentUI.stopButton.on('click', function(){
        console.log('stopping...');
    
        currentUI.output.empty();
    
    });
    
};